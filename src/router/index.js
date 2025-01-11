import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/developing',
      name: 'developing',
      component: () => import('../views/SiteDeveloping.vue'),
    },
    {
      path: '/ReservoirGeology',
      name: 'ReservoirGeology',
      component: () => import('../views/second-page/ReservoirGeology.vue'),
    },
  ],
})

export default router
