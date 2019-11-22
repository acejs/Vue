import {
  getMenuByRouter,
  getBreadCrumbList,
  getHomeRoute,
  getInfoByParentViewName
} from '@/libs/utils'
import { routes } from '@/router/router'
import config from '@/config'
const { homeName } = config

const state = {
  breadCrumbList: [],
  homeRoute: {},
  cacheList: [],
  activeMenuName: 'homeName'
}

const getters = {
  menuList() {
    return getMenuByRouter(routes)
  }
}

const mutations = {
  addCache(state, routeName) {
    !state.cacheList.includes(routeName) && state.cacheList.push(routeName)
  },
  removeCache(state, routeName) {
    const index = state.cacheList.indexOf(routeName)
    index !== -1 && state.cacheList.splice(index, 1)
  },
  setBreadCrumbList(state, route) {
    state.breadCrumbList = getBreadCrumbList(route, state.homeRoute, routes)
  },
  setHomeRoute(state) {
    state.homeRoute = getHomeRoute(routes, homeName)
  },
  setActiveMenuName(state, route) {
    if (route.meta && route.meta.parentViewName) {
      const info = getInfoByParentViewName(routes, route.meta.parentViewName)
      state.activeMenuName = info.name
    } else {
      state.activeMenuName = route.name
    }
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
