import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/tech', component: () => import('../views/TechView.vue') },
    { path: '/other', component: () => import('../views/OtherView.vue') },
    { path: '/fun', component: () => import('../views/FunView.vue') },
  ],
})

export default router
