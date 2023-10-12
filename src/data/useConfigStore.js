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
        modelVersion: () => 'gpt-4',
        apiVersion: () => '2023-08-01-preview',
        languageVersion: () => {
            return {
                grammar: '1.8.0',
                translate: '1.3.0',
                c2m: '1.0.0',
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