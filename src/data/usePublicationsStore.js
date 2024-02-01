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
                // {
                //     title: "",
                //     links: [
                //         {
                //             title: "",
                //             link: "",
                //         }
                //     ]
                // }
            ]
        },

    },

    actions: {

    }
})