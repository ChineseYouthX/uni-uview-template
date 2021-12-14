const { http } = uni.$u
// 获取用户信息
export const fetchMenu = (params, config = {}) => http.post('getUserInfo', params, config)