<template>
  <div class="home">
    <h1>Home</h1>
    <h2>{{ app }}</h2>
    <h2>{{ appWithVersion }}</h2>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    //
  },
  computed: {
    ...mapState([
      'app'
    ]),
    ...mapGetters([
      'appWithVersion'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_APP'
    ]),
    ...mapActions([
      'setApp'
    ]),
    handleClick () {
      // this.SET_APP('N')
      this.setApp()
    }
  }
}
</script>
