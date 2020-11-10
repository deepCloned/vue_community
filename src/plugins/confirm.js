import ConfirmComponent from '@/components/common/Confirm'

const Confirm = {}

Confirm.install = Vue => {
  const ConfirmConstructor = Vue.extend(ConfirmComponent)
  const instance = new ConfirmConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$confirm = (options = {}) => {
    const { title, message, success, fail } = options
    instance.title = title
    instance.message = message
    instance.isShow = true
    if (typeof success === 'function') {
      instance.success = success
    }
    if (typeof fail === 'function') {
      instance.fail = fail
    }
  }
}

export default Confirm
