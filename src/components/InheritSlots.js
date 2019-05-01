import { omit } from '../utils/HelperUtils'

export default {
  props: {
    inheritDefaultSlot: {
      type: Boolean,
      default: false
    },
    inheritParentSlots: {
      type: Boolean,
      default: true
    },
    element: {}
  },
  functional: true,
  render(h, context) {
    // pull in the context.slots() in case the user wants to merge these with the parent slots
    let allSlots = context.slots()

    // if scopedSlots were passed in, parent scopedSlots will be merged into this hash
    let scopedSlots = context.data.scopedSlots

    if (!scopedSlots) {
      context.data.scopedSlots = {}
      scopedSlots = context.data.scopedSlots
    }

    let { inheritDefaultSlot, inheritParentSlots, element } = context.props
    if (!element) {
      element = context.data.tag
    }

    let parentSlots = []
    if (inheritParentSlots) {
      let parent = context.parent
      parentSlots = inheritDefaultSlot
        ? parent.$slots
        : omit(parent.$slots, ['default'])
      Object.entries(parentSlots).forEach(([slotName, slots]) => {
        allSlots[slotName] = slots.concat(allSlots[slotName] || [])
      })
      let parentScopedSlots = parent.$scopedSlots || {}
      if (!inheritDefaultSlot) {
        parentScopedSlots = omit(parentScopedSlots, ['default'])
      }
      Object.entries(parentScopedSlots).forEach(([key, value]) => {
        scopedSlots[key] = value
      })
    }

    let slotChildren = []
    Object.entries(allSlots).forEach(([slotName, slots]) => {
      slotChildren.push(
        h(
          'template',
          {
            slot: slotName
          },
          slots
        )
      )
    })
    if (element) {
      return h(
        element,
        { ...context.data, scopedSlots: scopedSlots },
        slotChildren
      )
    } else {
      return slotChildren
    }
  }
}
