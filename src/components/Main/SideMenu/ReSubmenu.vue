<template>
  <el-submenu :index="index">
    <template slot="title">
      <i :class="parent.meta.icon"></i>
      <span slot="title"
            style="margin-left: 8px;">{{ parent.meta.title }}</span>
    </template>
    <template v-for="(item, index) in parent.children">
      <re-submenu v-if="item.children"
                  :key="`${item.index}_${index}`"
                  :parent="item"
                  :index="item.name"></re-submenu>
      <menu-item v-else
                 :key="`${item.index}_${index}`"
                 :index="item.name"
                 :icon="item.meta.icon"
                 :title="item.meta.title"></menu-item>
    </template>
  </el-submenu>
</template>
<script>
import MenuItem from './MenuItem'
export default {
  name: 'ReSubmenu',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: String,
      required: true
    }
  },
  components: {
    MenuItem
  }
}
</script>
