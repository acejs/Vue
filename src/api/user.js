import axios from './index'

export const getUserInfo = () => {
  return axios.request({
    url: '/user/getUserInfo',
    method: 'post'
  })
}
