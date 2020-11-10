import AlertComponent from '@/components/common/Alert'

const Alert = {}
Alert.install = (Vue) => {
  const AlertConstructor = Vue.extend(AlertComponent)
  const instance = new AlertConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$alert = ({ title, message }) => {
    instance.title = title
    instance.message = message
    instance.isShow = true
  }
}

export default Alert
