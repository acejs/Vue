<template>
  <el-row style="margin-top: 20px;"
          type="flex"
          align="middle"
          v-if="pageInfo.total > 0">
    <el-col align="right">
      <el-pagination :small="small"
                     background
                     @current-change="currentChange"
                     @size-change="sizeChange"
                     :layout="layout"
                     :total="pageInfo.total"
                     :page-size="pageInfo.limit"
                     :current-page.sync="pageInfo.index">
      </el-pagination>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'BasePagination',
  props: {
    pageInfo: {
      type: Object,
      default: () => ({})
    },
    small: {
      type: Boolean,
      default: false
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  methods: {
    currentChange (p) {
      this.$emit('change-page', p)
    },
    sizeChange (limit) {
      this.$emit('size-change', limit)
    }
  }
}
</script>
