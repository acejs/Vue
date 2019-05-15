import Main from '_c/Main'
import ParentView from '_c/ParentView'

/**
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  withoutRouterRule: (false) 是否受路由限制，父组件会影响子组件的属性
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
        name: '2-1',
        component: () => import('@/views/2/2-1'),
        meta: {
          title: '2-1',
          icon: 'el-icon-goods'
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
