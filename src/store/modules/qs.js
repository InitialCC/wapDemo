import API from "/script/http.js";
const state = {}
const types = {

}
const mutations = {

}
const actions = {
  getJson({ commit }, data) {
    return new Promise((resolve, rejects) => {
      API.getJson(data).then(
        res => {
          resolve(res.data);
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
