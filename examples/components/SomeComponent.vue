<template>
  <div>
    <div>
      <label><input type="checkbox" v-model="inheritSlots" /> Inherit Slots?</label>
    </div>
    <div v-if="inheritSlots">
      <label><input type="checkbox" v-model="inheritDefaultSlot" /> Inherit Default Slot</label>
    </div>
    <div>
      <label><input type="checkbox" v-model="useFunctionalComponent" /> Functional Component?</label>
    </div>
    <component :is="component">
      <inherit-slots v-if='inheritSlots' :inherit-default-slot="inheritDefaultSlot" />
      <div slot='child-slot-1'></div>
      <div slot='child-slot-2'></div>
      <h3>Child Default Slot Content</h3>
    </component>
  </div>  
</template>

<script>
import SlotNameReporter from './SlotNameReporter'
import FunctionalSlotNameReporter from './FunctionalSlotNameReporter'

export default {
  data() {
    return {
      inheritSlots: false,
      inheritDefaultSlot: false,
      useFunctionalComponent: false
    }
  },
  computed: {
    component() {
      return this.useFunctionalComponent
        ? 'functional-slot-name-reporter'
        : 'slot-name-reporter'
    }
  },
  components: {
    SlotNameReporter,
    FunctionalSlotNameReporter
  }
}
</script>

<style>
</style>
