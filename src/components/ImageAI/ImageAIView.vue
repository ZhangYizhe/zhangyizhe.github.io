<template>
<div class="container py-5 px-3">
    <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-full-mobile is-6-tablet">
            <textarea class="promptsMessage" v-model="prompt" placeholder="Please enter your image's prompts."></textarea>
        </div>
        <div class="column is-full">
           <div class="columns is-mobile is-centered">
               <div class="column is-narrow">
                   <button :class="['button is-warning', isLoading ? 'is-loading' : '' ]" @click="request" :disabled="isLoading">
                       Generation
                   </button>
               </div>
           </div>
        </div>
        <div class="column is-full-mobile is-6-tablet">
            <div class="image-canvas">
                <img v-if="imgUrl" class="image-main" :src="imgUrl" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import {Base64} from "js-base64";
import {store} from "@/data/store";

export default {
    name: "ImageAI",
    data() {
        return {
            store,

            prompt: "",

            isLoading: false,

            imgUrl: null
        }
    },
    computed: {
        token() {
            return Base64.decode(store.chatToken);
        }
    },
    mounted() {
        this.store.tag = 'imageai';
    },
    methods: {
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

.promptsMessage {
    font-size: 1rem;

    width: 100%;
    height: 15vh;
    padding: 15px;

    box-shadow: 0 0 10px #e3e3e3;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    resize: none;
}

*:focus {
    outline: none;
}

.image-canvas {
    width: 100%;
    aspect-ratio: 1 / 1;

    background-color: #f4f6f9;

    box-shadow: 0 0 10px #e3e3e3;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    overflow: hidden;

    padding: 10px;
}

.image-main {
    background-color: white;
}

</style>