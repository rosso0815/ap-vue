<template>
  <div>
    <b>BaseComponent {{ modTitle }}</b>
    <br />slot table :
    <slot name="table"></slot>
    <br />
    <button v-bind:disabled="isButtonDisabled" v-on:click="cbClicked">
      <slot>Button</slot>
    </button>
    <br />
  </div>
</template>
<script>
export default {
  name: 'BaseComponent',
  props: {
    title: String,
    isButtonDisabled: Boolean,
    cbClicked: Function
  },
  data () {
    return {
      info: '<pls define>',
      modTitle: ''
    }
  },
  created () {
    console.log('created ' + this.title)
    if (this.title.localeCompare('vbase 2')) {
      console.log('if vbase 2')
      this.modTitle = 'vbase 2 mod'
    } else {
      this.modTitle = this.title
    }
  }
}
</script>
