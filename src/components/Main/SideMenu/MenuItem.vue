<template>
  <el-menu-item :index="index">
    <i :class="icon"></i>
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
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
