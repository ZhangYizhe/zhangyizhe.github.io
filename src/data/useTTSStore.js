import { defineStore } from "pinia";
import { useConfigStore } from "@/data/useConfigStore";
import {doc, getDoc} from "firebase/firestore";

const config = useConfigStore();

export const useTTSStore= defineStore('tts',{
    persist: true,
    state: () => {
        return {
            currentVoice: 0,
            lastVoiceStr: "",
            azureSpeech: null,
            azureSpeed: 1,
            azurePitch: "default",
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
        },
        speedList: () => {
            return [
                0.2, 0.5, 0.8, 1, 1.2, 1.5, 1.8, 2
            ]
        },
        pitchList: () => {
            return [
                "x-low", "low", "medium", "high", "x-high", "default"
            ]
        }
    },

    actions: {
        async setTTSGptKey(force = false) {
            if (this.azureSpeech === null || force) {
                console.log(config.db)
                const docRef = doc(config.db, "basic", 'azure-speech');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.azureSpeech = {
                        key: docSnap.data().key,
                        region: docSnap.data().region,
                        url: docSnap.data().url,
                    }
                } else {
                    this.gptKey = "";
                }
            }
        }
    }
})