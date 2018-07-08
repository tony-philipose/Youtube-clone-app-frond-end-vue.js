import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signup from '@/components/signup'
import login from '@/components/login'
import video from '@/components/video'
import addvdo from '@/components/addvdo'
import uservideo from '@/components/uservideo'
import advideolist from '@/components/advideolist'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/s',
      name: 'signup',
      component: signup
    },
    {
      path: '/l',
      name: 'login',
      component: login
    },
    {
      path: '/h',
      name: 'video',
      component: video
    },
    {
      path: '/a',
      name: 'addvdo',
      component: addvdo
    },
    {
      path: '/ls',
      name: 'uservideo',
      component: uservideo
    },
    {
      path: '/vlst',
      name: 'advideolist',
      component: advideolist
    },
    {
      path: '/ed',
      name: 'edit',
      component: edit
    }
  ]
})
