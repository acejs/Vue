let getAppName = function () {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('success')
    } else {
      reject('failed')
    }
  })
}

const actions = {
  // { state, getters, commit, dispatch }
  async setApp ({ commit }) {
    const app = await getAppName()
    commit('SET_APP', app)
  }
}

export default actions
