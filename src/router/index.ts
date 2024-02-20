import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'home',
        component: () => import('../views/home/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router