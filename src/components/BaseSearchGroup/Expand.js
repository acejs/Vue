export default {
  name: 'Expand',
  functional: true,
  props: {
    render: Function,
    value: {
      type: [Array, Object, String],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    ele: {
      type: String,
      required: true
    },
    extra: {
      type: Object,
      default: () => ({})
    }
  },
  render: (h, ctx) => {
    const args = {
      value: ctx.props.value,
      name: ctx.props.name,
      ele: ctx.props.ele,
      extra: ctx.props.extra,
      listeners: ctx.listeners
    }
    return ctx.props.render(h, args)
  }
}
