import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/Introduce',
      name:'introduce',
      component: () => import(/* webpackChunkName: "about" */ './views/introduce.vue')
    },
    {
      path:'/introduce/ring60',
      name:'ring60',
      component: () => import(/* webpackChunkName: "about" */ './views/ring60.vue')
    },
    {
      path:'/introduce/ring80',
      name:'ring80',
      component: () => import(/* webpackChunkName: "about" */ './views/ring80.vue')
    },
    {
      path:'/introduce/ring100',
      name:'ring100',
      component: () => import(/* webpackChunkName: "about" */ './views/ring100.vue')
    },
    {
      path:'/introduce/ring120',
      name:'ring120',
      component: () => import(/* webpackChunkName: "about" */ './views/ring120.vue')
    },
    {
      path:'/introduce/ring140',
      name:'ring140',
      component: () => import(/* webpackChunkName: "about" */ './views/ring140.vue')
    },    
    {
      path:'/introduce/earring60',
      name:'earring60',
      component: () => import(/* webpackChunkName: "about" */ './views/earring60.vue')
    },    
    {
      path:'/introduce/earring80',
      name:'earring80',
      component: () => import(/* webpackChunkName: "about" */ './views/earring80.vue')
    },    
    {
      path:'/introduce/earring100',
      name:'earring100',
      component: () => import(/* webpackChunkName: "about" */ './views/earring100.vue')
    },    
    {
      path:'/introduce/earring120',
      name:'earring120',
      component: () => import(/* webpackChunkName: "about" */ './views/earring120.vue')
    },    
    {
      path:'/introduce/earring140',
      name:'earring140',
      component: () => import(/* webpackChunkName: "about" */ './views/earring140.vue')
    },    
    {
      path:'/introduce/accessory60',
      name:'accessory60',
      component: () => import(/* webpackChunkName: "about" */ './views/accessory60.vue')
    },    
    {
      path:'/introduce/accessory80',
      name:'accessory80',
      component: () => import(/* webpackChunkName: "about" */ './views/accessory80.vue')
    },    
    {
      path:'/introduce/accessory100',
      name:'accessory100',
      component: () => import(/* webpackChunkName: "about" */ './views/accessory100.vue')
    },    
    {
      path:'/introduce/accessory120',
      name:'accessory120',
      component: () => import(/* webpackChunkName: "about" */ './views/accessory120.vue')
    },    
    {
      path:'/introduce/accessory140',
      name:'accessory140',
      component: () => import(/* webpackChunkName: "about" */ './views/accessory140.vue')
    },    
    {
      path:'/introduce/bracelet60',
      name:'bracelet60',
      component: () => import(/* webpackChunkName: "about" */ './views/bracelet60.vue')
    },    
    {
      path:'/introduce/bracelet80',
      name:'bracelet80',
      component: () => import(/* webpackChunkName: "about" */ './views/bracelet80.vue')
    },    
    {
      path:'/introduce/bracelet100',
      name:'bracelet100',
      component: () => import(/* webpackChunkName: "about" */ './views/bracelet100.vue')
    },    
    {
      path:'/introduce/bracelet120',
      name:'bracelet120',
      component: () => import(/* webpackChunkName: "about" */ './views/bracelet120.vue')
    },    
    {
      path:'/introduce/bracelet140',
      name:'bracelet140',
      component: () => import(/* webpackChunkName: "about" */ './views/bracelet140.vue')
    },    
  ]
})
