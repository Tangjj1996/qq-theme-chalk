import Vue from 'vue';

import instance from './toast';

const ToastCom = Vue.extend(instance);
const toastPool = [];

export default function toast(opts = {}) {
  if (toastPool.length) return;
  const toastInstance = new ToastCom({
    el: document.createElement('div'),
  });

  toastInstance.message = opts.message;
  toastInstance.status = opts.status;
  document.body.appendChild(toastInstance.$el);
  toastPool.push(toastInstance);
  setTimeout(() => {
    document.body.removeChild(toastInstance.$el);
    toastPool.pop();
  }, 2000);
}
