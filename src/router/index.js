import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpecialView from '@/views/SpecialView'
import CategoryView from '@/views/CategoryView'
import CartView from '@/views/CartView'
import MyView from '@/views/MyView'
import MyPopup from '@/views/MyPopup'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'popup',
        name: 'MyPopup',
        component: MyPopup
      }
    ]
  },
  {
    path: '/special',
    name: 'special',
    component: SpecialView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/my',
    name: 'my',
    component: MyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
