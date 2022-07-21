import Vue from 'vue'
import VueRouter from 'vue-router'
import checkAuth from '../utils/checkAuth'
import { ROUTES } from './router-constants'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES.TODO.path,
    alias: ROUTES.TODO.alias,
    name: ROUTES.TODO.name,
    meta: ROUTES.TODO.meta,
    beforeEnter: checkAuth,
    component: () => import('../views/TodoView.vue')
  },
  {
    path: ROUTES.LOGIN.path,
    name: ROUTES.LOGIN.name,
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
