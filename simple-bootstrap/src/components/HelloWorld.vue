<template>
  <div class="hello">
    <h3>name: {{ name }}</h3>
    <b-alert show>Default Alert</b-alert>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data() {
    return {
      name: null
    };
  },

  mounted() {
    console.log("@@@ created");
    var _this = this
    var t = {type:"Fiat", name:"500", color:"white"};
    axios
    .get("static/myconfig.json")
    .then(function(response) {
      console.log("response.data.name=", response.data.name)
      _this.name = response.data.name
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
