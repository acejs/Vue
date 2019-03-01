<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>用户名：{{ userName }}</h2>
    <h2>{{ userNameWithAge }}</h2>
    <h2>APP名：{{ app }}</h2>
    <button @click="handleClick">点击</button>
    <button @click="getInfo">获取</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { getUserInfo } from '_a/user'
export default {
  name: 'about',
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      app: state => state.app
    }),
    ...mapGetters('user', [
      'userNameWithAge'
    ])
  },
  methods: {
    ...mapMutations('user', [
      'SET_USERNAME'
    ]),
    ...mapActions('user', [
      'updateUserName'
    ]),
    handleClick () {
      this.SET_USERNAME({ userName: 'kk' })
      // this.updateUserName()
    },
    getInfo () {
      getUserInfo().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
