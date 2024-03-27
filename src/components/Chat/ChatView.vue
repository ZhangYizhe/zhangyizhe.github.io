<script setup>
import { useConfigStore } from "@/data/useConfigStore";
import {nextTick, onMounted, ref, watch} from "vue";
import axios from "axios";
import {useChatStore} from "@/data/useChatStore.js";

const config = useConfigStore();
const chatStore = useChatStore();

const inputTextareaRef = ref(null)
const inputText = ref("")


// Message
function sendBtnTap(e) {

  const textTrim = inputText.value.trim();

  if (textTrim === '') {
    return;
  }

  addNewMessage(textTrim);

  inputText.value = "";

  chatStore.requestMessage();
}

function reComposeBtnTap(index) {
  if (confirm('Are you sure you want to regenerate from here?')) {
    chatStore.messages = chatStore.messages.slice(0, index + 1);
    chatStore.requestMessage();
  }
}

function addNewMessage(content) {
  const message = {
    "role": "user",
    "content": content.replaceAll("\n", "<br />")
  }

  chatStore.messages.push(message)
}

// Textarea
function resizeTextarea() {
  inputTextareaRef.value.style.height = 0 + 'px';

  let inputHeight = inputTextareaRef.value.scrollHeight;

  if (inputHeight > 300) {
    inputHeight = 300;
  }

  inputTextareaRef.value.style.height = inputHeight + 'px';
}

function resetBtnTap() {
  if (confirm('Are you sure to clean?')) {
    chatStore.cleanAll();
  }
}

// Canvas Scroll
const mainCanvasRef = ref(null)
function scrollToBottom() {
  nextTick(() => {
    const el = mainCanvasRef.value;
    el.scrollTop = el.scrollHeight;
  })
}

watch(chatStore.messages, async (newValue, oldValue) => {
  scrollToBottom();
})

watch(inputText, async (newValue, oldValue) => {
  await nextTick(() => {
    resizeTextarea()
  })
})

onMounted(() => {
  config.tag = 'chat';

  resizeTextarea();
})

</script>

<template>
  <div class="canvas" ref="mainCanvasRef">
    <div class="columns is-multiline m-0">
      <template v-for="(message, index) in chatStore.messages">
        <div v-if="message.role !== 'system'"
             :class="['column is-full cal-basic', message.role === 'user' ? 'cal-user' : 'cal-assistant' ]">
          <div class="container is-max-desktop">
            <div class="columns is-multiline">
              <div class="column">
                <div class="columns is-mobile" style="overflow: hidden">
                  <div class="column is-narrow">
                    <img v-if="message.role !== 'user'" src="/public/img/chat/robot.png" class="shadow-sm"
                         style="width: 45px; height: 45px; border-radius: 4px; margin-right: 10px; background-color: white; padding: 2px"
                         alt="">
                    <img v-else src="/public/img/chat/laptop.png" class="shadow-sm"
                         style="width: 45px; height: 45px; border-radius: 4px; margin-right: 10px; background-color: white; padding: 2px;"
                         alt="">
                  </div>

                  <div class="column message" v-html=" message.content">

                  </div>
                </div>
              </div>
              <div class="column is-narrow" v-if="message.role === 'user' && !chatStore.isLoading">
                <button :class="['button is-white', chatStore.isLoading ? 'is-loading': '']"  @click="reComposeBtnTap(index)" :disabled="chatStore.isLoading">
                  <i class="bi bi-arrow-clockwise"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>

      <div class="column is-full cal-basic cal-assistant" v-if="chatStore.isLoading">
        <div class="container is-max-desktop">
          <div class="columns is-multiline">
            <div class="column">
              <div class="columns is-mobile">
                <div class="column is-narrow">
                  <img src="/public/img/chat/robot.png" class="shadow-sm"
                       style="width: 45px; height: 45px; border-radius: 4px; margin-right: 10px; background-color: white; padding: 2px"
                       alt="">
                </div>
                <div class="column message">
                  <div class="loader mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-full" style="height: 150px"></div>
    </div>
  </div>

  <div :class="['inputView', (chatStore.isLoading) ? 'inputView-disabled' : '']">
    <div class="columns is-gapless is-mobile">
      <div class="column is-narrow" style="margin: 0 0 0 0">
        <button type="button" :class="['button is-white']" @click="chatStore.showSetting =  true"><i class="bi bi-gear"></i>
        </button>
      </div>
      <div class="column">
        <textarea v-model="inputText" placeholder="說點什麼吧" ref="inputTextareaRef" @keyup.enter="chatStore.allowEnterToSend ? sendBtnTap() : null"
                  :disabled="chatStore.isLoading"></textarea>
      </div>
      <div class="column is-narrow" style="margin: 0 0 0 5px">
        <button type="button" :class="['button is-white', chatStore.isLoading ? 'is-loading': '']" @click="sendBtnTap" :disabled="chatStore.isLoading"><i class="bi bi-send"></i>
        </button>
        <button type="button" :class="['button is-white', chatStore.isLoading ? 'is-loading': '']" @click="resetBtnTap" :disabled="chatStore.isLoading"><i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  </div>

  <div :class="['modal', chatStore.showSetting ? 'is-active' : '' ]">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Setting</p>
        <button class="delete" aria-label="close"  @click="chatStore.showSetting = false"></button>
      </header>
      <section class="modal-card-body">
        <div class="columns is-multiline is-mobile">

          <div class="column is-full">
            <p class="title is-5">
              System Prompt (Optional)
            </p>
            <textarea class="column systemMessage" style="height: 150px" v-model="chatStore.systemMessage.content" placeholder="Please enter the System Prompt."></textarea>
          </div>

          <div class="column is-full">
            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label" style="width: 200px">Use 'Enter' key for send</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <label class="radio mr-3">
                      <input type="radio" :value="true" v-model="chatStore.allowEnterToSend">
                      Allow
                    </label>
                    <label class="radio">
                      <input type="radio" :value="false" v-model="chatStore.allowEnterToSend">
                      Deny
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button is-success" @click="chatStore.showSetting = false">Back</button>
        </div>
      </footer>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.canvas {
  height: calc(100vh - 52px);
  overflow: scroll;
}

.cal-basic {
  padding-top: 30px;
  padding-bottom: 30px;
}

.systemMessage {
  font-size: 1rem;

  box-shadow: 0 0 10px #e3e3e3;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  resize: none;
}

.message {
  white-space: pre-line;
  line-height: 25px;
  background-color: transparent;
}

.cal-user {
  background-color: #F4F6F9;
  border-bottom: 1px solid #e3e3e3;
}

.cal-assistant {
  background-color: white;
  border-bottom: 1px solid #e3e3e3;
}

textarea {
  border: none;
  resize: none;
  width: 100%;
  min-height: 1.3rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
}

.inputView {
  position: fixed;
  box-shadow: 0 0 10px #e3e3e3;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;

  bottom: 40px;
  //margin-bottom: 40px;
}

@media(max-width:960px) {
  .inputView{
    width: 95vw;
    left: 2.5vw;
  }
}

@media(min-width:960px) {
  .inputView{
    width: 70vw;
    left: 15vw;
  }
}

.inputView textarea {
  margin-top: 6px;
  padding: 20px 0 20px 20px;
  border: none;
  background-color: transparent;
}

.inputView-disabled {
  background-color: #F4F6F9;
}

.inputView button {
  border: none;
  padding-left: 25px;
  padding-right: 25px;
  height: 100%;
  background-color: transparent;
}

.inputView button:hover {
  border: none;
  background-color: #fafafa;
}

*:focus {
  outline: none;
}

.is-loading {
  border: 2px solid black;
  border-right-color: transparent;
  border-top-color: transparent;
  margin-top: auto;
  margin-bottom: auto;
}

.blinking-cursor {
  color: black;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

</style>