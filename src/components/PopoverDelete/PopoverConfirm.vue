<template>
  <el-popover placement="top"
              width="160"
              v-model="visible"
              style="margin: 0px 4px;">
    <p><i class="el-icon-warning"
         style="color:#F56C6C;" /> {{ content }}</p>
    <div style="text-align: right; margin: 8px 0px 0px">
      <el-button size="mini"
                 type="text"
                 @click="handleClick(false)">取消</el-button>
      <el-button type="primary"
                 size="mini"
                 @click="handleClick(true)">确定</el-button>
    </div>
    <el-button slot="reference"
               :type="type"
               :size="size"
               :icon="icon"
               :disabled="disabled">{{ action }}</el-button>
  </el-popover>
</template>
<script>
export default {
  name: 'PopoverConfirm',
  data () {
    return {
      visible: false
    }
  },
  props: {
    content: {
      type: String,
      default: '确定要删除当前内容？'
    },
    size: {
      type: String,
      default: 'small'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: '删除'
    },
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'danger'
    }
  },
  methods: {
    handleClick (type) {
      this.visible = false
      type && this.$emit('sure')
    }
  }
}
</script>
