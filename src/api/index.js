import axios from 'axios'
import request from '@/utils/request1'

export function getApiUrl() {
    return 'http://localhost:18000'
}

export function fetchUserData() {
    return request.get('https://api.github.com/users/woai3c')
}

export function login(userName, password) {
    // const data = await axios.get('xxx')
    return request.post('/plat/login?userName=' + userName + '&password=' + password)
}

export async function fetchMenuList(id) {
    const data = await request.get('app/findAppResourceByAppAndStaff?id=' + id)
    debugger
    return data
    // return request.post('/findAppResourceByAppAndStaff?id=' + id)
}
