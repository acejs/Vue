<template>
  <el-table :data="tableData"
            stripe
            @selection-change="handleSelectionChange"
            v-loading="loading"
            ref="baseTable"
            v-bind="$attrs"
            v-on="$listeners">

    <template v-for="(item, index) in tableColumns">
      <el-table-column v-if="item.type && item"
                       :type="item.type"
                       :width="item.width"
                       :label="item.label"
                       :key="`${item.type}_${index}`"
                       :selectable="item.selectable">
      </el-table-column>

      <el-table-column v-else-if="item"
                       :prop="item.prop"
                       :label="item.label"
                       :width="item.width"
                       :min-width="item.minWidth"
                       :key="`${item.prop}_${index}`"
                       :align="item.align || 'center'"
                       :fixed="item.fixed">
        <expand slot-scope="scope"
                :render="item.render ? item.render : normalRender"
                :row="item"
                :data="scope.row"
                :index="scope.$index"
                :key="item.prop"></expand>
      </el-table-column>
    </template>

  </el-table>

</template>

<script>
import Expand from './Expand'
export default {
  name: 'BaseTable',
  components: {
    Expand
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableColumns: {
      type: Array,
      default: () => []
    },
    multipleSelection: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    normalRender (h, params) {
      let prop = params.row.prop,
        data = params.data[prop];
      return h('div', {}, data);
    },
    handleSelectionChange (val) {
      this.$emit('update:multiple-selection', val)
    }
  }
}
</script>
