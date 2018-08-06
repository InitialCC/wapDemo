
const state = {
    transitionName: "",
    direction: "forward"
}
const types = {
    GET_TRANS: "GET_TRANS"
}
const mutations = {
    UPDATE_DIRECTION(state, direction) {
        state.direction = direction
    }
}
const actions = {
    //ES5参数解构 
    // getTrans({ commit }, to, from) {
    //     const toDepth = to.path.split("/").length;
    //     const fromDepth = from.path.split("/").length;
    //     state.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    // }
}
const getters = {
    transitionName: state => state.transitionName,
    direction: state => state.direction
}
export default {
    state,
    actions,
    mutations,
    getters
}