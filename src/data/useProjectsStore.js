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
                    image: "/public/img/products/elecnet-logo.png",
                    title: "ElecNet",
                    description: "Network Utility",
                    platforms: [
                        "macOS",
                    ],
                    link: "https://apps.apple.com/app/elecnet/id6473825844"
                },
                {
                    image: "/public/img/products/ai-digital-poet-logo.png",
                    title: "與AI古人聊古詩",
                    description: "在課堂之外沈浸式學習古詩",
                    platforms: [
                        "iOS",
                    ],
                    link: "https://pilab-hkbu.github.io/AIPoets/"
                },
                {
                    image: "/public/img/products/wofoo-health-logo.png",
                    title: "和富健康",
                    description: "您的掌上健康助手",
                    platforms: [
                        "iOS",
                        "Android",
                    ],
                    link: "https://health.elecoxy.com"
                }
            ]
        },

    },

    actions: {

    }
})