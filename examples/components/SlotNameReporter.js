export default {
  render(h) {
    return h('p', {}, [
      `Slots Received by Standard (Non-Functional) Component: ${Object.keys(
        this.$slots
      ).join(', ')}`,
      h('h2', 'Default Slot:'),
      ...this.$slots.default
    ])
  }
}
