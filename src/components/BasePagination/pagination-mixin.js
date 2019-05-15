export default {
  data () {
    return {
      pageInfo: {
        limit: 10,
        total: 0,
        index: 1
      }
    }
  },
  methods: {
    changePage (p) {
      this.pageInfo.index = p
      this.getList()
    },
    sizeChange (limit) {
      this.pageInfo.limit = limit
      this.getList()
    }
  }
}
