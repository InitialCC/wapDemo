import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
//Demo
import DemoIndex from '@/pages/Demo/index.vue'
import Pull from '@/pages/Demo/pull.vue'
import Async from '@/pages/Base/async.vue'
//

//base
import BaseIndex from '@/pages/Base/index.vue'
//
//测试
import TestIndex from '@/pages/Test/index.vue'

import t1 from '@/pages/Test/t1.vue';
import t2 from '@/pages/Test/t2.vue';
import t3 from '@/pages/Test/t3.vue';
import t4 from '@/pages/Test/t4.vue';
import t5 from '@/pages/Test/t5.vue';
//


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Index,
      children: [
        {
          path: '/Test',
          name: "test",
          component: TestIndex,
          children: [{
            path: '1',
            component: t1
          },
          {
            path: '2',
            component: t2
          },
          {
            path: '3',
            component: t3
          },
          {
            path: '4',
            component: t4
          },
          {
            path: '5',
            component: t5
          }
          ]
        }, {
          path: '/Demo',
          name: 'demo',
          component: DemoIndex,
          children: [
            {
              path: 'Pull',
              name: 'pull',
              component: Pull,
            }
          ]
        },
        {
          path: '/Base',
          name: 'Base',
          component: BaseIndex,
          children: [
            {
              path: 'Async',
              name: 'Async',
              component: Async,
            }
          ]
        }
      ]
    },

  ]
})
