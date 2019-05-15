<template>
  <div class="header-continer">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in breadCrumbList">
        <el-breadcrumb-item :key="`bread-crumb-${item.name}`"
                            v-if="item.name === homeName"
                            :to="{ name: item.name }">{{item.meta.title}}</el-breadcrumb-item>
        <el-breadcrumb-item v-else
                            :key="`bread-crumb-${item.name}`">{{item.meta.title}}</el-breadcrumb-item>
      </template>

    </el-breadcrumb>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderTop',
  data () {
    return {
      homeName: this.$config.homeName
    }
  },
  computed: {
    ...mapState('app', [
      'breadCrumbList'
    ])
  }
}
</script>

<style lang="less">
.header-continer {
  background-color: #eff2f7;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
</style>
