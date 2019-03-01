import Mock from 'mockjs'
import { getUserInfo } from './response/user';

Mock.mock(/\/user\/getUserInfo/, 'post', getUserInfo)

Mock.setup({
  timeout: 1500
})

export default Mock