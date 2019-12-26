<template>
  <div>
    <b-table 
      <!-- v-bind="$attrs" 
      v-on="$listeners"  -->
      per-page="5">

      <!-- Pass on all named slots -->
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />

      <!-- Pass on all scoped slots -->
      <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope">

        <slot :name="slot" v-bind="scope" />
      </template>
    </b-table>
    <br />
    <h3>DEBUG</h3>
    <span v-for="attr in Object.keys($attrs)">
      attr={{attr}}
      <br />
    </span>
    <span v-for="slot in Object.keys($slots)">
      slot={{slot}}
      <br />
    </span>
    <span v-for="slot in Object.keys($scopedSlots)">
      scopedSlot={{slot}}
      <br />
    </span>
  </div>
</template>

<script>
export default {
  name: 'CrudTable',
  props: {},

  data () {
    return {
      info: '<pls define>',
      filter: null,
      totalRows: 100,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      status: '',
      sortOptions: '',
      selected: [],
      boxOne: '',
      boxTwo: '',
      items: [{ id: '1', userid: '1', title: 'title 1', body: 'body 1' }]
    }
  },
  created () {
    console.debug('@@@ CrudTable -> created ')
    // see https://vuejs.org/v2/api/#vm-attrs
    console.debug('attrs typeof=', typeof this.$attrs) // object

    console.error('slots typeof=', typeof this.$slots) // object
    console.error('slots keys=', Object.keys(this.$slots)) //
    console.log('slots parent keys=', Object.keys(this.$parent.$slots)) // object
    // for (var slot in Object.keys(this.$slots)) {
    //  console.log('slotobject=' + slot)
    // }
  },
  mounted () {
    console.log('@@@ CrudTable -> mounted ')
  },
  methods: {
    log (text) {
      console.log('log +> ' + text)
    },

    filterGrid (val1, val2) {
      console.log('@@@ filterGrid val1=' + val1 + ' , val2=' + val2)
      return true
    },

    rowSelected (selected) {
      console.log(
        '@@@ selected = ' +
          selected[0].id +
          'showDetail=' +
          selected[0]._showDetails
      )

      if (selected[0]._showDetails === true) {
        selected[0]._showDetails = false
      } else {
        selected[0]._showDetails = true
      }
      // this.selected = selected
    },

    showDetail () {
      console.log('@@@ showDetail')
      // var t = this.selected
      // t.body = 'gugusseli'
      // this.items.splice(1, 1, t)
      // var t = this.selected
      // var a = this.items
      // t.body = 'gugusseli'
      // a.splice(1, 1, t)
      // this.items = a
    },

    showDialog () {
      console.log('showDialog')
    },

    edit () {
      console.log('@@@ edit modal')
      this.$bvModal.show('modal-1')
    },
    clone () {
      console.log('@@@ clone modal')
      // this.$bvModal.show("modal-1");
    },
    toDelete () {
      console.log('@@@ toDelete modal selected=' + this.selected)

      if (this.selected === null || this.selected.length < 1) {
        this.$bvModal.msgBoxOk('pls select a row')
      } else {
        this.$bvModal.msgBoxOk('selected row will be deleted')
      }
    }
  },
  watch: {
    filter: function (value) {
      console.log('@@@ filter ' + value)
    },
    $attrs: function (value) {
      console.log('@@@ watch $attrs ' + value)
    }
  }
}
</script>
