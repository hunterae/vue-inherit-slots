import InheritSlots from './components/InheritSlots'

const VueInheritSlotsPlugin = {
  install(Vue, options = {}) {
    Vue.component(options.alias || 'InheritSlots', InheritSlots)
  }
}

export default VueInheritSlotsPlugin

export { InheritSlots }

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueInheritSlotsPlugin)
}
