
<script>
import MyMenu from './components/MyMenu.vue'

export default {
  name: 'app',
  components: {
    MyMenu
  }
}
</script>

<template>
  <div id="app">
    <MyMenu></MyMenu>
    <div class="container-fluid"><router-view /></div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
