import { defineStore } from "pinia";
import axios from "axios";
import {useConfigStore} from "@/data/useConfigStore.js";

export const useChatStore= defineStore('chat',{
    state: () => {
        return {
            isLoading: false,

            showSetting: false,
            allowEnterToSend: true,

            systemMessage: {
                role: "system",
                content: "",
            },

            message: '',
            messages: []
        }
    },
    persist: {
        storage: localStorage,
        paths: ['message', 'messages', 'systemMessage', 'allowEnterToSend'],
    },

    getters: {
    },

    actions: {
        requestMessage() {
            if (this.isLoading) {
                return;
            }

            this.isLoading = true;

            const that = this;
            const config = useConfigStore();

            const data = {
                messages: [that.systemMessage, ...that.messages],
                temperature: 0.6,
            }

            axios.post(
                config.gptURL,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
                .then(function (response) {
                    try {
                        that.isLoading = false;

                        const data = response.data;
                        if (data.error !== undefined) {
                            alert(data.error.message);
                            return;
                        }
                        const message = data.choices[0].message;
                        that.messages.push(message);
                    } catch (e) {
                        alert(e)
                    }
                })
                .catch(function (error) {
                    that.isLoading = false;
                    alert(error);
                })
        },

        cleanAll() {
            this.messages = [];
        }
    }
})