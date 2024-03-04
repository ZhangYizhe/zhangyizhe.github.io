import { defineStore } from "pinia";
import {firebaseDB} from "@/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

export const useConfigStore= defineStore('config',{
    persist: true,
    state: () => {
            return {
                tag: 'home',
                isExpended: false,

                bugptURL: "https://ai.yizheyun.cn",

                azureSpeech: "",
            }
    },

    getters: {
        modelVersion: () => 'gpt-35-turbo',
        apiVersion: () => '2024-02-15-preview',
        languageVersion: () => {
            return {
                grammar: '2.1.0',
                translate: '1.6.0',
                c2m: '1.3.0',
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