
<template>
  <div>
    <h2>Page_Home {{count}}</h2>
      <router-link :to="'bar'">Go to Bar</router-link>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  created: function() {
    // `this` points to the vm instance
    console.log("PageHome created path=",this.$route.path);
  },
  mounted: function() {
    // `this` points to the vm instance
    console.log("PageHome mounted path=",this.$route.path);
  }
}
</script>