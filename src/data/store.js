import {reactive} from 'vue'

export const store = reactive({
    tag: 'home',
    isExpended: false,
    aiProxy: 'https://ai.yizheyun.cn',

    modelVersion: 'gpt-35-turbo',
    apiVersion: '2023-05-15',
})