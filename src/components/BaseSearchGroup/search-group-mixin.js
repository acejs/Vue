export default {
  data () {
    return {
      filterList: {}
    }
  },
  methods: {
    doSearch (list) {
      this.filterList = list
      this.pageInfo.index = 1
      this.getList()
    }
  }
}
