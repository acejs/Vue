<template>
  <el-menu class="el-menu-vertical"
           :collapse="isCollapse"
           background-color="#324157"
           text-color="#bfcbd9"
           active-text-color="#20a0ff"
           :unique-opened="true">
    <re-submenu v-for="(item, index) in menuList"
                :key="`${_uid}_${index}`"
                :index="item.name"
                :parent="item"></re-submenu>
    <i @click="triggerSideMenu"
       :class="{'collapse-icon': true, 'el-icon-d-arrow-right' : isCollapse, 'el-icon-d-arrow-left' : !isCollapse }"></i>
  </el-menu>
</template>
<script>
import ReSubmenu from './ReSubmenu'
export default {
  name: 'SideMenu',
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    ReSubmenu
  },
  methods: {
    triggerSideMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="less">
.el-menu-vertical {
  min-height: 100%;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
  .collapse-icon {
    color: #fff;
    position: absolute;
    right: 0;
    top: 50%;
    background: #48576a;
    font-size: 12px;
    padding: 15px 10px;
    cursor: pointer;
    border-radius: 8px 0px 0px 8px;
  }
}
</style>
