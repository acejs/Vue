export default {
  name: 'CExpand',
  functional: true,
  props: {
    components: {
      type: Object,
      default: () => ({})
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  render: (h, ctx) => {
    const {
      props: { components, value },
      listeners: { input }
    } = ctx

    return h(components, {
      props: {
        value
      },
      on: {
        input (val) {
          input(val)
        }
      }
    })
  }
}
