<template>
  <div>
    <el-button @click="handleClick"
               size="small">详情</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$router.push({
        name: '2-2-2-d'
      })
    }
  }
}
</script>
