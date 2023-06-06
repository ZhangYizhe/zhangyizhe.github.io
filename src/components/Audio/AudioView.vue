<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-multiline is-centered has-text-centered">
        <div class="column is-full">
          {{ seconds === null ? 'No record.' : 'Recorded ' + seconds + ' seconds.'}}
        </div>
        <div class="column">
          <button class="button is-success" style="width: 50%; height: 80px" @touchstart="recordBtnTap" @touchend="stopRecordBtnTap" @mousedown="recordBtnTap" @mouseup="stopRecordBtnTap" :disabled="isLoading">{{ isRecording ? 'Recording...' : 'Hold to Record'}}</button>
        </div>
        <div class="column is-full">
          <audio ref="audioPlayer" controls></audio>
        </div>
        <div class="column is-full px-0" style="text-align: left; font-weight: bold; font-size: 1.2rem">
          <span>Speech to text</span>
        </div>
        <div class="column is-full message" v-html="message.trim() !== '' ? message : defaultMessage"></div>
        <div class="column is-full px-0 pt-0" style="text-align: left; font-weight: bold; font-size: 1.2rem">
          <button class="button is-danger" @click="cleanAllContent" :disabled="isLoading">Clean</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import axios from "axios";
import {Base64} from "js-base64";
import {store} from "@/data/store";
import {ref} from "vue";

export default {
  name: "AudioView",
  data() {
    return {
      store,

      isRecording: false,
      isLoading: false,

      mediaRecorder: null,
      mediaDataArray: [],
      mediaStreamObj: null,

      message: "",
      defaultMessage: "<p style='color: gray; height: 100%; justify-content: center; align-items: center;  display: flex;'>Please hold to record</p>",

      seconds: null,
      timer: null,
    }
  },
  computed: {
    token() {
      return Base64.decode(store.imageToken);
    }
  },
  mounted() {
    this.store.tag = 'audio';
  },
  methods: {
    startRecord() {

      const that = this;

      navigator.mediaDevices.getUserMedia( { audio: true })
          .then(function (mediaStreamObj) {

            that.mediaStreamObj = mediaStreamObj;
            that.mediaRecorder = new MediaRecorder(mediaStreamObj);

            that.mediaRecorder.ondataavailable = function (ev) {
              that.mediaDataArray.push(ev.data);
            }

            that.mediaDataArray = [];

            that.mediaRecorder.onstop = function (ev) {
              clearInterval(that.timer);

              const mediaBlob = new Blob(that.mediaDataArray, { 'type': 'audio/m4a' });
              that.mediaDataArray = [];
              that.$refs.audioPlayer.src = window.URL.createObjectURL(mediaBlob);

              that.request(mediaBlob);
            }

            that.mediaRecorder.start();

            that.seconds = 0;
            that.timer = setInterval(function () {
              that.seconds++;
            }, 1000);
          })
          .catch(function (err) {
            that.isRecording = false;
            that.disposeAudioRecorder();
            alert(err.name + ":" + err.message);
          });
    },

    recordBtnTap() {
      this.isRecording = true;

      this.cleanAllContent();

      this.startRecord();
    },

    stopRecordBtnTap() {
      this.isRecording = false;

      this.disposeAudioRecorder();
    },

    async disposeAudioRecorder() {
      if (this.mediaRecorder !== null) {
        this.mediaRecorder.stop();
      }

      if (this.mediaStreamObj !== null) {
        this.mediaStreamObj.getTracks().forEach(function (track) {
          track.stop();
        });
      }

      this.mediaRecorder = null
      this.mediaDataArray = []
      this.mediaStreamObj = null
    },

    cleanAllContent() {
      this.disposeAudioRecorder();
      this.$refs.audioPlayer.src = "";
      this.message = "";
      this.seconds = null
    },

    async request(mediaBlob) {

      if (mediaBlob === null) {
        return;
      }

      // let audioData;
      // const audioResponse = await fetch(this.$refs.audioPlayer.src);
      // await audioResponse.blob().then((blob) => {
      //   audioData = blob
      // });

      const formData = new FormData();
      formData.append('file', mediaBlob, 'audio.m4a');
      formData.append('model', 'whisper-1');
      formData.append('response_format', 'verbose_json');
      formData.append('temperature', 0);
      formData.append('prompt', '');

      this.isLoading = true;

      const headers = {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + this.token
      };

      axios.post(this.store.aiProxy + '/v1/audio/transcriptions', formData, {headers})
          .then((response) => {
            this.isLoading = false

            const language = response.data['language'];
            const duration = response.data['duration'];
            const segments = response.data['segments'];
            this.message = response.data['text'];
          })
          .catch((error) => {
            this.isLoading = false
            this.message = "";

            try {
              const detail = error.response.data['error']['message']
              alert(detail);
            } catch (error) {
              alert(error);
            }
          });
    },
  }
}
</script>

<style scoped>

.message {
  white-space: pre-line;
  line-height: 25px;
  background-color: #f4f6f9;
  margin-top: 10px;
  min-height: 100px;
  text-align: left;
}

</style>