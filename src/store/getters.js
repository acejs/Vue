const getters = {
  // 第二个参数为 getter
  appWithVersion: state => {
    return `${state.app}_3.0`
  }
}

export default getters
