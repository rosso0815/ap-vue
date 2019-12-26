<template>
  <div>
    <CrudTable
      v-bind:title="title"
      :items="items"
      v-bind:fields="fields"
      >

      <template v-slot:header>
        <h1>{{title}}</h1>
      </template>

      <template v-slot:header2>
        <h1>{{title}}</h1>
      </template>

      <template v-bind:user="title" v-slot:cell(title)="data">
        Data
      </template>

      <template v-slot:cell(userid)="row">
        userid={{ row.item.userid }}
      </template>

    </CrudTable>
  </div>
</template>

<script>
// import axios from 'axios'
import CrudTable from '@/components/CrudTable.vue'

export default {
  name: 'CrudTable2',
  components: {
    CrudTable
  },
  data () {
    return {
      debugOn: true,
      title: 'CRUDTable2',
      // filter: null,
      items: [
        { 'id': '1', 'userid': '1', 'title': 'title 1', 'body': 'body 1' },
        { 'id': '2', 'userid': '2', 'title': 'title 2', 'body': 'body 2' },
        { 'id': '3', 'userid': '3', 'title': 'title 3', 'body': 'body 3' },
        { 'id': '4', 'userid': '4', 'title': 'title 4', 'body': 'body 4' },
        { 'id': '5', 'userid': '5', 'title': 'title 5', 'body': 'body 5' },
        { 'id': '6', 'userid': '6', 'title': 'title 6', 'body': 'body 6' }
      ],
      fields: [
        { key: 'id', label: 'Id', sortable: true },
        { key: 'userid', label: 'UserId', sortable: true },
        { key: 'title', label: 'Title', sortable: true },
        { key: 'body', label: 'Body' }
      ],
      totalRows: 100,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      status: '',
      sortOptions: '',
      selected: [],
      boxOne: '',
      boxTwo: ''
    }
  },
  created () {
    console.log('@@@ CrudTable2 created')
    // axios
    //   .get('data.json')
    //   .then(response => {
    //     // JSON responses are automatically parsed.
    //     console.log('load data')
    //     this.items = response.data
    //   })
    //   .catch(e => {
    //     this.errors.push(e)
    //   })
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
      console.log('@@@ selected = ' + selected[0].id)

      this.selected = selected
    },

    showDetail () {
      console.log('@@@ showDetail')
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
    }
  }
}
</script>
