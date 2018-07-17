import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
require("es6-promise").polyfill();
import uitl from "./modules/util.js";
const store = new Vuex.Store({
    modules: {
        uitl: uitl,
    }
})
export default store;