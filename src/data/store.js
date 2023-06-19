import {reactive} from 'vue'

export const store = reactive({
    tag: 'home',
    isExpended: false,
    aiProxy: 'https://ai.yizheyun.cn',

    modelVersion: 'gpt-3.5-turbo',

    chatToken: 'c2stOVVjdzVac3V1Vkx3MkhudXo3Y25UM0JsYmtGSndEYkxSaE5WU1IzaUNOTWQwckNB',
    grammarToken: 'c2stRTdmSEU1QVJ3Um5TQ1RKalRGUm9UM0JsYmtGSlBCbFh2cWR2Zmo4T3hTYW1GNUhQ',
    imageToken: 'c2stQWMxUWx2aFFTYnVKWEE2aThXVGlUM0JsYmtGSk9STWNUTmJQaWNxTnNzc2tVUXNj',
})