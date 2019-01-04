
<script>

import Router from "vue-router"
import PageHome from './components/PageHome.vue'

//const Home = { template: "<div>Home</div>" }
const Foo = { template: "<div>foo</div>" }
const Bar = { template: "<div>bar</div>" }

const routes = [
  { path: "/", component: PageHome },
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];

export default new Router({
  routes: routes
});
</script>