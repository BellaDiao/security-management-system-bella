

const data =[
  {
    "name": "fries",
    "value": 22,
    "country": "AF"
  },
  {
    "name": "sushi",
    "value": 40,
    "country": "AI"
  } 
]
module.exports = [
  {
    url: '/vue-element-admin/heartmap\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: data
      }
    }
  },

  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
