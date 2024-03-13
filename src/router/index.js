import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:notFound',
      component: () => import('../views/PageNotFound.vue')
    },
    {
      path: '/mentions-legales',
      component: () => import('../views/MentionsLegales.vue')
    }
  ]
}) 

export default router
