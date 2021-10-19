import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import HomePage from '../views/HomePage.vue'
import HabitsPage from '../views/HabitsPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import FinancesPage from '../views/FinancesPage.vue'
import PlansPage from '../views/PlansPage.vue'
import InformationPage from '../views/InformationPage.vue'
import SkillsPage from '../views/SkillsPage.vue'
import SpheresPage from '../views/SpheresPage.vue'
import StatisticsPage from '../views/StatisticsPage.vue'
import TasksPage from '../views/TasksPage.vue'
import MiniProjectsPage from '../views/MiniProjectsPage.vue'
import Timer from '../components/examples/Timer.vue'

// svg
import MainPageIcon from '../assets/svg/main-page-icon.svg'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    name: '/',
    meta: {
      title: 'Главная',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/habits',
    component: HabitsPage,
    name: '/',
    meta: {
      title: 'Привычки',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/spheres',
    component: SpheresPage,
    name: '/',
    meta: {
      title: 'Сферы',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/tasks',
    component: TasksPage,
    name: '/',
    meta: {
      title: 'Задачи',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/plans',
    component: PlansPage,
    name: '/',
    meta: {
      title: 'Планирование',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/statistics',
    component: StatisticsPage,
    name: '/',
    meta: {
      title: 'Статистика',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/contacts',
    component: ContactsPage,
    name: '/',
    meta: {
      title: 'Контакты',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/finances',
    component: FinancesPage,
    name: '/',
    meta: {
      title: 'Финансы',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/information',
    component: InformationPage,
    name: '/',
    meta: {
      title: 'Информация',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/skills',
    component: SkillsPage,
    name: '/',
    meta: {
      title: 'Навыки',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/mini-projects',
    component: MiniProjectsPage,
    name: '/mini-projects',
    meta: {
      title: 'Мини Проекты',
      roles: ['admin', 'manager'],
      icon: MainPageIcon
    }
  },
  {
    path: '/timers',
    component: Timer,
    name: '/timers',
    meta: {
      title: 'Таймеры',
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
