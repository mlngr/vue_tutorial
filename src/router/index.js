import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Concerts from '@/components/Concert/Concerts'
import CreateConcert from '@/components/Concert/CreateConcert'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Concert from '@/components/Concert/Concert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/concerts',
      name: 'Concerts',
      component: Concerts
    },
    {
      path: '/concert/new',
      name: 'CreateConcert',
      component: CreateConcert
    },
    {
      path: '/concerts/:id',
      name: 'Concert',
      props: true,
      component: Concert
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
