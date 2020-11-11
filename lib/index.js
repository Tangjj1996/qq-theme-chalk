import instance from './runtime'

export default {
  install(Vue) {
    Vue.component(instance.name, instance)
  }
}