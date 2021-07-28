import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission (value) {
  // value是['admin','editer']这样的数组
  // 判断当前用户是否有value里面的角色。有：true，无：false
  if (value && value instanceof Array && value.length > 0) {
    // 获得当前登录用户拥有的角色列表
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

    // 判断 value 和 roles 两个集合是否有交集
    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })
    return hasPermission
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
