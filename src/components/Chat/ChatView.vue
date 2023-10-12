<script setup>
import { useConfigStore } from "@/data/useConfigStore";
import {nextTick, onMounted, ref, watch} from "vue";
import axios from "axios";

const config = useConfigStore();

const systemMessages = ref({
  role: "system",
  content: "",
})

const recordsNum = ref(20)

const tempMessage = ref("")
const messages = ref([])

const inputTextareaRef = ref(null)
const inputText = ref("")

const isLoading = ref(false)

// Message
function sendBtnTap(e) {

  const textTrim = inputText.value.trim();

  if (textTrim === '' || config.gptKey === '') {
    return;
  }

  addNewMessage({
    "role": "user",
    "content": textTrim.replaceAll("\n", "<br />")
  })

  scrollToBottom();

  inputText.value = "";

  request();
}

function reComposeBtnTap(index) {
  messages.value = messages.value.slice(0, index);

  scrollToBottom();

  request();
}

async function request() {

  isLoading.value = true;

  axios.post(
      config.bugptURL,
      {
        messages: systemMessages.value.content === '' ? messages.value : [systemMessages.value, ...messages.value],
        temperature: 0
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      )
      .then(function (response) {
        try {
          isLoading.value = false;

          const data = response.data;
          if (data.error !== undefined) {
            alert(data.error.message);
            return;
          }
          const message = data.choices[0].message;
          messages.value.push(message);

          scrollToBottom();
        } catch (e) {
          alert(e)
        }
      })
      .catch(function (error) {
        isLoading.value = false;
        alert(error);
      })
}

function addNewMessage(content) {
  if (recordsNum.value > 50) {
    alert('對話輪次數太大！')
    return;
  }

  if (messages.value.length > (recordsNum.value * 2)) {
    alert('已達到最大對話輪次。');
    return;
  }

  messages.value.push(content)
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
    resetConversation()
  }
}

function resetConversation() {
  messages.value = []
  inputText.value = ''

  resizeTextarea()
}

// Canvas Scroll
const mainCanvasRef = ref(null)
function scrollToBottom() {
  nextTick(() => {
    const el = mainCanvasRef.value;
    el.scrollTop = el.scrollHeight;
  })
}

function scrollToBottomWithoutTimer() {
  nextTick(() => {
    const el = mainCanvasRef.value;
    el.scrollTop = el.scrollHeight;
  })
}

watch(inputText, async (newValue, oldValue) => {
  await nextTick(() => {
    resizeTextarea()
  })
})

onMounted(() => {
  config.tag = 'chat';

  resetConversation();
})

</script>

<template>
  <div class="canvas" ref="mainCanvasRef">
    <div class="columns is-multiline m-0">
      <div :class="['column is-full cal-basic', systemMessages.role === 'user' ? 'cal-user' : 'cal-assistant' ]">
        <div class="container is-max-desktop">
          <div class="columns is-multiline">
            <div class="column">
              <div class="columns is-mobile">
                <div class="column is-narrow">
                  <img src="/public/img/chat/robot.png" class="shadow-sm"
                       style="width: 45px; height: 45px; border-radius: 4px; margin-right: 10px; background-color: white; padding: 2px"
                       alt="">
                </div>
                <div class="column" style="margin-right: 15px">
                  <div class="columns is-multiline is-mobile">
                    <h1 class="column is-full" style="padding-left: 0; font-weight: bold">聊天機器人特性</h1>
                    <textarea class="column systemMessage" v-model="systemMessages.content" placeholder="請輸入聊天機器人的特性。"></textarea>
                  </div>
                  <div class="columns is-multiline is-mobile">
                    <h1 class="column is-full" style="padding-left: 0; font-weight: bold">當前可記住對話輪次數（一次問答為一輪, 請不要超過50輪）</h1>
                    <input class="column systemMessage" v-model="recordsNum" placeholder="請輸入雙數。" type="number">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template v-for="(message, index) in messages">
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
              <div class="column is-narrow" v-if="message.role === 'assistant'">
                <div style="padding: 4px; border: 1px solid lightgrey; border-radius: 4px; cursor: pointer" @click="reComposeBtnTap(index)">
                  <i class="bi bi-arrow-clockwise"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <div class="column is-full cal-basic cal-assistant" v-if="isLoading">
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
                  <span v-html="tempMessage">

                  </span>
                  <span class='blinking-cursor'>▋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-full" style="height: 150px"></div>
    </div>
  </div>

<!--  <template v-if="config.gptKey !== ''">-->
    <div :class="['inputView', (isLoading || config.gptKey === '') ? 'inputView-disabled' : '']">
      <div class="columns is-gapless is-mobile">
        <div class="column">
        <textarea v-model="inputText" placeholder="說點什麼吧" ref="inputTextareaRef"
                  :disabled="isLoading || config.gptKey === ''"></textarea>

          <!--  @keyup.enter.exact="sendBtnTap"-->
        </div>
        <div class="column is-narrow" style="margin: 0 0 0 5px">
          <button type="button" class="button" @click="sendBtnTap" :disabled="isLoading || config.gptKey === ''"><i class="bi bi-send"></i>
          </button>
          <button type="button" class="button" @click="resetBtnTap" :disabled="isLoading || config.gptKey === ''"><i
              class="bi bi-arrow-clockwise"></i>
          </button>
        </div>
      </div>
    </div>
<!--  </template>-->

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
  background-color: white;
  border-bottom: 1px solid #e3e3e3;
}

.cal-assistant {
  background-color: #F4F6F9;
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