import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import("@/modules/home/Home.vue")
    },
    {
      path: '/company',
      name: 'company',
      component: ()=> import("@/modules/company/Company.vue")
    },
  ],
})

export default router
