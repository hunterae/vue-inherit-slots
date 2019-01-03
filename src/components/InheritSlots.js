// TODO: implement alternate approach where a default scope is evaluated with props included the merged slots and scopedSlots
// TODO: consider removing the merging of scopedSlots - possible antipattern or negative side-effect
//  as it requires mutating the scopedSlots object that is passed in. It is also fairly simple to merge them manually

import { omit, flatten } from '../utils/HelperUtils'

export default {
  props: {
    inheritDefaultSlot: {
      type: Boolean,
      default: false
    }
  },
  functional: true,
  render(h, context) {
    // pull in the context.slots() in case the user wants to merge these with the parent slots
    let allSlots = context.slots()

    // if scopedSlots were passed in, parent scopedSlots will be merged into this hash
    let scopedSlots = context.data.scopedSlots

    let { inheritDefaultSlot } = context.props
    let parent = context.parent

    let parentSlots = inheritDefaultSlot
      ? parent.$slots
      : omit(parent.$slots, ['default'])

    Object.entries(parentSlots).forEach(([slotName, slots]) => {
      allSlots[slotName] = slots.concat(allSlots[slotName] || [])
    })

    if (scopedSlots) {
      let parentScopedSlots = parent.$scopedSlots || {}
      if (!inheritDefaultSlot) {
        parentScopedSlots = omit(parentScopedSlots, ['default'])
      }
      Object.entries(parentScopedSlots).forEach(([key, value]) => {
        scopedSlots[key] = value
      })
    }

    // This makes the slots child slots of the component that is inheriting slots
    let slotChildren = flatten(Object.values(allSlots))
    return slotChildren
  }
}
