import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import Home from '../views/Home.vue'
import Habits from '../views/Habits.vue'

// svg
import MainPageIcon from '../assets/svg/main-page-icon.svg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: '/',
    meta: {
      title: 'Главная',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/habits',
    component: Habits,
    name: '/',
    meta: {
      title: 'Привычки',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/spheres',
    component: Habits,
    name: '/',
    meta: {
      title: 'Сферы',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/tasks',
    component: Habits,
    name: '/',
    meta: {
      title: 'Задачи',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/plan',
    component: Habits,
    name: '/',
    meta: {
      title: 'Планирование',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/statistic',
    component: Habits,
    name: '/',
    meta: {
      title: 'Статистика',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/contacts',
    component: Habits,
    name: '/',
    meta: {
      title: 'Контакты',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/money',
    component: Habits,
    name: '/',
    meta: {
      title: 'Финансы',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/skills',
    component: Habits,
    name: '/',
    meta: {
      title: 'Информация',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/spheres',
    component: Habits,
    name: '/',
    meta: {
      title: 'Навыки',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
