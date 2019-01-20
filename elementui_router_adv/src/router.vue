
<script>

import Router from "vue-router"
import PageHome from './components/PageHome.vue'
import PageBar from './components/PageBar.vue'
import PageFoo from './components/PageFoo.vue'

const routes = [
  { path: "/", component: PageHome },
  { path: "/PageHome", component: PageHome },
  { path: "/PageFoo", component: PageFoo },
  { path: "/PageBar", component: PageBar }
];

export default new Router({
  routes: routes
});
</script>