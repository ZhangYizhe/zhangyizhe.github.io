import { defineStore } from "pinia";

export const useTTSStore= defineStore('tts',{
    persist: true,
    state: () => {
        return {
            currentVoice: 0,
            lastVoiceStr: "",
        }
    },

    getters: {
        voiceList: () => {
            return [
                {
                    id: 0,
                    name: "HiuMaan",
                    displayName: "曉曼",
                    gender: "Female",
                    type: "Chinese (Cantonese, Traditional)"
                },

                {
                    id: 1,
                    name: "WanLung",
                    displayName: "雲龍",
                    gender: "Male",
                    type: "Chinese (Cantonese, Traditional)"
                },

                {
                    id: 2,
                    name: "HiuGaai",
                    displayName: "曉佳",
                    gender: "Female",
                    type: "Chinese (Cantonese, Traditional)"
                }
            ]
        }
    }
})