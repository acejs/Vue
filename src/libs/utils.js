/**
 * @description 和项目相关
 */

// 通过路由配置。获取左侧菜单列表
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

// 获取面包屑
export const getBreadCrumbList = (route, homeRoute) => {
  let homeItem = { ...homeRoute, icon: homeRoute.meta.icon || '' }
  let routeMetched = route.matched
  if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
  let res = routeMetched
    .filter(item => {
      return item.meta === undefined || !item.meta.hideInBread
    })
    .map(item => {
      let meta = { ...item.meta }
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: meta
      }
      return obj
    })
  res = res.filter(item => {
    return !item.meta.hideInMenu
  })
  return [{ ...homeItem, to: homeRoute.path }, ...res]
}

// 获取路由列表中的根目录
export const getHomeRoute = (routes, homeName = 'home') => {
  let i = -1
  const len = routes.length
  let homeRoute = {}
  while (++i < len) {
    const item = routes[i]
    if (item.children && item.children.length > 0) {
      const res = getHomeRoute(item.children, homeName)
      if (res.name === homeName) return res
    } else {
      if (item.name === homeName) homeRoute = item
    }
  }
  return homeRoute
}
