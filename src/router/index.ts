import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/tech',
      children: [
        { path: '', component: () => import('../views/TechView.vue') },
        { path: 'digital-concierge', component: () => import('../projects/DigitalConcierge.vue') },
        { path: 'loti-christmas-card', component: () => import('../projects/LotiChristmas.vue') },
        { path: 'animated-articles', component: () => import('../projects/AnimatedArticles.vue') },
        { path: 'conference-registration-web-app', component: () => import('../projects/ConferenceWebApp.vue') }
      ]
     },
    { path: '/other', component: () => import('../views/OtherView.vue') },
    { path: '/fun', component: () => import('../views/FunView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
  ],
})

export default router
