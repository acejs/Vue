export default {
  name: 'Expand',
  functional: true,
  props: {
    render: Function,
    row: Object,
    data: Object,
    index: [Number, String]
  },
  render: (h, ctx) => {
    const {
      props: {
        row,
        data,
        index,
        row: { prop }
      }
    } = ctx

    const params = {
      row,
      data,
      index
    }
    if (prop) params.single = data[prop]
    return ctx.props.render(h, params)
  }
}
