<template>
  <section class="section pl-3 pt-2 pb-0">
    <div class="container is-max-desktop">
      <p style="font-size: 1.3rem;">Speech To Text</p>
    </div>
  </section>
  <section class="section pt-3">
    <div class="container is-max-desktop">
      <div class="columns is-mobile is-multiline is-centered has-text-centered">
        <div class="column is-full">
          <audio ref="audioPlayer" controls></audio>
        </div>
        <div class="column is-full">
          {{ !preHotTaskComplete ? (seconds > 0 ? 'Recorded ' + seconds + ' seconds.' : 'Wait! Preparing for recording.') : 'Please click the below button to record.' }}
        </div>
        <div class="column">
          <button :class="['button', isRecording ? 'is-danger' : 'is-success', isLoading ? 'is-loading' : ''] " style="width: 80%; height: 80px; font-size: 1.5rem" @click="isRecording ? stopRecordBtnTap() : startRecord()" :disabled="isLoading">{{ isRecording ? 'Click to finish' : 'Click to Record'}}</button>
        </div>
        <div class="column is-full px-0" style="text-align: left; font-size: 1.2rem">
          <span>Results</span>
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

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// If you already load encoderWorker.js using <script> tag,
// you don't need to define encoderWorkerFactory.
const workerOptions = {
  OggOpusEncoderWasmPath: 'https://cdn.jsdelivr.net/npm/opus-media-recorder@latest/OggOpusEncoder.wasm',
  WebMOpusEncoderWasmPath: 'https://cdn.jsdelivr.net/npm/opus-media-recorder@latest/WebMOpusEncoder.wasm'
};

// Replace MediaRecorder
window.MediaRecorder = OpusMediaRecorder;

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
      defaultMessage: "<p style='color: gray; height: 100%; justify-content: center; align-items: center;  display: flex;'>Empty</p>",

      preHotTaskComplete: true,
      seconds: 0,
      timer: null,
    }
  },
  computed: {
    token() {
      return "";
    }
  },
  mounted() {
    this.store.tag = 'audio';
  },
  methods: {
    startRecord() {

      this.isRecording = true;
      this.preHotTaskComplete = false;

      const that = this;

      navigator.mediaDevices.getUserMedia( { audio: true })
          .then(function (mediaStreamObj) {

            const mimetype = isSafari ? 'audio/wav' : 'audio/webm';

            let options = { mimeType: mimetype };

            that.mediaStreamObj = mediaStreamObj;
            that.mediaRecorder = new MediaRecorder(mediaStreamObj, options, workerOptions);

            // Set record to <audio> when recording will be finished
            that.mediaRecorder.addEventListener('dataavailable', (e) => {
              that.preHotTaskComplete = true;
              that.isRecording = false;
              that.$refs.audioPlayer.src =  URL.createObjectURL(e.data);
              that.request(e.data);
            });

            that.mediaRecorder.start();

            that.seconds = 0;
            that.timer = setInterval(function () {
              that.seconds++;
            }, 1000);
          })
          .catch(function (err) {
            that.preHotTaskComplete = true;
            that.isRecording = false;
            that.disposeAudioRecorder();
            alert(err.name + ":" + err.message);
          });
    },

    recordBtnTap() {
      this.cleanAllContent();

      this.startRecord();
    },

    stopRecordBtnTap() {
      this.disposeAudioRecorder();
    },

    async disposeAudioRecorder() {
      clearInterval(this.timer);

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
      this.seconds = 0
    },

    async request(mediaBlob) {

      if (this.seconds < 2) {
        alert('Please record at least 2 seconds.');
        return;
      }

      if (mediaBlob === null) {
        return;
      }

      // let audioData;
      // const audioResponse = await fetch(this.$refs.audioPlayer.src);
      // await audioResponse.blob().then((blob) => {
      //   audioData = blob
      // });

      const filename = isSafari ? 'audio.wav' : 'audio.webm';

      const formData = new FormData();
      formData.append('file', mediaBlob, filename);
      formData.append('model', 'whisper-1');
      formData.append('response_format', 'verbose_json');
      formData.append('temperature', 0);
      formData.append('prompt', '');

      this.isLoading = true;

      const headers = {
        "Content-Type": "multipart/form-data",
        // 'Authorization': 'Bearer ' + this.token
      };

      axios.post(this.store.aiProxy + '/v1/audio/transcriptions', formData, {headers})
          .then((response) => {
            this.isLoading = false
            this.seconds = 0;

            const language = response.data['language'];
            const duration = response.data['duration'];
            const segments = response.data['segments'];
            this.message = response.data['text'];
          })
          .catch((error) => {
            this.isLoading = false
            this.message = "";
            this.seconds = 0;

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