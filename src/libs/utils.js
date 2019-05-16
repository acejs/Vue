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
export const getBreadCrumbList = (route, homeRoute, routes) => {
  let homeItem = { ...homeRoute }
  let routeMetched = route.matched
  if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
  let res = routeMetched
    .filter(item => {
      return item.meta === undefined || !item.meta.hideInBread
    })
    .map(item => {
      if (item.meta && item.meta.parentViewName) {
        const p = getInfoByParentViewName(routes, route.meta.parentViewName)
        p.to = p.name
        return [p, item]
      } else return item
    })
    .reduce((accumulator, currentValue) => {
      let baseArr = []
      let currentArr = []
      !Array.isArray(accumulator)
        ? (baseArr = [accumulator])
        : (baseArr = accumulator)
      !Array.isArray(currentValue)
        ? (currentArr = [currentValue])
        : (currentArr = currentValue)
      return baseArr.concat(currentArr)
    })
    .map(item => {
      let obj = {
        name: item.name,
        meta: { ...item.meta },
        to: item.to
      }
      return obj
    })
  return [{ ...homeItem, to: homeRoute.name }, ...res]
}

// 通过 parentViewName 获取对应路由的参数
export const getInfoByParentViewName = (routes, parentViewName) => {
  let i = -1
  const len = routes.length
  let res = {}
  while (++i < len) {
    const item = routes[i]
    if (item.name === parentViewName) {
      res = item
      break
    }
    if (item.children && item.children.length) {
      res = getInfoByParentViewName(item.children, parentViewName)
    }
  }
  return res
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
