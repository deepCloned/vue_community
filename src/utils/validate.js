import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'

/**
 * 自定义规则
 */
extend('required', {
  validate: value => {
    return value !== ''
  },
  message: '邮箱不能为空'
})

extend('email', {
  validate: value => {
    const emailReg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
    return emailReg.exec(value)
  },
  message: '请输入正确的邮箱'
})

extend('password', {
  validate: value => {
    const passwordReg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/
    return passwordReg.exec(value)
  },
  message: '请输入6-16位包含数字、字母、符号中的两种的字符'
})

// 全局注册组件
Vue.component('ValidationProvider', ValidationProvider)
