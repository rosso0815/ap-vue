<!-- lets play with vue -->
<script>
export default {
  name: 'ButtonCounter',
  data () {
    return {
      count: 1
    }
  }
}
</script>
<template>
  <div>
    <h1>ButtonCounter</h1>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
<style>
</style>
