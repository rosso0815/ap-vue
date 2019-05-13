/* eslint-disable no-alert */

<template>
  <div class="container-fluid">
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >I accept the terms and use</b-form-checkbox>
    </b-modal>

    <b-row>
      <b-col>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>
      </b-col>
      <b-col>
        <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label-cols-sm="3" label="Sort direction" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
              <option value="last">Last</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-table
      responsive
      bordered
      striped
      hover
      :fields="fields"
      :items="items"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
    >
      <template slot="actions" slot-scope="row">
        <b-button>
          <font-awesome-icon icon="info"/>
        </b-button>

        <b-button>
          <font-awesome-icon icon="edit"/>
        </b-button>
        <b-button>
          <font-awesome-icon icon="trash"/>
        </b-button>
        <!--
        <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
        >Info modal</b-button>
        <b-button
          size="sm"
          @click="row.toggleDetails"
        >{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>
        -->
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
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "myTable",
  data() {
    return {
      items: [],
      fields: [
        { key: "userId", label: "Id", sortable: true },
        { key: "title", label: "Title", sortable: true },
        { key: "body", label: "Body" },
        { key: "actions", label: "" }
      ],
      totalRows: 100,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      status: "",
      sortOptions: ""
    };
  },
  created() {
    axios
      .get(`data.json`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log("load data");
        this.items = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
