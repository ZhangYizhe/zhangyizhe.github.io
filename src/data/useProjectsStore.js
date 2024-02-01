import { defineStore } from "pinia";

export const useProjectsStore= defineStore('projects',{
    persist: true,
    state: () => {
        return {

        }
    },

    getters: {
        projects: () => {
            return [
                {
                    image: "/img/products/elecnet-logo.png",
                    title: "ElecNet",
                    description: "Network Utility",
                    platforms: [
                        "macOS",
                    ],
                    link: "https://apps.apple.com/app/elecnet/id6473825844"
                },
                {
                    image: "/img/products/tarot.png",
                    title: "Tarot Parse",
                    description: "Tarot parser powered by GPT",
                    platforms: [
                        "Web",
                    ],
                    link: "https://elecoxy.com/#/projects/tarot"
                },
                // {
                //     image: "/img/products/ai-digital-poet-logo.png",
                //     title: "與AI古人聊古詩",
                //     description: "在課堂之外沈浸式學習古詩",
                //     platforms: [
                //         "iOS",
                //     ],
                //     link: "https://pilab-hkbu.github.io/AIPoets/"
                // },
                {
                    image: "/img/products/wofoo-health-logo.png",
                    title: "和富健康",
                    description: "您的掌上健康助手",
                    platforms: [
                        "iOS",
                        "Android",
                    ],
                    link: "https://health.elecoxy.com"
                },
                {
                    image: "/img/products/pistis-health.png",
                    title: "Pistis Health",
                    description: "A Centralized Platform for Collecting and Personalizing Information about Mental Health Services to the Public",
                    platforms: [
                        "Web",
                    ],
                    link: "https://pilab-hkbu.github.io/#/projects/project?pid=2"
                },
                {
                    image: "/img/products/feng.png",
                    title: "Feng.com",
                    description: "Technology media and geek communication community",
                    platforms: [
                        "iOS",
                    ],
                    link: "https://apps.apple.com/hk/app/%E5%A8%81%E9%94%8B-%E7%A7%91%E6%8A%80%E6%96%B0%E9%97%BB-%E6%9E%9C%E7%B2%89%E4%BA%92%E5%8A%A8%E4%BA%A4%E6%B5%81%E7%A4%BE%E5%8C%BA/id1411932809?l=en-GB"
                }
            ]
        },

    },

    actions: {

    }
})