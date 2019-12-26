<template>
  <div>
    <h1>playPage1</h1>
    <ExtBaseComponent1 title="title1" >
      this is a slot
      <template v-slot:footer>
        <span>this is a footer</span>
      </template>
      <template v-slot:table="slotProps">
        <span>slot-table-title : {{ slotProps.title }}</span>
      </template>
    </ExtBaseComponent1>

    <ExtBaseComponent1 title="title2" >
      <template v-slot:footer>
        <span>Here might be a page footer</span>
      </template>
    </ExtBaseComponent1>
  </div>
</template>

<script>

import ExtBaseComponent1 from '@/components/ExtBaseComponent1.vue'

export default {
  name: 'playPage1',
  components: {
    ExtBaseComponent1
  },
  data () {
    return {
      // count: 0,
      message: 'hello'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }

  },

  methods: {
    mouseover: function () {
      this.message = 'Good!'
    },
    mouseleave: function () {
      this.message = 'Hover Me!'
    }
  }
}

</script>
