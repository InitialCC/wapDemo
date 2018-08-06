
// import {
//     Layout
// } from '/components/layout';

// import {
//     NavBar
// } from '/components/navbar';
// import {
//     Footer
// } from '/components/footer';
// import {
//     Scroll
// } from '/components/scroll';
// import {
//     Loading
// } from '/components/loading';
import Cell from '/components/cell';
import Toast from '/components/toast';

const install = function (Vue) {
    // Vue.component(Layout.name, Layout)
    // Vue.component(NavBar.name, NavBar)
    // Vue.component(Footer.name, Footer)
    // Vue.component(Scroll.name, Scroll)
    // Vue.component(Loading.name, Loading)
    Vue.component(Cell.name, Cell)

    // Vue.prototype.$dialog = {
    //     confirm: Confirm,
    //     alert: Alert,
    //     toast: Toast,
    //     notify: Notify,
    //     loading: Loading,
    // };
    Vue.$toast = Vue.prototype.$toast = Toast;
    //全局注册toast
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

    Vue.prototype.getRouter = function (to, from) {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        return toDepth < fromDepth ? "slide-right" : "slide-left";
    };
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    Toast
}
// console.log(Toast)
// export {
//     install,
//     Cell,
//     Toast
// };

  // exports.install = (Vue, options) => {
  //     Vue.prototype.goPages = function (url) {
  //         let _this = this;
  //         _this.$router.push(url);
  //     };
  // }
