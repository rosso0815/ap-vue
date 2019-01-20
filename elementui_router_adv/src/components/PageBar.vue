
<template>
  <div>
    <el-header>
      <el-menu
        default-active="2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        width="99%"
      >
        <el-menu-item index="1">
          <i class="el-icon-message"></i>
          <router-link :to="'PageHome'">Home</router-link>
        </el-menu-item>

        <el-menu-item index="2">
          <router-link :to="'PageBar'">Bar</router-link>
        </el-menu-item>

        <el-menu-item index="3">
          <router-link :to="'PageFoo'">Foo</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-main>
        <div>
          <h2>Page_Bar</h2>
        </div>
      </el-main>
    </el-container>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      count: 0
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