import { getMenuByRouter, getBreadCrumbList, getHomeRoute } from '@/libs/utils'
import { routes } from '@/router/router'
import config from '@/config'
const { homeName } = config

const state = {
  breadCrumbList: [],
  homeRoute: {}
}

const getters = {
  menuList () {
    return getMenuByRouter(routes)
  }
}

const mutations = {
  setBreadCrumbList (state, route) {
    state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
  },
  setHomeRoute (state) {
    state.homeRoute = getHomeRoute(routes, homeName)
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
