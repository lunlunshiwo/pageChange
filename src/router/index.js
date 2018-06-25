import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/components/PageMain'
import Index from '@/components/Index'
import PageA from '@/components/pageA'
import PageB from '@/components/pageB'
import store from '../store/index.js'

Router.prototype.goBack = function () {
  store.commit('changeIsBack', true)
  this.back(-1)
}

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'PageMain',
    component: PageMain,
    children: [{
      path: '',
      component: Index
    }, {
      path: '/pageA',
      component: PageA
    }, {
      path: '/pageB',
      component: PageB
    }]
  }]
})

export default router
