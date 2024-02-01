import {defineStore} from "pinia";

export const useTarotStore = defineStore('tarot',{
    persist: true,
    state: () => {
        return {
            currentTarotQuestion: "",
            currentTarotList: [],
            result: "",
        }
    },

    getters: {
        defaultTarotList: () => {
            return {
                big: [
                    {
                        title: "愚者"
                    },
                    {
                        title: "魔術師"
                    },
                    {
                        title: "女祭司"
                    },
                    {
                        title: "皇后"
                    },
                    {
                        title: "皇帝"
                    },
                    {
                        title: "教皇"
                    },
                    {
                        title: "戀人"
                    },
                    {
                        title: "戰車"
                    },
                    {
                        title: "力量"
                    },
                    {
                        title: "隱者"
                    },
                    {
                        title: "命運之輪"
                    },
                    {
                        title: "正義"
                    },
                    {
                        title: "倒吊人"
                    },
                    {
                        title: "死神"
                    },
                    {
                        title: "節制"
                    },
                    {
                        title: "惡魔"
                    },
                    {
                        title: "塔"
                    },
                    {
                        title: "星星"
                    },
                    {
                        title: "月亮"
                    },
                    {
                        title: "太陽"
                    },
                    {
                        title: "審判"
                    },
                    {
                        title: "世界"
                    }
                ],
                small: [
                    {
                        title: "錢幣"
                    },
                    {
                        title: "權杖"
                    },
                    {
                        title: "聖杯"
                    },
                    {
                        title: "寶劍"
                    }
                ],
                smallOptions: [
                    {
                        title: "1",
                    },
                    {
                        title: "2",
                    },
                    {
                        title: "3",
                    },
                    {
                        title: "4",
                    },
                    {
                        title: "5",
                    },
                    {
                        title: "6",
                    },
                    {
                        title: "7",
                    },
                    {
                        title: "8",
                    },
                    {
                        title: "9",
                    },
                    {
                        title: "10",
                    },
                    {
                        title: "侍從",
                    },
                    {
                        title: "騎士",
                    },
                    {
                        title: "皇后",
                    },
                    {
                        title: "國王",
                    }
                ]
            }
        }
    }
})