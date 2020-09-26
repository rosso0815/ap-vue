<template>
  <div>
    <h1>{{ name }}</h1>
    <vbase title="vbase 2" v-bind:isButtonDisabled="true" v-bind:cbClicked="clickedComp1">Button1</vbase>
    <vbase title="vbase 3" v-bind:isButtonDisabled="false" v-bind:cbClicked="clickedComp2">Button2</vbase>
  </div>
</template>

<script>
import vbase from '@/components/BaseComponent.vue'

export default {
  name: 'playPage2',
  components: {
    vbase
  },
  data () {
    return {
      // count: 0,
      message: 'hello',
      name: 'PlayPage 2'
    }
  },
  methods: {
    clickedComp1 () {
      console.log('clickedComp1')
    },
    clickedComp2 () {
      console.log('clickedComp2')
    }
  }
}
</script>
