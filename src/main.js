// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import "/script/flexible.js"
import Highlight from '/script/highLight.js'
Vue.use(Highlight)
import base from '/script/base.js'
Vue.use(base);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store,
}).$mount("#app");
// let scrollTop = 0;
document.addEventListener('DOMContentLoaded', function () {
  typeof FastClick === 'function' && FastClick.attach(document.body);
}, false);
router.beforeEach((route, redirect, next) => {
  // if (redirect.path === '/') {
  //   scrollTop = document.getElementById('scrollView').scrollTop;
  // }
  document.title = 'wap-' + route.name;
  next();
});

// if (route.path === '/') {
//   Vue.nextTick(() => {
//       document.getElementById('scrollView').scrollTop = scrollTop;
//   });
// } else {
//   document.getElementById('scrollView').scrollTop = 0;
// }
// });
