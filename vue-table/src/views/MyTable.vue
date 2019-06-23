
<script>
// @ is an alias to /src

import axios from 'axios'

export default {
  name: 'myTable',
  data () {
    return {
      info: '<pls define>',
      items: [],
      fields: [
        { key: 'Id', label: 'Id', sortable: true },
        { key: 'userId', label: 'UserId', sortable: true },
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
    axios
      .get('data.json')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log('load data')
        this.items = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    rowSelected (items) {
      this.selected = items
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
  }
}
</script>

<template>
  <div class="fluid">
    <b-modal id="modal-delete" title="Delete Entry" cancel-disabled  >
      <p class="my-4">Delete entry id</p>
    </b-modal>

    <b-modal id="modal-1" title="BootstrapVue" @show="showDialog">
      <b-card>
        <b-tabs content-class="mt-3">
          <b-tab title="First" active>
            <p>I'm the first tab</p>
          </b-tab>
          <b-tab title="Second">
            <p>I'm the second tab</p>
          </b-tab>
          <b-tab title="Disabled">
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="2" class="my-2">
        <b-form-group label-cols-sm="3" label="Search" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="2" class="my-2">
        <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>

      <b-col md="2" class="my-2">
        <b-button-toolbar>
          <b-button>Detail</b-button>
          <b-button v-on:click="edit">Edit</b-button>
          <b-button v-on:click="clone">Clone</b-button>
          <b-button v-on:click="toDelete">Delete</b-button>
        </b-button-toolbar>
      </b-col>
    </b-row>

    <b-table
      responsive
      bordered
      striped
      hover
      selectable
      :fields="fields"
      :items="items"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      select-mode="single"
      @row-selected="rowSelected"
    >
      <template slot="actions">
        <b-button class="fullwidth">
          <font-awesome-icon icon="info"/>
        </b-button>

        <b-button class="fullwidth">
          <font-awesome-icon icon="edit"/>
        </b-button>
        <b-button class="fullwidth">
          <font-awesome-icon icon="trash"/>
        </b-button>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6">info {{info}}</b-col>
      <b-col md="6">selected {{selected}}</b-col>
    </b-row>
  </div>
</template>

<style>
.fullwidth {
  /*padding:0;
  width:100%;
  display:inline-block;*/
}

.nameOfTheClass {
  /* padding: 2px !important; */
  /* background-color: coral; */
}
</style>
