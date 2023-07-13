import { defineStore } from "pinia";
import {firebaseDB} from "@/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

export const useConfigStore= defineStore('config',{
    persist: true,
    state: () => {
            return {
                tag: 'home',
                isExpended: false,
                azureKey: null,
                azureUrl: null,
                elecoxyKey: null,
            }
    },

    getters: {
        modelVersion: () => 'gpt-35-turbo',
        apiVersion: () => '2023-05-15',
        languageVersion: () => {
            return {
                grammar: '1.7.0',
                translate: '1.2.0',
            }
        },
        db: () => firebaseDB,
    },

    actions: {
        async setAzureKey(force = false) {
            if ((this.elecoxyKey !== '' && this.azureKey === null) || force) {
                // getOrder
                const docRef = doc(this.db, "basic", this.elecoxyKey);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.azureKey = docSnap.data().azureKey;
                    this.azureUrl = docSnap.data().azureUrl;
                } else {
                    this.azureKey = null;
                }
            }
        }
    }
})