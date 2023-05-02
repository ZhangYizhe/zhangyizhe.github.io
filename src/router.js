import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/Home/HomeView.vue'),
    },

    {
        path: '/chat',
        name: 'chat',
        component: () => import('@/components/Chat/ChatView.vue'),
    },

    {
        path: '/grammar',
        name: 'grammar',
        component: () => import('@/components/Grammar/GrammarView.vue'),
    },

    {
        path: '/imageai',
        name: 'imageai',
        component: () => import('@/components/ImageAI/ImageAIView.vue'),
    },

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

})

export default router