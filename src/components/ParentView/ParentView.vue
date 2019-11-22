<template>
  <keep-alive :include="cacheList">
    <router-view />
  </keep-alive>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ParentView',
  computed: {
    ...mapState('app', [
      'cacheList'
    ])
  }
}
</script>
