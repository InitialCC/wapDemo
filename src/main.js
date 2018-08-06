// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import store from "./store";
import FastClick from "fastclick";
import VueRouter from 'vue-router';
document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, { passive: false })


import "/script/flexible.js"
// import Highlight from '/script/highLight.js'
// Vue.use(Highlight)
import { install as wapInstall } from '/example/index.js'

import vConsole from 'vconsole'
new vConsole()

Vue.use(wapInstall);

// window.addEventListener('touchmove', e => e.preventDefault())
Vue.config.productionTip = false

const router = new VueRouter({
  routes
});
Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
// let scrollTop = 0;



let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
    console.log(route);
    document.title = 'wap-' + route.name || document.title;
  }
  next();
});
router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});

