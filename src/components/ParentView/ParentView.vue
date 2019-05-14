<template>
  <keep-alive :include="cacheList">
    <router-view />
  </keep-alive>
</template>
<script>
export default {
  name: 'ParentView',
  computed: {
    cacheList () {
      return []
    }
  }
}
</script>
