<template>
  <el-dialog :title="title"
             :visible="value"
             :width="width"
             :before-close="beforeCloseDialog">
    <!-- 标题 -->
    <slot name="title"></slot>
    <!-- 主体内容 -->
    <slot name="default"></slot>
    <!-- 底部按钮 -->
    <div slot="footer">
      <slot name="footer"></slot>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'BaseDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    }
  },
  methods: {
    beforeCloseDialog () {
      this.$emit('input', false)
    }
  }
}
</script>
