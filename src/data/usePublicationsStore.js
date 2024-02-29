import { defineStore } from "pinia";

export const usePublicationsStore= defineStore('publications',{
    persist: true,
    state: () => {
        return {

        }
    },

    getters: {
        publications: () => {
            return [
                {
                    title: "Jin, Y.+, Cai, W.+, Chen, L.*, <strong>Zhang, Y.</strong>, Doherty, G., & Jiang, T. (2024). Exploring Generative AI for Music-based Reminiscence with Older Adults. In <i>CHI Conference on Human Factors in Computing Systems (CHI '24)</i>.",
                    links: [
                        {
                            title: "PDF",
                            link: "/papers/chi24.pdf",
                        }
                    ]
                }
            ]
        },

    },

    actions: {

    }
})