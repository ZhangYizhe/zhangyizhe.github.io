import { defineStore } from "pinia";

export const useConfigStore= defineStore('config',{
    state: () => ({
        tag: 'home',
        isExpended: false,
        aiProxy: 'https://ai.yizheyun.cn',

        modelVersion: 'gpt-35-turbo',
        apiVersion: '2023-05-15',

        elecoxyKey: '',

        languageVersion: {
            grammar: '1.7.0',
            translate: '1.2.0',
        }
    })
})