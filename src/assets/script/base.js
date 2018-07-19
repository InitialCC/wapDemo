window.document.addEventListener('touchstart', function (event) {
  /* Do Nothing */
}, false);
import {
  Layout
} from '../../components/layout';

import {
  NavBar
} from '../../components/navbar';

const install = function (Vue) {
  Vue.component(Layout.name, Layout)
  Vue.component(NavBar.name, NavBar)


  // Vue.prototype.$dialog = {
  //     confirm: Confirm,
  //     alert: Alert,
  //     toast: Toast,
  //     notify: Notify,
  //     loading: Loading,
  // };
  Vue.prototype.goPages = function (url, id) {
    let _this = this;
    if (id) {
      _this.$router.push({
        path: url,
        query: {
          id: id
        }
      });
    } else {
      _this.$router.push(url);
    }


  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};

// exports.install = (Vue, options) => {
//     Vue.prototype.goPages = function (url) {
//         let _this = this;
//         _this.$router.push(url);
//     };
// }
