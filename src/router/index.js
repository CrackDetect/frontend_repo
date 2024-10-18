import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/homePage.vue'
import upLoadPage from '@/views/upLoadPage.vue'
import resultPage from '@/views/resultPage.vue'
import listPage from '@/views/listPage.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/upLoad',
    name: 'upLoadPage',
    component: upLoadPage
  },
  {
    path: '/result:id',
    name: 'resultPage',
    component: resultPage
  },
  {
    path: '/list',
    name: 'listPage',
    component: listPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
