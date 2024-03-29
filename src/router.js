import {createRouter, createWebHashHistory} from 'vue-router'
import {useConfigStore} from "@/data/useConfigStore";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/Home/HomeView.vue'),
    },

    {
        path: '/publications',
        name: 'publications',
        component: () => import('@/components/Publications/PublicationsView.vue'),
    },

    {
        path: '/projects',
        children: [
            {
                path: '',
                name: 'projects',
                component: () => import('@/components/Projects/ProjectsView.vue'),
            },
            {
                path: 'tarot',
                name: 'projects-tarot',
                component: () => import('@/components/Projects/Tarot/TarotView.vue'),
            }
        ]
    },


    {
        path: '/chat',
        name: 'chat',
        component: () => import('@/components/Chat/ChatView.vue'),
    },

    {
        path: '/language',
        name: 'language',
        component: () => import('@/components/Language/LanguageView.vue'),
    },

    // {
    //     path: '/tts',
    //     name: 'tts',
    //     component: () => import('@/components/Audio/TTSView.vue'),
    // },
    //
    // {
    //     path: '/imageai',
    //     name: 'imageai',
    //     component: () => import('@/components/ImageAI/ImageAIView.vue'),
    // },

    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: () => import('@/components/PrivacyPolicy/PrivacyPolicyView.vue'),
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    routes
})

router.beforeEach(async (to, from) => {
    const config = useConfigStore();
    config.isExpended = false;
})

export default router