import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
import { GETTER_AUTH_IS_AUTHENTICATED } from '@/store/types'

const isAuthenticated = () => store.getters[GETTER_AUTH_IS_AUTHENTICATED]

const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: any
) => {
  if (!isAuthenticated()) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { layout: 'DefaultLayout' },
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { layout: 'LoginLayout' }
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import('../views/ForgotPasswordView.vue'),
    meta: { layout: 'LoginLayout' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
