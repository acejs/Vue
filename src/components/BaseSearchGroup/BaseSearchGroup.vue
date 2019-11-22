<template>
  <div class="base-search-group">

    <el-row v-for="(outerItem, outerIndex) in inlineInputGroup"
            :key="`${_uid}_${outerIndex}`"
            :class="{rowHidden: outerIndex > 0 && hideMoreSearch}"
            :gutter="12">

      <el-col v-for="(item, index) in outerItem"
              :key="`${item.label}-${index}`"
              :span="oneItemSpan"
              style="margin-bottom: 12px;">
        <!-- 外部自定义组件 -->
        <c-expand v-if="item.isComponents"
                  :components="item.components"
                  v-model="valueList[item.label]"
                  :attr="item.attr"
                  :placeholder="item.placeholder"
                  :key="`${_uid}-${index}`"></c-expand>

        <component v-else
                   :key="`${_uid}-${index}`"
                   :is="item.ele"
                   :placeholder="item.placeholder"
                   v-model.trim="valueList[item.label]"
                   value-format="yyyy-MM-dd HH:mm:ss"
                   :start-placeholder="item.startPlaceholder"
                   :end-placeholder="item.endPlaceholder"
                   :default-time="item.defaultTime"
                   size="small"
                   :type="item.type"
                   :clearable="true"
                   style="width: 100%;">

          <template v-if="item.slot"
                    :slot="item.slot.name">
            <component :is="item.slot.ele"
                       :placeholder="item.placeholder"
                       v-model.trim="valueList[item.slot.label]"
                       size="small"
                       :clearable="true"
                       :style="{width: item.slot.width}">
              <template v-if="item.slot.children">
                <component :is="item.slot.children.ele"
                           v-for="v in item.slot.children.option"
                           :key="`${_uid}-${v.value}`"
                           :label="v.label"
                           :value="v.value"></component>
              </template>
            </component>
          </template>

          <template v-if="item.children">
            <component v-for="(it, i) in item.children.list"
                       :key="`${item.label}_${item.children.ele}_${i}`"
                       :is="item.children.ele"
                       :label="it.label"
                       :value="it.value"></component>
          </template>
        </component>
      </el-col>

    </el-row>

    <el-row type="flex">
      <el-col :span="12">
        <slot name="action"
              :valueList="valueList"></slot>
      </el-col>
      <el-col :span="12"
              align="right">
        <el-button type="primary"
                   size="small"
                   @click="search">搜索</el-button>
        <el-button type="ghost"
                   size="small"
                   @click="reset">清空</el-button>
        <el-button v-if="showExpandText"
                   type="text"
                   size="small"
                   @click="toExpand">{{ hideSearchText }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CloneDeep from 'clonedeep'
import CExpand from './CExpand'
import { singleArrayToMultiple } from '@/libs/tools'
export default {
  name: 'BaseSearchGroup',
  data () {
    return {
      initValueList: {},
      valueList: {},
      hideMoreSearch: true
    }
  },
  props: {
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
    CExpand
  },
  computed: {
    oneItemSpan () {
      return 24 / this.onelineNum
    },
    hideSearchText () {
      return this.hideMoreSearch ? '展开更多搜索项' : '收起搜索项';
    },
    inlineInputGroup () {
      return singleArrayToMultiple(this.inputGroup, this.onelineNum)
    },
    showExpandText () {
      return this.inlineInputGroup.length > 1
    }
  },
  methods: {
    setInitValue () {
      let valueList = {}
      let initValueList = {}
      this.inputGroup.forEach(v => {
        let { label, value, slot: { label: oK, value: oV } = {} } = v
        valueList[label] = value
        initValueList[label] = value
        if (oK) {
          valueList[oK] = oV
          initValueList[oK] = oV
        }
      })
      this.valueList = valueList
      this.initValueList = initValueList
    },
    reset () {
      this.valueList = CloneDeep(this.initValueList)
      this.$emit('input', this.valueList)
    },
    search () {
      this.$emit('search', this.valueList)
    },
    toExpand () {
      this.hideMoreSearch = !this.hideMoreSearch
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
}
</style>
