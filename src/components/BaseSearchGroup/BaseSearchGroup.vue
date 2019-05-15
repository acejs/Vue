<template>
  <div class="base-search-group">
    <!-- 搜索 -->
    <el-row v-for="(outerItem, outerIndex) in reInputGroup"
            :key="`${_uid}_${outerIndex}`"
            :class="{rowHidden: outerIndex >= 1 && hideMoreSearch}">
      <el-col v-for="(item, index) in outerItem"
              :key="`${item.name}_${item.ele}_${index}`"
              :span="oneItemSpan"
              style="margin-bottom: 18px;">
        <el-row type="flex"
                align="middle"
                justify="space-between">
          <el-col :span="7"
                  class="input-title">{{ item.title }}：</el-col>

          <el-col :span="16">

            <!-- 自定义搜索框 -->
            <expand v-if="item.isRender"
                    v-model="valueList[item.name]"
                    :render="item.render"
                    :name="item.name"
                    :ele="item.ele">
            </expand>

            <!-- 外部自定义组件 -->
            <c-expand v-else-if="item.isComponents"
                      :components="item.components"
                      :name="item.name"
                      v-model="valueList[item.name]"></c-expand>

            <!-- 封装的搜索框 -->
            <component v-else
                       :is="item.ele"
                       :type="item.type"
                       :placeholder="item.placeholder"
                       :clearable="item.clearable || true"
                       :filterable="item.filterable"
                       :multiple="item.multiple"
                       value-format="yyyy-MM-dd HH:mm:ss"
                       v-model.trim="valueList[item.name]"
                       :default-time="item.type === 'datetimerange' && ['00:00:00', '23:59:59']"
                       :picker-options="item.type === 'datetimerange' ?pickerOptions : {}"
                       size="small"
                       style="width: 100%;">
              <template v-if="item.children">
                <component v-for="(it, i) in item.children.list"
                           :key="`${item.name}_${item.children.ele}_${i}`"
                           :is="item.children.ele"
                           :label="it.label"
                           :value="it.value"></component>
              </template>
            </component>

          </el-col>

        </el-row>
      </el-col>
    </el-row>

    <!-- 操作 -->
    <el-row type="flex"
            justify="">
      <el-col :offset="1"
              :span="12">
        <slot name="more-action"></slot>
      </el-col>
      <el-col :span="10"
              align="right">
        <el-button @click="search"
                   size="small"
                   type="primary"
                   icon="el-icon-search">搜索</el-button>
        <el-button @click="resetValueList"
                   size="small"
                   type="ghost"
                   icon="el-icon-delete">清空</el-button>
        <el-button v-if="showExpandText"
                   type="text"
                   size="small"
                   @click="toExpand">{{ hideSearchText }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import clonedeep from 'clonedeep'
import Expand from './Expand'
import CExpand from './CExpand'
export default {
  name: 'BaseSearchGroup',
  data () {
    return {
      initValueList: {},
      valueList: {},
      hideMoreSearch: true,
    }
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    inputGroup: {
      type: Array,
      default: () => []
    },
    onelineNum: {
      type: Number,
      default: 4
    }
  },
  components: {
    Expand,
    CExpand
  },
  computed: {
    oneItemSpan () {
      return 24 / this.onelineNum;
    },
    hideSearchText () {
      return this.hideMoreSearch ? '展开更多搜索项' : '收起搜索项';
    },
    reInputGroup () {
      const g = this.onelineNum;
      const len = this.inputGroup.length;
      const group = Math.floor(this.inputGroup.length / g) + 1;
      let i = 0;
      let result = [];

      while (i++ < group) {
        result.push(this.inputGroup.slice(g * (i - 1), g * i));
      }
      return result;
    },
    showExpandText () {
      return this.reInputGroup.length > 1
    }
  },
  methods: {
    setInitValue () {
      let valueList = {}
      let initValueList = {}
      this.inputGroup.forEach(val => {
        valueList[val.name] = val.value
        initValueList[val.name] = val.value
      });

      this.valueList = valueList
      this.initValueList = initValueList
    },
    resetValueList () {
      this.valueList = clonedeep(this.initValueList)
      this.$emit('input', this.valueList);
    },
    toExpand () {
      this.hideMoreSearch = !this.hideMoreSearch
    },
    change (name, val) {
      this.valueList[name] = val
    },
    search () {
      this.$emit('search', this.valueList)
    }
  },
  created () {
    this.setInitValue()
  }
}
</script>
<style lang="less">
.base-search-group {
  .rowHidden {
    display: none;
  }
  .input-title {
    font-size: 13px;
    color: #666;
    font-weight: bolder;
    text-align: right;
  }
}
</style>
