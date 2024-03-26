import { defineStore } from "pinia";
import {firebaseDB} from "@/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

export const useConfigStore= defineStore('config',{
    persist: true,
    state: () => {
            return {
                tag: 'home',
                isExpended: false,
                azureSpeech: "",

                modelUrl: 'ai-poets-dalle3.openai.azure.com',
                modelVersion: 'gpt-35-turbo',
                apiVersion: '2024-02-15-preview',
            }
    },

    getters: {
        gptURL: (state) => {
            return "https://ai.yizheyun.cn?model_url=" + state.modelUrl + "&model_name=" + state.modelVersion + "&api_version=" + state.apiVersion
        },

        languageVersion: () => {
            return {
                grammar: '2.2.0',
                translate: '1.7.0',
                c2m: '1.4.0',
            }
        },
        db: () => firebaseDB,
    },

    actions: {
        async setGptKey(force = false) {
            if (this.elecoxyKey !== '' || force) {
                // getOrder
                try {
                    const docRef = doc(this.db, "basic", this.elecoxyKey);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        this.azureSpeech = docSnap.data().azureSpeech;
                    } else {
                        this.azureSpeech = "";
                    }
                } catch (e) {
                    this.azureSpeech = "";
                }
            }
        }
    }
})