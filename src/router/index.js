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

import qsContent from '@/pages/Test/qsContent.vue';

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
      component: TestIndex
    },
    {
      path: '/Demo',
      name: 'demo',
      component: DemoIndex
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
  {
    path: '/Test/qsContent',
    component: qsContent,
    name: "qsContent",
  }


  ]
})
