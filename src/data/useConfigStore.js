import { defineStore } from "pinia";
import {firebaseDB} from "@/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

export const useConfigStore= defineStore('config',{
    persist: true,
    state: () => {
            return {
                tag: 'home',
                isExpended: false,
                azureKey: "",
                azureUrl: "",
                elecoxyKey: "",
                azureSpeech: "",
            }
    },

    getters: {
        modelVersion: () => 'gpt-4',
        apiVersion: () => '2023-05-15',
        languageVersion: () => {
            return {
                grammar: '1.7.0',
                translate: '1.2.0',
                c2m: '1.0.0',
            }
        },
        db: () => firebaseDB,
    },

    actions: {
        async setAzureKey(force = false) {
            if (this.elecoxyKey === '' || force) {
                // getOrder
                try {
                    const docRef = doc(this.db, "basic", this.elecoxyKey);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        this.azureKey = docSnap.data().azureKey;
                        this.azureUrl = docSnap.data().azureUrl;
                        this.azureSpeech = docSnap.data().azureSpeech;
                    } else {
                        this.azureKey = "";
                        this.azureUrl = "";
                        this.azureSpeech = "";
                    }
                } catch (e) {
                    this.azureKey = "";
                    this.azureUrl = "";
                    this.azureSpeech = "";
                }

            }
        }
    }
})