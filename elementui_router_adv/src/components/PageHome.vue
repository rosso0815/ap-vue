
<template>
 
    <div>
      <el-header>
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          width="99%"
        >
          <el-menu-item index="1">
            <router-link :to="'PageHome'">Home</router-link>
          </el-menu-item>

          <el-menu-item index="2">
            <router-link :to="'PageBar'">Bar</router-link>
          </el-menu-item>

          <el-menu-item index="3">
            <router-link :to="'foo'">Foo</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
       <el-container>
      <el-main>
        <div>
          <h2>Page_Home count = {{count}}</h2>
        </div>
        <div>
          <el-row>
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
          </el-row>
        </div>
        <div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="Date" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Name" width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>Name: {{ scope.row.name }}</p>
                  <p>Addr: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="Operations">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
        </el-container>
    </div>

</template>


<script>
export default {
  data: function() {
    return {
      count: 0,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created: function() {
    // `this` points to the vm instance
    console.log("PageHome created path=", this.$route.path);
  },
  mounted: function() {
    // `this` points to the vm instance
    console.log("PageHome mounted path=", this.$route.path);
  }
};
</script>