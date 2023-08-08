import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
//import Login from '../views/Login.vue';


const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/login', // Redirect to login page by default
  // },
  // {
  //   path: '/login',
  //   component: Login,
  // },
   {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
