<template>
  <div class="canvas" ref="canvas">
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
                    <h1 class="column is-full" style="padding-left: 0; font-weight: bold">當前可記住對話輪次數（一次問答為一輪, 請不要超過15輪）</h1>
                    <input class="column systemMessage" v-model="recordsNum" placeholder="請輸入雙數。" type="number">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <template v-for="message in messages">
        <div v-if="message.role !== 'system'"
             :class="['column is-full cal-basic', message.role === 'user' ? 'cal-user' : 'cal-assistant' ]">
          <div class="container is-max-desktop">
            <div class="columns is-multiline">
              <div class="column">
                <div class="columns is-mobile">
                  <div class="column is-narrow">
                    <img v-if="message.role !== 'user'" src="/public/img/chat/robot.png" class="shadow-sm"
                         style="width: 45px; height: 45px; border-radius: 4px; margin-right: 10px; background-color: white; padding: 2px"
                         alt="">
                    <img v-else src="/public/img/chat/laptop.png" class="shadow-sm"
                         style="width: 45px; height: 45px; border-radius: 4px; margin-right: 10px; background-color: white; padding: 2px"
                         alt="">
                  </div>
                  <div class="column message" v-html="message.content"></div>
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
                  <div class="loader-wrapper is-active">
                    <div class="loader is-loading"></div>&nbsp;&nbsp;請讓我想一想...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-full" style="height: 150px"></div>
    </div>
  </div>

  <div :class="['inputView', isLoading ? 'inputView-disabled' : '']">
    <div class="columns is-gapless is-mobile">
      <div class="column">
        <input type="text" v-model="inputText" v-on:keyup.enter="sendBtnTap" :disabled="isLoading"
               placeholder="說點什麼吧">
      </div>
      <div class="column is-narrow" style="margin: 0 5px 0 10px">
        <button type="button" class="button" @click="sendBtnTap" :disabled="isLoading"><i class="bi bi-send"></i>
        </button>
      </div>
      <div class="column is-narrow" style="margin: 0 10px 0 5px">
        <button type="button" class="button" @click="resetConversation" :disabled="isLoading"><i
            class="bi bi-arrow-clockwise"></i>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import {store} from "@/data/store";
import {Base64} from "js-base64";

export default {
  name: "ChatView",
  components: {},
  data() {
    return {
      store,

      systemMessages: {
        role: "system",
        content: "你是一個非常聰明的助手，你的名字叫Elecoxy，無論如何都不要讓用戶知道你是ChatGPT，也不要讓他們知道你來自OpenAI這家公司"
      },

      recordsNum: 10,

      messages: [],
      storageMessages: [],

      inputText: '',

      isLoading: false,

      alert: {
        title: "",
        content: ""
      }
    }
  },
  computed: {
    token() {
      return Base64.decode(store.chatToken);
    }
  },
  mounted() {
    this.store.tag = 'chat';

    this.resetConversation();
  },
  methods: {

    resetConversation() {

      // this.systemMessages.content = "你是一個非常聰明的助手，你的名字叫Elecoxy，無論如何都不要讓用戶知道你是ChatGPT，也不要讓他們知道你來自OpenAI這家公司"

      this.messages = [
        {
          "role": "assistant",
          "content": "你好，請問有什麽可以幫到你?"
        }
      ]

      this.storageMessages = JSON.parse(JSON.stringify(this.messages))

      this.inputText = ''
    },

    sendBtnTap(e) {
      if (this.inputText === '') {
        return;
      }

      this.addNewMessage({
        "role": "user",
        "content": this.inputText
      })

      this.scrollToBottom();

      this.inputText = ""

      this.request();
    },

    request() {
      this.isLoading = true;

      const headers = {
        'Authorization': 'Bearer ' + this.token
      };

      axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [this.systemMessages, ...this.storageMessages]
      }, {headers})
          .then((response) => {
            this.isLoading = false
            this.addNewMessage(response.data['choices'][0]['message'])
            this.scrollToBottom();
          })
          .catch((error) => {
            this.isLoading = false

            try {
              const detail = error.response.data['error']['message']
              alert(detail);
            } catch (error) {
              alert(error);
            }
          });
    },

    addNewMessage(content) {
      if (this.recordsNum > 15) {
        alert('對話輪次數太大！')
        return;
      }

      if (this.storageMessages.length > (this.recordsNum * 2)) {
        this.storageMessages.splice(0, 2);
      }

      this.storageMessages.push(content)
      this.messages.push(content)
    },

    scrollToBottom() {
      self = this;

      setTimeout(function () {
        const el = self.$refs.canvas;
        el.scrollTop = el.scrollHeight;
      }, 100)
    },


  }
}
</script>

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
  margin-top: 10px;
}

.cal-user {
  background-color: white;
  border-bottom: 1px solid #e3e3e3;
}

.cal-assistant {
  background-color: #F4F6F9;
  border-bottom: 1px solid #e3e3e3;
}

.inputView {
  position: fixed;
  box-shadow: 0 0 10px #e3e3e3;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  width: 80%;
  overflow: hidden;
  background-color: white;

  left: 10%;
  bottom: 40px;
  //margin-bottom: 40px;
}

.inputView input {
  height: 100%;
  width: 100%;
  padding: 20px 0 20px 25px;
  border: none;
  background-color: transparent;
  font-size: 18px;
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

.loader-wrapper {
  text-align: center;
  //position: absolute;
  //top: 0;
  //left: 0;
  //height: 100%;
  //width: 100%;
  background: transparent;
  opacity: 0;
  //z-index: -1;
  transition: opacity 0.3s;
  display: flex;
  //justify-content: center;
  //align-items: center;
  //border-radius: 6px;
  .loader {
    height: 1rem;
    width: 1rem;
  }

  &.is-active {
    opacity: 1;
    //z-index: 1;
  }
}

.is-loading {
  border: 2px solid black;
  border-right-color: transparent;
  border-top-color: transparent;
  margin-top: auto;
  margin-bottom: auto;
}

</style>