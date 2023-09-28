<script setup>
import { useConfigStore } from "@/data/useConfigStore";
import {computed, nextTick, onMounted, reactive, ref, watch} from "vue";
import axios from "axios";

const config = useConfigStore();

const inputs = reactive({
  left: '',
  right: '',
})

const leftInputRef = ref(null);
const rightInputRef = ref(null);

const isLoading = ref(false);
const copyBtnStr = ref("Copy");
const functionType = ref("grammar");

const prompts = ref({
  translation: "I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations.\n",

  grammar: "Proofread and correct the below text and rewrite " +
      "the corrected version, the text was delimited with " +
      "triple backticks. If you don't find any errors, " +
      "just response the original text. You only response " +
      "the correct result without any other description. " +
      "\n" +
      "After reply the result, check the content by the below steps:\n" +
      "Step-1: Don't use triple backticks around the text.\n" +
      "Step-2: Don't use conversation tune to response.\n",

  c2m: "我希望你是一個廣東話口語轉書面語的翻譯、糾正員和改進員。我會用廣東話和你交流，你會轉譯內容為中文書面語，你只需要轉譯內容，保持含義相同，但使它們更具文學性。我希望你只回復更正、改進，不要寫任何其他內容，不要寫解釋。"
})

const prompt = computed(() => {
  let prompt = ""
  if (functionType.value === "grammar") {
    prompt = prompts.value.grammar
  } else if (functionType.value === "translate") {
    prompt = prompts.value.translation
  } else {
    prompt = prompts.value.c2m
  }

  return prompt + "\n" +
      "Text: ```" + inputs.left + "```"
})

function resizeTextarea() {
  leftInputRef.value.style.height = 0 + 'px';
  rightInputRef.value.style.height = 0 + 'px';

  let leftHeight = leftInputRef.value.scrollHeight;
  let rightHeight = rightInputRef.value.scrollHeight;

  let finalHeight;
  if (leftHeight >= rightHeight) {
    finalHeight = leftHeight
  } else {
    finalHeight = rightHeight
  }

  leftInputRef.value.style.height = finalHeight + 'px';
  rightInputRef.value.style.height = finalHeight + 'px';
}

function request() {

  if (inputs.left === "" || isLoading.value === true) {
    return
  }

  isLoading.value = true;

  const headers = {
    'Content-Type': 'application/json',
    'api-key': config.gptKey,
  };

  axios.post(config.gptURL + `/openai/deployments/${config.modelVersion}/chat/completions?api-version=${config.apiVersion}`, {
    temperature: 0,
    messages: [
      {
        "role": "user",
        "content": prompt.value,
      }
    ]
  }, {headers})
      .then((response) => {
        isLoading.value = false

        try {
          inputs.right = response.data['choices'][0]['message']["content"];
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

function wordCount(str) {
  return str.split(" ").length;
}

function cleanBtnTap() {
  inputs.left = "";
  inputs.right = "";

  nextTick(() => {
    resizeTextarea()
  })
}

function copyBtnTap() {
  const content = inputs.right
  navigator.clipboard.writeText(content);

  copyBtnStr.value = "Success";

  nextTick(() => {
    copyBtnStr.value = "Copy";
  })

}

function translateBtnTap() {
  if (inputs.right.trim() === "") {
    return;
  }
  window.open("https://translate.google.com.hk/?sl=auto&tl=zh-TW&text=" + inputs.right + "&op=translate", "_blank")
}

async function gptKeySet(force = false) {
  isLoading.value = true;
  await config.setGptKey(force);
  isLoading.value = false;
}

// Lifecycle
watch(() => config.elecoxyKey, async (newValue, oldValue) => {
  await nextTick(() => {
    gptKeySet(true);
  })
})

watch(inputs,(newValue, oldValue) => {
      resizeTextarea()
})

onMounted(() => {
  config.tag = 'language';

  gptKeySet();
})

</script>

<template>
  <div style="background-color: #fafafa; padding-bottom: 35px">
    <div class="container py-3 px-3">
      <div class="buttons">
        <button :class="['button', functionType === 'grammar' ? 'is-link' : '']" style="font-size: 0.8rem; font-weight: bold"
                @click="functionType = 'grammar'"><i class="bi bi-spellcheck"
                                             style="margin-right: 5px; font-size: 1rem"></i>Grammar
          ( {{ config.languageVersion.grammar }} )
        </button>
        <button :class="['button', functionType === 'translate' ? 'is-link' : '']" style="font-size: 0.8rem; font-weight: bold"
                @click="functionType = 'translate'"><i class="bi bi-spellcheck"
                                              style="margin-right: 5px; font-size: 1rem"></i>Translate
          ( {{ config.languageVersion.translate }} )
        </button>
        <button :class="['button', functionType === 'c2m' ? 'is-link' : '']" style="font-size: 0.8rem; font-weight: bold"
                @click="functionType = 'c2m'"><i class="bi bi-spellcheck"
                                                       style="margin-right: 5px; font-size: 1rem"></i>粵轉書面
          ( {{ config.languageVersion.c2m }} )
        </button>
      </div>
      <div class="columns is-multiline is-mobile mt-3 mx-0 mb-2">
        <h1 class="column is-full p-0 mb-2" style="font-weight: bold">Elecoxy Key</h1>
        <input class="column is-6 systemMessage" :value="config.elecoxyKey" placeholder="Please input the elecoxy key"
               type="password" @change="config.elecoxyKey = $event.target.value">
      </div>
    </div>
  </div>
  <div class="container canvas mb-5" style="margin-top: -30px; background-color: white">
    <div class="columns is-multiline m-0">
      <div class="column">
        <div class="columns is-multiline">
          <div class="column is-full">
            <div class="columns is-mobile">
              <div class="column is-narrow" style="border-bottom: 3px solid #485fc7">
                <span class="main-color" style="font-weight: bold;">DETECT LANGUAGE</span>
              </div>
            </div>
          </div>
          <div class="column is-full p-5"
               style="border-top: 1px solid #cbcbcb; border-right: 1px solid #cbcbcb">
            <textarea v-model="inputs.left" placeholder="Input" ref="leftInputRef"
                      :disabled="isLoading"></textarea>
          </div>
          <div class="column is-full has-text-right"
               style="border-top: 1px solid #cbcbcb;border-bottom: 1px solid #cbcbcb; border-right: 1px solid #cbcbcb; margin-bottom: -1px">
            <button class="button is-danger is-outlined"
                    style="font-size: 0.8rem; font-weight: bold; margin-right: 10px" @click="cleanBtnTap">
              <i class="bi bi-trash3" style="margin-right: 5px; font-size: 1rem"></i>
              Clean
            </button>
            <button class="button is-link is-outlined" style="font-size: 0.8rem; font-weight: bold;"
                    :disabled="isLoading" @click="request">
              <template v-if="isLoading === false">
                <i class="bi bi-spellcheck" style="margin-right: 5px; font-size: 1rem"></i>
              </template>
              <template v-else>
                <div class="loader-wrapper is-active"
                     style="margin-right: 5px; font-size: 1rem; color: #485fc7">
                  <div class="loader is-loading"></div>
                </div>
              </template>
              <template v-if="functionType === 'grammar'">
                Grammar
              </template>
              <template v-else-if="functionType === 'translate'">
                Translate
              </template>
              <template v-else>
                粵轉書面
              </template>
            </button>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div class="column is-full">
            <div class="columns is-mobile">
              <div class="column is-narrow" style="border-bottom: 3px solid #485fc7">
                <span class="main-color" style="font-weight: bold;">RESULT</span>
              </div>
            </div>
          </div>
          <div class="column is-full p-5" style="border-top: 1px solid #cbcbcb;">
            <textarea v-model="inputs.right" placeholder="Output" ref="rightInputRef"></textarea>
          </div>
          <div class="column is-full has-text-right"
               style="border-top: 1px solid #cbcbcb;border-bottom: 1px solid #cbcbcb; border-right: 1px solid #cbcbcb; margin-bottom: -1px">
            <button class="button is-link is-outlined mr-2" style="font-size: 0.8rem; font-weight: bold;"
                    @click="translateBtnTap">
              <i class="bi bi-translate" style="margin-right: 5px; font-size: 1rem"></i>
              Google translate
            </button>
            <button class="button is-link is-outlined" style="font-size: 0.8rem; font-weight: bold;"
                    @click="copyBtnTap">
              <i class="bi bi-clipboard" style="margin-right: 5px; font-size: 1rem"></i>
              {{ copyBtnStr }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.canvas {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px #b9b9b9;
}

textarea {
  border: none;
  resize: none;
  width: 100%;
  min-height: 100px;
  font-size: 1.3rem;
  line-height: 1.8rem;
}

textarea:disabled {
  background-color: white;
  color: black;
}

textarea:focus {
  outline: none !important;
}

.systemMessage {
  font-size: 1rem;

  box-shadow: 0 0 10px #e3e3e3;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  resize: none;
}

*:focus {
  outline: none;
}

.loader-wrapper {
  text-align: center;
  background: transparent;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;

  .loader {
    height: 1rem;
    width: 1rem;
  }

  &.is-active {
    opacity: 1;
  }
}

.is-loading {
  border: 2px solid #485fc7;
  border-right-color: transparent;
  border-top-color: transparent;
  margin-top: auto;
  margin-bottom: auto;
}

</style>