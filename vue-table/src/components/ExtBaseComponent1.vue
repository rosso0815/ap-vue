
<template>
  <div>
    <b>ExtBaseComponent1 title : {{ title }}</b><br>
    info : {{ info }}<br>
    slot : <slot></slot><br>
    slot footer : <slot name="footer" ></slot><br>
    slot table  : <slot name="table" v-bind:title="title">title={{ title }} </slot><br>
    BaseComponent:
    <BaseComponent title="BaseComp">
    </BaseComponent><br>
    done<br><br>
  </div>
</template>

<script>
import BaseComponent from '@/components/BaseComponent.vue'
export default {
  name: 'ExtBaseComponent1',
  props: {
    title: String,
    items: Array
  },
  components: {
    BaseComponent
  },
  data () {
    return {
      info: '<pls define>',
      filter: null,
      totalRows: 100,
      currentPage: 1
    }
  },
  created () {
    console.log('@@@ CrudTable -> created ')
  },
  methods: {
    log (text) {
      console.log('log +> ' + text)
    },

    filterGrid (val1, val2) {
      console.log('@@@ filterGrid val1=' + val1 + ' , val2=' + val2)
      return true
    }
  },
  watch: {
    filter: function (value) {
      console.log('@@@ filter ' + value)
    }
  }
}
</script>
