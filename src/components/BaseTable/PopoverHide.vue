<template>
  <el-popover placement="top"
              trigger="hover"
              :content="content"
              width="500"
              :disabled="disabled">
    <span slot="reference"
          style="cursor: pointer">{{show}}</span>
  </el-popover>
</template>
<script>
export default {
  name: 'PopoverHide',
  props: {
    content: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 20
    }
  },
  computed: {
    show () {
      return this.content.slice(0, this.count)
    },
    disabled () {
      return this.content.length <= this.count
    }
  }
}
</script>
