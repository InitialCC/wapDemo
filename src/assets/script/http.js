import axios from "axios";
import qs from "qs";

// const baseUrl = "http://192.168.0.101:8000/";
const baseUrl = "http://127.0.0.1:8000/";
const other = {
  getJson: "static/data.json"
}
// var getObj = function (params) {
//     let secret_code = "pER3xj8ZhYDCAkCgCBLQHXPTFPwCKmXs";
//     let timestamp = Math.round(new Date() / 1000);
//     let token = localStorage.L_TOKEN;
//     let str = "";
//     params.token = token;
//     str = params.token + secret_code + timestamp;
//     let sign = md5(str);
//     params.sign = sign;
//     params.timestamp = timestamp;
//     return params;
//   };
function apiGet(url, data = {}, id) {
  if (id !== "" && typeof id !== "undefined") {
    return axios.get(
      baseUrl + url + "?id=" + id,
      (data = {
        params: data
      })
    );
  } else {
    return axios.get(
      baseUrl + url,
      (data = {
        params: data
      })
    );
  }
}

function apiPost(url, data = {}) {
  // let resultObj = getObj(data);
  let params = qs.stringify(data);
  return axios.post(baseUrl + url, params);
}

export default {
  getJson: data => apiGet(other.getJson, data), // 测试GET接口
}
// getMaterialsById: (data, id) => apiGet(Books.Materials, data, id),
