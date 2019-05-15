<template>
  <el-container style="height: 100%;">
    <el-aside width="auto">
      <side-menu :menu-list="menuList"></side-menu>
    </el-aside>
    <el-container>
      <el-header style="padding: 0px;">
        <header-top></header-top>
      </el-header>
      <el-main>
        <keep-alive :include="cacheList">
          <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideMenu from './SideMenu'
import HeaderTop from './HeaderTop'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Main',
  components: {
    SideMenu,
    HeaderTop
  },
  computed: {
    ...mapGetters('app', [
      'menuList'
    ]),
    cacheList () {
      return []
    }
  },
  methods: {
    ...mapMutations('app', [
      'setHomeRoute',
      'setBreadCrumbList'
    ])
  },
  watch: {
    '$route' (newRoute) {
      this.setBreadCrumbList(newRoute)
    }
  },
  mounted () {
    // 获取主目录
    this.setHomeRoute()
    // 设置面包屑
    this.setBreadCrumbList(this.$route)
  }
}
</script>
