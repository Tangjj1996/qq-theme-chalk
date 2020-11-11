const instance = require('./runtime')

module.exports = {
  install(Vue) {
    Vue.component(instance.name, instance)
  }
}