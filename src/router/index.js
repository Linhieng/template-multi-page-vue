import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/about',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
