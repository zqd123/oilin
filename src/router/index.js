import NProgress from './nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/developing',
    },
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
    {
      path: '/DrillingTechnology',
      name: 'DrillingTechnology',
      component: () => import('../views/second-page/DrillingTechnology.vue'),
    },
    {
      path: '/Stimulation',
      name: 'Stimulation',
      component: () => import('../views/second-page/StimulationPage.vue'),
    },
    {
      path: '/ReservoirManagement',
      name: 'ReservoirManagement',
      component: () => import('../views/second-page/ReservoirManagement.vue'),
    },
    {
      path: '/ProductionFieldMaintenance',
      name: 'ProductionFieldMaintenance',
      component: () => import('../views/second-page/ProductionFieldMaintenance.vue'),
    },
    {
      path: '/ChemicalTechnologyProducts',
      name: 'ChemicalTechnologyProducts',
      component: () => import('../views/second-page/ChemicalTechnologyProducts.vue'),
    },
    {
      path: '/OilBlendingTrading',
      name: 'OilBlendingTrading',
      component: () => import('../views/second-page/OilBlendingTrading.vue'),
    },
    {
      path: '/AssetsLeasingServices',
      name: 'AssetsLeasingServices',
      component: () => import('../views/second-page/AssetsLeasingServices.vue'),
    },
    {
      path: '/DigitalTechnologyServices',
      name: 'DigitalTechnologyServices',
      component: () => import('../views/second-page/DigitalTechnologyServices.vue'),
    },
    {
      path: '/InvestmentNewBusiness',
      name: 'InvestmentNewBusiness',
      component: () => import('../views/second-page/InvestmentNewBusiness.vue'),
    },
  ],
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
