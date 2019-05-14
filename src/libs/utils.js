/**
 * @description 和项目相关
 */
export const getMenuByRouter = list => {
  let res = []
  list.forEach(item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        name: item.name,
        icon: (item.meta && item.meta.icon) || '',
        meta: item.meta
      }
      if (Array.isArray(item.children) && item.children.length > 0) {
        obj.children = getMenuByRouter(item.children)
      }
      res.push(obj)
    }
  })
  return res
}
