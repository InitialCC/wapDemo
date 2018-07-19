import API from "/script/http.js";
const state = {}
const types = {

}
const mutations = {

}
const actions = {
  getQs({ commit }, data) {
    return new Promise((resolve, rejects) => {
      API.getQs(data).then(
        res => {
          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    })
  }
}
export default {
  state,
  actions,
  mutations
}
