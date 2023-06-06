<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-multiline">
        <div class="column is-full">
          <div class="button" @touchstart="recordBtnTap" @touchend="stopRecordBtnTap" @mousedown="recordBtnTap" @mouseup="stopRecordBtnTap">{{ isRecording ? 'Recording...' : 'Hold to Record'}}</div>

        </div>
        <div class="column">
          <audio ref="audioPlayer" controls></audio>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import axios from "axios";
import {Base64} from "js-base64";
import {store} from "@/data/store";

export default {
  name: "AudioView",
  data() {
    return {
      store,

      isRecording: false,

      mediaRecorder: null,
      audioDataArray: [],
      mediaStreamObj: null,
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
              that.audioDataArray.push(ev.data);
            }

            that.audioDataArray = [];

            that.mediaRecorder.onstop = function (ev) {

              console.log(that.audioDataArray)

              const audioData = new Blob(that.audioDataArray, { 'type': 'audio/mp3;' });
              that.audioDataArray = [];

              that.$refs.audioPlayer.src = window.URL.createObjectURL(audioData);
            }

            that.mediaRecorder.start();
          })
          .catch(function (err) {
            alert(err.name + ":" + err.message);
          });
    },

    recordBtnTap() {
      this.isRecording = true;

      this.startRecord();
    },

    stopRecordBtnTap() {
      this.isRecording = false;

      if (this.mediaRecorder === null) {
        return;
      }

      this.mediaRecorder.stop();
      this.mediaStreamObj.getTracks().forEach(function(track) {
        track.stop();
      });
    },

    request() {

      if (this.prompt === "") {
        return;
      }

      this.isLoading = true;

      const headers = {
        'Authorization': 'Bearer ' + this.token
      };

      axios.post(this.store.aiProxy + '/v1/images/generations', {
        prompt: this.prompt,
        n: 1,
        size: "1024x1024"
      }, {headers})
          .then((response) => {
            this.isLoading = false

            const created = response.data['created']
            this.imgUrl = response.data['data'][0]['url'];
          })
          .catch((error) => {
            this.isLoading = false
            this.imgUrl = null;

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

</style>