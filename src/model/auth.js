import { get, post } from '@/libs/request'

class Auth {
  /**
   * 获取验证码
   * @params sid 使用uuid生成的唯一标识符
   */
  getCode (params) {
    return get('common/getCaptcha', params)
  }

  /**
   * 登录
   * @param email 用户名
   * @param password 密码
   * @param code 验证码
   * @param sid 前面获取验证码生成的uuid
   */
  postLogin (data) {
    return post('auth/login', data)
  }
}

export default new Auth()
