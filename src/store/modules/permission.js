import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 使用meta.role确定当前用户是否具有权限
 * @param roles
 * @param route
 */
debugger
// console.log("roles",roles)
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 过滤异步路由表
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []
  debugger
  console.log("routes:", routes)
  routes.forEach(route => {
    const tmp = { ...route }
    // console.log("tmp:", tmp)

    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
     }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}
// 改：
// // 替换route对象中的component
// function replaceComponent (comp) {
//   if (comp.component && typeof (comp.component) == 'string') {
//     comp.component = componentMap[comp.component];
//   }
//   if (comp.children && comp.children.length > 0) {
//     for (let i = 0; i.children.length; i++) {
//       comp.children[i] = replaceComponent(comp.children[i]);
//     }
//   }
//   return comp
// }


// const actions = {
//   generateRoutes: async function ({ commit }, roles) {
//   return new Promise(resolve => {
//     // 从后台请求所有路由信息 async  await
//     // 这个getRoutes请求异步的，所以，程序运行到调用后，会继续往下走，而这个调用没有执行完，
//     //所以是不能立马拿到数据。所以要把异步改为同步。
//     let res =await getRoutes() // 异步改为同步
//     debugger
//     let myaccessedRoutes = res.data
//     // 数据微调1：整理替换组件名称，2：删除空的children
//     // 1、先在@\router\index.js中定义 componentMap 本地路由映射表
//     // 2、在本文档中，写一个方法 replaceComponent
//     // 3、再 过滤删除 并调用替换方法 replaceComponent
//     myaccessedRoutes = myaccessedRoutes.filter(curr => {
//       if (curr.children == null && curr.children.length == 0) {
//         delete curr.children
//       }
//       return replaceComponent(curr);
//     })
//     // 判断当前角色是否包含admin
//     if (roles.includes('admin')) {
//       // 所有路由都可以访问
//       // 将 myaccessedRoutes 改造成从数据库中获取
//       accessedRoutes = myaccessedRoutes || []
//     } else {
//       // 根据角色过滤掉不能访问的路由
//       accessedRoutes = filterAsyncRoutes(myaccessedRoutes, roles)
//     }
//     // 提交
//     commit('SET_ROUTES', accessedRoutes)
//     // 成功返回
//     resolve(accessedRoutes)
//     // return accessedRoutes
//   })
// }
// }
// 原来↓
const actions = {
  generateRoutes ({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
