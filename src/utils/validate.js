import Vue from 'vue'
import { ValidationProvider, extend, localize } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

/**
 * 自定义规则
 */
extend('email', email)
extend('required', required)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    email: '邮箱',
    password: '密码',
    nickname: '昵称',
    username: '账号',
    code: '验证码',
    confirmPassword: '确认密码'
  },
  fields: {
    email: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}'
    },
    password: {
      password: '请输入正确的{_field_}',
      required: '请输入{_field_}'
    },
    code: {
      required: '请输入{_field_}'
    }
  }
})
// extend('email', {
//   validate: value => {
//     const emailReg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
//     return emailReg.exec(value)
//   },
//   message: '请输入正确的邮箱'
// })

// extend('password', {
//   validate: value => {
//     const passwordReg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/
//     return passwordReg.exec(value)
//   },
//   message: '请输入6-16位包含数字、字母、符号中的两种的字符'
// })

// 全局注册组件
Vue.component('ValidationProvider', ValidationProvider)
