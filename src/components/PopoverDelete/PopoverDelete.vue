<template>
  <el-popover placement="top"
              width="160"
              v-model="visible"
              style="margin-left: 4px;">
    <p>{{ content }}</p>
    <div style="text-align: right; margin: 8px 0px 0px">
      <el-button size="mini"
                 type="text"
                 @click="handleClick(false)">取消</el-button>
      <el-button type="primary"
                 size="mini"
                 @click="handleClick(true)">确定</el-button>
    </div>
    <el-button slot="reference"
               type="danger"
               size="small"
               icon="el-icon-delete">删除</el-button>
  </el-popover>
</template>
<script>
export default {
  name: 'PopoverDelete',
  data () {
    return {
      visible: false
    }
  },
  props: {
    content: {
      type: String,
      default: '确定要删除当前内容？'
    }
  },
  methods: {
    handleClick (type) {
      this.visible = false
      if (type) this.$emit('delete')
    }
  }
}
</script>
