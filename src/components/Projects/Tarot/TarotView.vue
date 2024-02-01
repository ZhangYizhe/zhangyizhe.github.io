<script setup>
import {nextTick, onMounted, ref} from "vue";
import {useConfigStore} from "@/data/useConfigStore";
import {useTarotStore} from "@/data/useTarotStore";
import axios from "axios";

const config = useConfigStore();
const tarotStore = useTarotStore();

onMounted(() => {
  config.tag = 'projects';

  nextTick(() => {
    resizeTextarea()
  })
})

function addCard() {
  tarotStore.currentTarotList.push(
      {
        value: "",
        smallValue: "",
        direction: true,
        showMenu: false,
        showSmallMenu: false,
      }
  )
}

function deleteCard(index) {
  tarotStore.currentTarotList.splice(index, 1)
}

function isSmall(title) {
  return title === '錢幣' || title === '權杖' || title === '聖杯' || title === '寶劍';
}

const isLoading = ref(false)
function getResult() {
  if (tarotStore.currentTarotQuestion === "") {
    alert("請你先輸入你的問題。")
    return
  }

  if (tarotStore.currentTarotList.length === 0) {
    alert("請你增加你抽到的塔羅牌卡片。")
    return
  }

  if (isLoading === true) {
    return;
  }
  isLoading.value = true;

  let prompts = "你是一個塔羅牌解牌師，你可以根據我的問題和抽到的牌組來幫我進行結果解析。";

  let question = tarotStore.currentTarotQuestion;
  let tarots = ""

  for (const index in tarotStore.currentTarotList) {
    const card = tarotStore.currentTarotList[index]
    tarots += (parseInt(index) + 1).toString() + ". " + card.value + card.smallValue + (card.direction === true ? ' - 正位' : ' - 逆位') + "\n"
  }

  prompts += "\n\n我的問題是：\n```\n" + question + "\n```"
  prompts += "\n\n我抽到的牌組是：\n```\n" + tarots + "\n```"

  prompts += "\n\n解析結果是：\n"

  const headers = {
    'Content-Type': 'application/json',
  };

  axios.post(config.bugptURL, {
    temperature: 0,
    messages: [
      {
        "role": "user",
        "content": prompts,
      }
    ]
  }, {headers})
      .then((response) => {
        isLoading.value = false

        try {
          tarotStore.result = response.data['choices'][0]['message']["content"];
          nextTick(() => {
            resizeTextarea()
          })
        } catch (e) {
          alert(response.data)
        }
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

const inputRef = ref(null)
function resizeTextarea() {
  inputRef.value.style.height = 0 + 'px';

  let height = inputRef.value.scrollHeight;

  inputRef.value.style.height = height + 'px';
}

function cleanAll() {
  if (confirm("你確定要清空所有內容嗎？")) {
    tarotStore.currentTarotQuestion = ""
    tarotStore.currentTarotList = []
    tarotStore.result = ""

    nextTick(() => {
      resizeTextarea()
    })
  }
}

</script>

<template>
  <div class="container">
    <p class="big-title py-3">
      <span class="big-title-color">Tarot Parse</span>
    </p>

    <div class="columns is-gapless is-mobile is-multiline mt-3">
      <div class="column is-full mb-3">
        <div class="field has-addons has-addons-centered">
          <p class="control">
            <button :class="['button is-danger']" @click="tarotStore.currentTarotQuestion = ''" :disabled="isLoading"><i class="bi bi-x-circle"></i></button>
          </p>
          <p class="control">
            <input class="input" type="text" v-model="tarotStore.currentTarotQuestion" style="width: 310px" placeholder="請輸入你的問題" :disabled="isLoading">
          </p>
        </div>
      </div>

      <div class="column is-full p-0" v-for="(card, index) in tarotStore.currentTarotList">
        <div class="field is-grouped is-grouped-centered">
          <div class="field has-addons">
            <p class="control">
              <button :class="['button is-danger']" @click="deleteCard(index)" :disabled="isLoading"><i class="bi bi-trash3"></i></button>
            </p>
            <p class="control">
              <button :class="['button', card.direction === true ? 'is-dark' : '']" @click="card.direction = true" :disabled="isLoading">正
              </button>
            </p>
            <p class="control">
              <button :class="['button', card.direction === false ? 'is-dark' : '']" @click="card.direction = false" :disabled="isLoading">
                逆
              </button>
            </p>
          </div>

          <div class="field has-addons ml-2">
            <p class="control">
              <div :class="['dropdown', card.showMenu ? 'is-active' : '']" @click="card.showMenu=!card.showMenu">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" :disabled="isLoading">
                    <span :style="[isSmall(card.value) ? 'width: 49px' : 'width: 150px']">
                      <template v-if="card.value === ''">
                       請選擇牌面
                      </template>
                      <template v-else>
                       {{ card.value }}
                      </template>
                    </span>
                    <span class="icon is-small"><i :class="['bi', card.showMenu ? 'bi-caret-up' : 'bi-caret-down']"></i></span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu" style="max-height: 300px; overflow: scroll">
                  <div class="dropdown-content">
                    <template v-for="_card in tarotStore.defaultTarotList.small">
                      <a :class="['dropdown-item', card.value === _card.title ? 'is-active' : '']" @click="card.value = _card.title">
                        {{ _card.title }}
                      </a>
                    </template>
                    <hr class="dropdown-divider">
                    <template v-for="_card in tarotStore.defaultTarotList.big">
                      <a :class="['dropdown-item', card.value === _card.title ? 'is-active' : '']" @click="card.value = _card.title; card.smallValue = ''">
                        {{ _card.title }}
                      </a>
                    </template>
                  </div>
                </div>
              </div>
            </p>

            <p class="control" v-if="isSmall(card.value)">
              <div :class="['dropdown', card.showSmallMenu ? 'is-active' : '']" @click="card.showSmallMenu=!card.showSmallMenu">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" :disabled="isLoading">
                    <span :style="'width: 49px'">
                      <template v-if="card.smallValue === ''">
                       <small>請選擇</small>
                      </template>
                      <template v-else>
                       {{ card.smallValue }}
                      </template>
                    </span>
                    <span class="icon is-small"><i :class="['bi', card.showSmallMenu ? 'bi-caret-up' : 'bi-caret-down']"></i></span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu" style="max-height: 300px; overflow: scroll; min-width: 75px">
                  <div class="dropdown-content">
                    <template v-for="_card in tarotStore.defaultTarotList.smallOptions">
                      <a :class="['dropdown-item', card.smallValue === _card.title ? 'is-active' : '']" @click="card.smallValue = _card.title">
                        {{ _card.title }}
                      </a>
                    </template>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div class="column is-full p-0 mt-3 mb-5">
        <div class="field is-grouped is-grouped-centered p-0 m-0">
          <button :class="['button mr-3']" @click="addCard" :disabled="isLoading">新 增 卡 片</button>
          <button :class="['button is-warning', isLoading ? 'is-loading' : '']" @click="getResult" :disabled="isLoading">解 析 結 果</button>
        </div>
      </div>

      <div class="column is-full mb-3">
        <div class="field is-grouped is-grouped-centered p-0 m-0">
          <textarea v-model="tarotStore.result" placeholder="" ref="inputRef" :disabled="isLoading"></textarea>
        </div>
      </div>

      <div class="column is-full p-0 mb-3">
        <div class="field is-grouped is-grouped-centered p-0 m-0">
          <button :class="['button mr-3 is-danger']" @click="cleanAll" :disabled="isLoading">清 空</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 960px) {
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
}

.big-title {
  text-align: center;
  font-size: max(25px, 3.5vw);
  color: black;
}
.big-title-color {
  background: -webkit-linear-gradient(0deg, #d906d5, #a34dce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

textarea {
  border: none;
  resize: none;
  width: 360px;
  min-height: 100px;
  font-size: 1rem;
  line-height: 1.7rem;

  background-color: #f6f6f6;
  color: black;
  padding: 10px;
  border-radius: 5px;
}

textarea:focus {
  outline: none !important;
}
</style>