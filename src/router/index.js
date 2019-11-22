import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const {
    meta: { title, needCache },
    name
  } = to

  document.title = title || 'Vue Project'

  needCache && store.commit('app/addCache', name)

  next()
})

router.afterEach((to, from) => {})

export default router
