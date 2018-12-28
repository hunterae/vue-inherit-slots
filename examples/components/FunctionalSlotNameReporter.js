export default {
  functional: true,
  render(h, context) {
    return h('p', {}, [
      `Slots Received by Functional Component: ${Object.keys(
        context.slots()
      ).join(', ')}`,
      h('h2', 'Default Slot:'),
      ...context.slots().default
    ])
  }
}
