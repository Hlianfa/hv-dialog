import Vue from 'vue';
import confirmModule from './src/view/hv-confirm.vue';
import toastModule from './src/view/hv-toast.vue';
import './src/style/icon/iconfont.css';

const Dialog = (config) => {
  const options = {
    content: '',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    confirm: null,
    cancel: null,
  };

  Object.assign(options, config);

  if (document.getElementsByClassName('hv-confirm').length || options.content === '') {
    return;
  };

  const Tpl = Vue.extend(confirmModule);
  const instance = new Tpl();

  for (const key in options) {
    if (options.hasOwnProperty(key)) instance.$data[key] = options[key];
  };

  document.body.appendChild(instance.$mount().$el);
};

const Toast = (config) => {
  const opt = {
    content: '',
    type: '',
    position: '',
    duration: '2333'
  };
  for (const property in config) {
    opt[property] = config[property];
  };

  if (document.getElementsByClassName('hv-toast').length || opt.content === '') {
    return;
  };

  const Tpl = Vue.extend(toastModule);
  const instance = new Tpl();

  for (const key in opt) {
    if (opt.hasOwnProperty(key)) {
      instance.$data[key] = opt[key];
    }
  }

  const tpl = instance.$mount().$el;

  document.body.appendChild(tpl);

  if (opt.duration !== 0 && opt.duration !== '0') {
    setTimeout(() => {
      tpl.setAttribute('style', 'opacity:0');
      setTimeout(() => {
        document.body.removeChild(tpl);
      }, 888);
    }, opt.duration);
  }
};

export default {
  install () {
    Vue.prototype.$dialog = Dialog.bind(Vue);
    Vue.prototype.$toast = Toast.bind(Vue);
  }
};
