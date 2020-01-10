<template>
  <div>
    <h3>{{ title }}</h3>

    <b-form-select
      v-model="perPage"
      id="perPageSelect"
      :size="size"
      :options="pageOptions"
    />

    <span v-for="action in actions">
      <b-button
        v-on:click="$emit(action.action, 'button clicked')"
        :size="size"
        :class="style_button"
      >
        {{ action.title }}
        {{ action.action }}
      </b-button>
    </span>

    <b-table
      selectable
      select-mode="single"
      :per-page="perPage"
      :items="items"
      :fields="fields"
      :size="size"
    >
      <!-- Pass on all named slots -->
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />

      <!-- Pass on all scoped slots -->
      <template
        v-for="slot in Object.keys($scopedSlots)"
        :slot="slot"
        slot-scope="scope"
      >
        <slot :name="slot" v-bind="scope" />
      </template>
    </b-table>
    <br />

    <div v-if="debugOn">
      <h3>DEBUG</h3>
      <span v-for="attr in Object.keys($attrs)">
        attr={{ attr }}
        <br />
      </span>
      <span v-for="slot in Object.keys($slots)">
        slot={{ slot }}
        <br />
      </span>
      <span v-for="slot in Object.keys($scopedSlots)">
        scopedSlot={{ slot }}
        <br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crud-table',
  props: ['title', 'items', 'fields', 'actions'],

  data() {
    return {
      debugOn: true,
      info: '<pls define>',
      size: 'sm',
      style_button: 'mt-1 mb-1 mr-1',
      filter: null,
      totalRows: 100,
      currentPage: 1,
      perPage: 5,
      pageOptions: [1, 2, 5, 10, 25],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      status: '',
      sortOptions: '',
      selected: [],
      boxOne: '',
      boxTwo: '',
      // items: [{ id: '1', userid: '1', title: 'title 1', body: 'body 1' }]
    }
  },
  created() {
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
  mounted() {
    console.log('@@@ CrudTable -> mounted ')
  },
  methods: {
    log(text) {
      console.log('log +> ' + text)
    },

    sendAction1() {
      console.log('sendAction1')
      this.$emit('action1', 'action1')
    },

    filterGrid(val1, val2) {
      console.log('@@@ filterGrid val1=' + val1 + ' , val2=' + val2)
      return true
    },

    rowSelected(selected) {
      console.log(
        '@@@ selected = ' +
          selected[0].id +
          'showDetail=' +
          selected[0]._showDetails,
      )

      if (selected[0]._showDetails === true) {
        selected[0]._showDetails = false
      } else {
        selected[0]._showDetails = true
      }
      // this.selected = selected
    },

    showDetail() {
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

    showDialog() {
      console.log('showDialog')
    },

    edit() {
      console.log('@@@ edit modal')
      this.$bvModal.show('modal-1')
    },
    clone() {
      console.log('@@@ clone modal')
      // this.$bvModal.show("modal-1");
    },
    toDelete() {
      console.log('@@@ toDelete modal selected=' + this.selected)

      if (this.selected === null || this.selected.length < 1) {
        this.$bvModal.msgBoxOk('pls select a row')
      } else {
        this.$bvModal.msgBoxOk('selected row will be deleted')
      }
    },
  },

  watch: {
    filter: function(value) {
      console.log('@@@ filter ' + value)
    },

    $attrs: function(value) {
      console.log('@@@ watch $attrs ' + value)
    },
  },
}
</script>
