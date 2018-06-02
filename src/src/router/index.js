import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Profile from '@/pages/profile'
import Register from '@/pages/register'
import { isTokenExpired } from '../services'

Vue.use(Router)

export function createRouter () {
  let router = new Router({
    mode: 'hash',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
    ]
  })
  router.beforeEach((to, from, next) => {
    /* eslint eqeqeq: off */
    if (to.name == 'dashboard' || to.name == 'profile') {
      if (!isTokenExpired()) {
        router.push({
          name: 'login'
        })
      }
      next()
    } else {
      next()
    }
  })
  return router
}
