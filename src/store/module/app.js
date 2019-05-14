import { getMenuByRouter } from '@/libs/utils'
import { routes } from '@/router/router'

const state = {}

const getters = {
  menuList () {
    return getMenuByRouter(routes)
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
