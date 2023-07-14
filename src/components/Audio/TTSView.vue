<script setup>
import { useConfigStore } from "@/data/useConfigStore";
import {nextTick, onMounted, ref, watch} from "vue";
import { useAVBars } from 'vue-audio-visual'

const config = useConfigStore();

const isLoading = ref(false);

const inputStr = ref('')

const ttsInputRef = ref(null);

// Audio
const player = ref(null)
const isPlaying = ref(false);
const lastTime = ref("--:--");
const canvas = ref(null)
const mySource = "public/audios/東方之珠.mp3"

// composable function useAVBars
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
    player.value.currentTime = 0;
    player.value.pause();
  }
}

function onPlayTimeChange() {
  const lastSeconds = Math.floor(player.value.duration - player.value.currentTime)
  const minutes = Math.floor(lastSeconds / 60);
  const seconds = (lastSeconds - minutes * 60) % 60;
  lastTime.value = (minutes > 9 ? minutes.toString() : "0" + minutes.toString()) + ":" + (seconds > 9 ? seconds.toString() : "0" + seconds.toString());
}

function resizeTextarea() {
  nextTick(() => {
    ttsInputRef.value.style.height = 0 + 'px';
    let ttsInputHeight = ttsInputRef.value.scrollHeight;
    ttsInputRef.value.style.height = ttsInputHeight + 'px';
  })
}

onMounted(() => {
  config.tag = 'tts';

  resizeTextarea();
  azureKeySet();
})

watch(inputStr, () => {
  resizeTextarea()
})

watch(() => config.elecoxyKey, async (newValue, oldValue) => {
  await nextTick(() => {
    azureKeySet(true);
  })
})

async function azureKeySet(force = false) {
  isLoading.value = true;
  await config.setAzureKey(force);
  isLoading.value = false;
}

</script>

<template>
<div class="hero">
  <div class="hero-body p-0">
    <div class="container px-3 pb-5">
      <div class="columns is-mobile is-multiline">
        <div class="column is-full">
          <div class="columns is-multiline is-mobile mt-3 mx-0 mb-2">
            <h1 class="column is-full p-0 mb-2" style="font-weight: bold">Elecoxy Key</h1>
            <input class="column systemMessage" :value="config.elecoxyKey" placeholder="Please input the elecoxy key"
                   type="password" @change="config.elecoxyKey = $event.target.value">
          </div>
        </div>
        <div class="column is-full pt-1">
          <div class="columns is-multiline is-mobile">
            <div class="column is-full m-0 p-0">
              <audio ref="player" :src="mySource" @playing="isPlaying = true" @pause="isPlaying = false" @timeupdate="onPlayTimeChange" @loadeddata="onPlayTimeChange"/>
            </div>
            <div class="column is-full py-0">
              <div style="background-color: black; border-radius: 5px; height: 300px">
                <canvas ref="canvas" style="margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, calc(-50% - 50px));" v-if="isPlaying"/>
              </div>
            </div>
            <div v-if="player" class="column is-full is-align-items-center is-flex">
              <span class="mr-3 button is-warning" style="min-width: 100px">
                {{lastTime}}
              </span>
              <div class="button" @click="audioPlayBtnTap">
                <template v-if="!isPlaying">
                  Play
                </template>
                <template v-else>
                  Stop
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="columns is-vcentered">
            <div class="column">
              <textarea ref="ttsInputRef" placeholder="Type something here" v-model="inputStr"></textarea>
            </div>
            <div class="column is-narrow">
              <div class="button is-warning">
                Generation
              </div>
            </div>
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

</style>