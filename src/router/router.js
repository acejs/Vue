import Main from '_c/Main'
import ParentView from '_c/ParentView'

/**
 * meta: {
 *  title: { String|Number| }
 *         显示在侧边栏、面包屑的文字
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  needCache: (false) 设为 true 后在切换页面后会对原来的页面做缓存，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  parentViewName: (-) 同级 父页面 的name
 * }
 */

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      hideInMenu: true
    }
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      title: '主页',
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views'),
        meta: {
          title: '主页',
          icon: 'el-icon-s-home'
        }
      }
    ]
  },
  {
    path: '/1',
    name: '1',
    component: Main,
    meta: {
      title: '1',
      icon: 'el-icon-goods'
    },
    children: [
      {
        path: '1-1',
        name: '1-1',
        component: () => import('@/views/1/1-1'),
        meta: {
          title: '1-1',
          icon: 'el-icon-goods'
        }
      },
      {
        path: '1-2',
        name: '1-2',
        component: () => import('@/views/1/1-2'),
        meta: {
          title: '1-2',
          icon: 'el-icon-goods'
        }
      }
    ]
  },
  {
    path: '/2',
    name: '2',
    component: Main,
    meta: {
      title: '2',
      icon: 'el-icon-video-play'
    },
    children: [
      {
        path: '2-1',
        name: 'needCache',
        component: () => import('@/views/2/2-1'),
        meta: {
          title: '2-1',
          icon: 'el-icon-goods',
          needCache: true
        }
      },
      {
        path: '2-2',
        name: '2-2',
        component: ParentView,
        meta: {
          title: '2-2',
          icon: 'el-icon-goods'
        },
        children: [
          {
            path: '2-2-1',
            name: '2-2-1',
            component: () => import('@/views/2/2-2/2-2-1'),
            meta: {
              title: '2-2-1',
              icon: 'el-icon-goods'
            }
          },
          {
            path: '2-2-2',
            name: '2-2-2',
            component: () => import('@/views/2/2-2/2-2-2'),
            meta: {
              title: '2-2-2',
              icon: 'el-icon-goods'
              // hideInMenu: true
            }
          },
          {
            path: '2-2-2-d',
            name: '2-2-2-d',
            component: () => import('@/views/2/2-2/2-2-2-d'),
            meta: {
              parentViewName: '2-2-2',
              title: '2-2-2-d',
              icon: 'el-icon-goods',
              hideInMenu: true
            }
          }
        ]
      },
      {
        path: '2-3',
        name: '2-3',
        component: () => import('@/views/2/2-3'),
        meta: {
          title: '2-3',
          icon: 'el-icon-goods'
        }
      }
    ]
  }
]
