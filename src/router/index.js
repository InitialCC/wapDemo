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

import qsContent from '@/pages/Test/content.vue';

import demoContent from '@/pages/Demo/content.vue';
//


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'main',
    component: Index,
    children: [{
      path: '/Test',
      name: "test",
      component: TestIndex,
      children: [
        {
          path: 'content',
          component: qsContent,
          name: "qsContent",
        }
      ]
    },
    {
      path: '/Demo',
      name: 'demo',
      component: DemoIndex,
      children: [
        {
          path: '/Demo/content',
          component: demoContent,
          name: "demoContent",
        }
      ]
    },
    {
      path: '/Base',
      name: 'Base',
      component: BaseIndex,
      children: [{
        path: 'Async',
        name: 'Async',
        component: Async,
      }]
    }
    ]
  },
    // {
    //   path: '/Test/content',
    //   component: qsContent,
    //   name: "qsContent",
    // },
    // {
    //   path: '/Demo/content',
    //   component: demoContent,
    //   name: "demoContent",
    // }


  ]
})
