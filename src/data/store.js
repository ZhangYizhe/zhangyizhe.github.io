import {reactive} from 'vue'

export const store = reactive({
    tag: 'home',
    isExpended: false,
    aiProxy: 'https://ai.yizheyun.cn',

    modelVersion: 'gpt-3.5-turbo-0613',
})