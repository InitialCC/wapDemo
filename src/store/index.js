import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
require("es6-promise").polyfill();
import uitl from "./modules/util.js";
import cart from "./modules/cart.js";
import qs from "./modules/qs.js";
import transition from "./modules/transition.js";
const store = new Vuex.Store({
    modules: {
        uitl: uitl,
        cart: cart,
        qs: qs,
        transition: transition
    }
})
export default store;