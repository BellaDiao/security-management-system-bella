import request from '@/utils/request'

export function getRoutes( data) {
  return request({
    // baseURL:'http://locolhost:3001', // 自己请求的路径前头
    url: '/vue-element-admin/routes',// 自己请求的路径
    method: 'get',
    data
  })
}

export function getRoles() {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/vue-element-admin/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}
