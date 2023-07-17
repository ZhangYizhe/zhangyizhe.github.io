<script setup>
import { useConfigStore } from "@/data/useConfigStore";
import { useTTSStore } from "@/data/useTTSStore";
import {nextTick, onMounted, ref, watch} from "vue";
import {useAVBars} from 'vue-audio-visual'
import axios from "axios";

const config = useConfigStore();
const ttsStore = useTTSStore();

const isLoading = ref(false);

const ttsInputRef = ref(null);

// TTS
async function ttsBtnTap() {
  audioStopBtnTap();

  const _inputStr = ttsStore.lastVoiceStr.trim();
  if (_inputStr === '') {
    return;
  }
  isLoading.value = true;
  if (ttsStore.azureSpeech === null) {
    await azureKeySet();
  }

  const headers = {
    'Content-Type': 'application/ssml+xml',
    'Ocp-Apim-Subscription-Key': ttsStore.azureSpeech.key,
    'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
  };

  const voice = ttsStore.voiceList[ttsStore.currentVoice]

  let prosody = '<prosody pitch="' + ttsStore.azurePitch +'" rate="' + ttsStore.azureSpeed + '">' + _inputStr + "</prosody>"
  let content = "<voice xml:lang='zh-CN' xml:gender='"  + voice.gender + "' name='zh-HK-" + voice.name +"Neural' style='SeniorMale'>" + prosody + "</voice>"
  let requestStr = "<speak version='1.0' xml:lang='zh-HK'>" + content + " </speak>"

  axios.post(ttsStore.azureSpeech.url, requestStr, {
    responseType: 'arraybuffer',
    headers: headers
  })
      .then((response) => {
        isLoading.value = false
        const blobUrl = window.URL.createObjectURL(new Blob([response.data], {
          type: 'audio/mpeg',
        }));
        audioSource.value = blobUrl;
      })
      .catch((error) => {
        isLoading.value = false
        try {
          const detail = error.response.data['error']['message']
          alert(detail);
        } catch (_) {
          alert(error);
        }
      });
}

function cleanContentBtnTap() {
  if (confirm('Are you sure you want to delete all content?')) {
    ttsStore.$reset()
  }
}

function resizeTextarea() {
  nextTick(() => {
    ttsInputRef.value.style.height = 0 + 'px';
    let ttsInputHeight = ttsInputRef.value.scrollHeight;
    ttsInputRef.value.style.height = ttsInputHeight + 'px';
  })
}

// Audio
const player = ref(null)
const isPlaying = ref(false);
const lastTime = ref("--:--");
const canvas = ref(null)
const audioSource = ref("")

initAudioCanvas()
function initAudioCanvas() {
  nextTick(() => {
    useAVBars(player, canvas, { canvFillColor: "black", canvHeight: 60, canvWidth: 240, barWidth:2, barSpace: 2, barColor: ['#FFF'], symmetric: true})
  })
}

function audioPlayBtnTap() {
  if (!isPlaying.value) {
    player.value.play();
  } else {
    audioStopBtnTap()
  }
}

function audioStopBtnTap() {
  player.value.currentTime = 0;
  player.value.pause();
}

function onPlayTimeChange() {
  const lastSeconds = Math.floor(player.value.duration - player.value.currentTime)
  const minutes = Math.floor(lastSeconds / 60);
  const seconds = (lastSeconds - minutes * 60) % 60;
  lastTime.value = (minutes > 9 ? minutes.toString() : "0" + minutes.toString()) + ":" + (seconds > 9 ? seconds.toString() : "0" + seconds.toString());
}

watch(isPlaying, (newValue, oldValue) => {
  if (!newValue) {
    audioStopBtnTap();

    nextTick(() => {
      onPlayTimeChange();
    })
  }
})

onMounted(() => {
  config.tag = 'tts';

  resizeTextarea();
  azureKeySet();
})

watch(() => ttsStore.lastVoiceStr, () => {
  resizeTextarea()
})

watch(() => config.elecoxyKey, async (newValue, oldValue) => {
  await nextTick(() => {
    azureKeySet(true);
  })
})

async function azureKeySet(force = false) {
  isLoading.value = true;
  await ttsStore.setTTSAzureKey();
  isLoading.value = false;
}

</script>

<template>
<div class="hero">
  <div class="hero-body p-0">
    <div class="container px-3 pb-5">
      <div class="columns is-mobile is-multiline m-0 mt-5">
        <div class="column is-full p-0">
          <div class="columns is-multiline is-mobile m-0">
            <div class="column is-full m-0 p-0">
              <audio ref="player" :src="audioSource" @playing="isPlaying = true" @pause="isPlaying = false;" @timeupdate="onPlayTimeChange" @loadeddata="onPlayTimeChange"/>
            </div>
            <div class="column is-full py-0">
              <div style="background-color: black; border-radius: 5px; height: 300px; position: relative">
                <canvas class="audioVisualCanvas" ref="canvas" v-if="isPlaying"/>
              </div>
            </div>
            <div v-if="player" class="column is-full is-align-items-center is-flex">
              <div class="buttons has-addons">
                <button class="button is-warning" style="min-width: 100px" disabled>
                  {{lastTime}}
                </button>
                <button :class="['button', isLoading ? 'is-loading' : '']" @click="audioPlayBtnTap" :disabled="isLoading">
                  <template v-if="!isPlaying">
                    Play
                  </template>
                  <template v-else>
                    Stop
                  </template>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="buttons has-addons">
            <button class="button" disabled>Pitch</button>
            <div :class="['button', pitch === ttsStore.azurePitch ? 'is-warning' : '']"  @click="ttsStore.azurePitch = pitch" v-for="pitch in ttsStore.pitchList">
              {{ pitch }}
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="buttons has-addons">
            <button class="button" disabled>Speed</button>
            <div :class="['button', speed === ttsStore.azureSpeed ? 'is-warning' : '']"  @click="ttsStore.azureSpeed = speed" v-for="speed in ttsStore.speedList">
              {{ speed }}
            </div>
          </div>
        </div>
        <div class="column">
          <div class="buttons has-addons">
            <button class="button" disabled>Voice</button>
            <div :class="['button', voice.id === ttsStore.currentVoice ? 'is-warning' : '']"  @click="ttsStore.currentVoice = voice.id" v-for="voice in ttsStore.voiceList">
              {{ voice.displayName }} : {{ voice.gender }}
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="columns is-multiline is-mobile is-vcentered">
            <div class="column is-full">
              <textarea ref="ttsInputRef" placeholder="Type something here" v-model="ttsStore.lastVoiceStr"></textarea>
            </div>
          </div>
        </div>
        <div class="column is-full pt-0">
          <div class="buttons">
            <button :class="['button is-danger', isLoading ? 'is-loading' : '']" @click="cleanContentBtnTap" :disabled="isLoading">
              Clear
            </button>
            <button :class="['button is-warning', isLoading ? 'is-loading' : '']" @click="ttsBtnTap" :disabled="isLoading">
              Generation
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

.systemMessage {
  font-size: 1rem;

  box-shadow: 0 0 10px #e3e3e3;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  resize: none;
}

textarea {
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  resize: none;
  width: 100%;
  min-height: 100px;
  font-size: 1.3rem;
  line-height: 1.8rem;
}

.audioVisualCanvas {
  margin: 0;
  position: absolute;
  left: 50%;
  top: calc(150px - 30px);
  transform: translateX(-50%);
}

</style>