
// import Router from 'vue-router'

const Index = resolve => require(['@/example/index'], resolve);

// const Index = require('/example/index.vue');
//Demo
// import DemoIndex from '@/pages/Demo/index.vue'
// import Pull from '@/pages/Demo/pull/pull.vue'
// import Vuex from '@/pages/Demo/vuex/vuex.vue'
// import Async from '@/pages/Base/async.vue'
//

// //base
// import BaseIndex from '@/pages/Base/index.vue'
// //
// //测试
// import TestIndex from '@/pages/Test/index.vue'
// import DemoIndex from '@/pages/Demo/index.vue'
// import qsContent from '@/pages/Test/content/index.vue';
import NavConfig from '/example/nav.config.json';

const regRoute = (config) => {
  let route = [];
  config.map(nav => {
    nav.list.map(page => {

      route.push({
        name: page.name,
        path: page.path,
        component: resolve => require([`/example/pages${page.path}`], resolve),
        // component: require(`@/pages${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    })
  })
  return { route, navs: config }
}

const routes = regRoute(NavConfig);

routes.route.push({
  path: '/',
  // component: require('@/example/index'),
  component: Index,
  name: "Demo",
  meta: {
  }
})
export const navs = routes.navs;

export default routes.route;
// export default new Router({
//   routes: [{
//     path: '/',
//     name: 'main',
//     component: Index,
//     children: [{
//       path: '/Test',
//       name: "test",
//       component: TestIndex,
//       children: [
//         {
//           path: 'content',
//           component: qsContent,
//           name: "qsContent",
//         }
//       ]
//     },
//     {
//       path: '/Demo',
//       name: 'demo',
//       component: DemoIndex,
//       children: [
//         {
//           path: '/Demo/vuex',
//           component: Vuex,
//           name: "vuex",
//         },
//         {
//           path: '/Demo/pull',
//           component: Pull,
//           name: "pull",
//         }
//       ]
//     },
//     {
//       path: '/Base',
//       name: 'Base',
//       component: BaseIndex,
//       children: [{
//         path: 'Async',
//         name: 'Async',
//         component: Async,
//       }]
//     }
//     ]
//   }, { path: "*", redirect: '/Demo' },
//   ]
// })
