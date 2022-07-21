import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todo',
    alias: '/',
    name: 'todo',
    meta: {auth: true},
    component: () => import('../views/TodoView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = JSON.parse(localStorage.getItem('Auth'))
  const requireAuth = to.matched.some(record => record.meta.auth)

  if(requireAuth && !isAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router
