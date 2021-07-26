import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    // baseURL:'',
    // url: '/vue-element-admin/user/login',
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

// 得到用户信息
export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

// 退出
export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
