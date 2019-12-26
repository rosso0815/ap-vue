
import Vue from 'vue'
import Router from 'vue-router'

import MyHome from '@/views/MyHome.vue'
import CrudTable1 from '@/views/CrudTable1.vue'
import CrudTable2 from '@/views/CrudTable2.vue'
import MyAbout from '@/views/MyAbout.vue'
import playPage1 from '@/views/playPage1.vue'
import playPage2 from '@/views/playPage2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: MyHome
    },
    {
      path: '/crudtable1',
      name: 'crudtable1',
      component: CrudTable1
    },
    {
      path: '/crudtable2',
      name: 'crudtable2',
      component: CrudTable2
    },
    {
      path: '/about',
      name: 'about',
      component: MyAbout
    },
    {
      path: '/playPage1',
      name: 'playPage1',
      component: playPage1
    },
    {
      path: '/playPage2',
      name: 'playPage2',
      component: playPage2
    }
  ]
})
