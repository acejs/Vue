export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    visible: {
      get () {
        return this.value
      },
      set () {
        this.close()
      }
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
      this.reset()
    }
  }
}
