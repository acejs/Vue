<template>
  <el-dialog :title="title"
             :visible="value"
             :width="width"
             v-bind="$attrs"
             v-on="$listeners"
             :before-close="beforeCloseDialog"
             :close-on-press-escape="closeOnPressEscape"
             :close-on-click-modal="closeOnClickModal">
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
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    beforeCloseDialog () {
      this.$emit('input', false)
    }
  }
}
</script>
