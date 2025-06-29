import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import { ROUTES, ROUTE_NAMES } from '../constants/routes.js'

const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home
  },
  {
    path: ROUTES.USERS,
    name: ROUTE_NAMES.USERS,
    component: Users
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 