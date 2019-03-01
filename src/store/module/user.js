const state = {
  userName: 'kang'
}

const getters = {
  // 第二个参数 getters 第三个参数 rootState
  userNameWithAge(state) {
    return `${state.userName}_25`
  }
}

const mutations = {
  SET_USERNAME(state, params) {
    state.userName = params.userName
  }
}

const actions = {
  // { commit, dispatch, getters, rootGetters, rootState, state }
  updateUserName(context) {
    let newUserName = {
      userName: 'kangkang'
    }
    context.commit('SET_USERNAME', newUserName)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
