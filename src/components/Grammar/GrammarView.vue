<template>
  <div style="background-color: #fafafa; padding-bottom: 35px">
    <div class="container p-3">
      <button class="button is-link" style="font-size: 0.8rem; font-weight: bold"><i class="bi bi-spellcheck"
                                                                                     style="margin-right: 5px; font-size: 1rem"></i>Grammar
      </button>
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
          <div class="column is-full p-5" style="border-top: 1px solid #cbcbcb; border-right: 1px solid #cbcbcb">
            <textarea @input="resizeTextarea" v-model="leftInput" placeholder="Input" ref="leftInputRef"
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
                <div class="loader-wrapper is-active" style="margin-right: 5px; font-size: 1rem; color: #485fc7">
                  <div class="loader is-loading"></div>
                </div>
              </template>
              Check
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
            <textarea v-model="rightInput" placeholder="Output" ref="rightInputRef" disabled></textarea>
          </div>
          <div class="column is-full has-text-right"
               style="border-top: 1px solid #cbcbcb;border-bottom: 1px solid #cbcbcb; border-right: 1px solid #cbcbcb; margin-bottom: -1px">
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

<script>
import axios from "axios";
import {store} from "@/data/store";
import {Base64} from "js-base64";

export default {
  name: "GrammarView",
  data() {
    return {
      store,

      leftInput: '',
      rightInput: '',

      isLoading: false,

      copyBtnStr: "Copy",
    }
  },
  watch: {
    leftInput() {
      const self = this
      setTimeout(function () {
        self.resizeTextarea()
      }, 100);
    },

    rightInput() {
      const self = this
      setTimeout(function () {
        self.resizeTextarea()
      }, 100);
    }
  },
  computed: {
    token() {
      return Base64.decode(store.grammarToken);
    }
  },
  mounted() {
    this.store.tag = 'grammar';
  },
  methods: {
    resizeTextarea() {
      this.$refs.leftInputRef.style.height = 0 + 'px';
      this.$refs.rightInputRef.style.height = 0 + 'px';

      let leftHeight = this.$refs.leftInputRef.scrollHeight;
      let rightHeight = this.$refs.rightInputRef.scrollHeight;

      let finalHeight;
      if (leftHeight >= rightHeight) {
        finalHeight = leftHeight
      } else {
        finalHeight = rightHeight
      }

      this.$refs.leftInputRef.style.height = finalHeight + 'px';
      this.$refs.rightInputRef.style.height = finalHeight + 'px';
    },

    request() {

      if (this.leftInput === "") {
        return
      }

      this.isLoading = true;

      let prompt = "I want you to act as an spelling corrector and improver. I will speak to you in any language and you will detect the language, answer in the corrected version of my text. I want you to replace my simplified A0-level words and sentences with more professional, upper level words and sentences. Keep the meaning same. The content is:\\n\\n" + this.leftInput;

      const headers = {
        'Authorization': 'Bearer ' + this.token
      };

      axios.post(this.store.aiProxy + '/v1/completions', {
        model: "text-davinci-003",
        temperature: 0.2,
        max_tokens: 3900,
        prompt: prompt
      }, {headers})
          .then((response) => {
            this.isLoading = false

            this.rightInput = response.data['choices'][0]['text'].trim();
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

    cleanBtnTap() {
      this.rightInput = ""
      this.leftInput = ""
    },

    copyBtnTap() {
      const content = this.rightInput
      navigator.clipboard.writeText(content);

      this.copyBtnStr = "Success";

      const self = this
      setTimeout(function () {
        self.copyBtnStr = "Copy";
      }, 400);

    }
  }
}
</script>

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