import { createRouter, createWebHashHistory } from 'vue-router'

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