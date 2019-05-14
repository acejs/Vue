<template>
  <el-menu-item :index="index">
    <span slot="title">{{ title }}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    index: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
