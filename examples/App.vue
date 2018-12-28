<template>
  <div id="app">
    <some-component>
      <div slot="parent-slot-1">Parent Slot 1</div>
      <div slot="parent-slot-2">Parent Slot 2</div>
      <h3>Parent Default Slot Content</h3>
    </some-component>
  </div>
</template>

<script>
import SomeComponent from './components/SomeComponent'
export default {
  components: {
    SomeComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
