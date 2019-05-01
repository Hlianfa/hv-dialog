/*
 * @Author: HuangLianfa
 * @Date: 2019-03-29 15:09:07
 * @Last Modified by: HuangLianfa
 * @Last Modified time: 2019-04-01 10:59:10
 */
import Vue from 'vue'
import confirmModule from './src/view/hv-confirm.vue'
import toastModule from './src/view/hv-toast.vue'
import './src/style/icon/iconfont.css'

const Dialog = (config) => {
  let options = {
    content: '',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    confirm: null,
    cancel: null
  }

  config = {...options, ...config}

  if (document.getElementsByClassName('hv-confirm').length || config.content === '') {
    return
  }

  let Tpl = Vue.extend(confirmModule)
  let instance = new Tpl()

  for (let key in config) {
    if (config.hasOwnProperty(key)) instance.$data[key] = config[key]
  }

  document.body.appendChild(instance.$mount().$el)
}

const Toast = (config) => {
  let opt = {
    content: '',
    type: '',
    position: '',
    duration: '2333'
  }
  for (let property in config) {
    opt[property] = config[property]
  }

  if (document.getElementsByClassName('hv-toast').length || opt.content === '') {
    return
  }

  let Tpl = Vue.extend(toastModule)
  let instance = new Tpl()

  for (let key in opt) {
    if (opt.hasOwnProperty(key)) {
      instance.$data[key] = opt[key]
    }
  }

  let tpl = instance.$mount().$el

  document.body.appendChild(tpl)

  if (opt.duration !== 0 && opt.duration !== '0') {
    setTimeout(() => {
      tpl.setAttribute('style', 'opacity:0')
      setTimeout(() => {
        document.body.removeChild(tpl)
      }, 888)
    }, opt.duration)
  }
}

export default {
  install () {
    Vue.prototype.$dialog = Dialog.bind(Vue)
    Vue.prototype.$toast = Toast.bind(Vue)
  }
}
