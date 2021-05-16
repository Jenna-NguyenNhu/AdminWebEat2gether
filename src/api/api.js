import axios from "axios";
import { API_URL } from "./../constants";

export var Api = {
  get: function (url) {
    return axios.get(`${API_URL}/${url}`);
  },
  getById: function (url, id) {
    return axios.get(`${API_URL}/${url}/${id}`);
  },
  post: function (url, body = {}) {
    return axios.post(`${API_URL}/${url}`, body);
  },
  put: function (url, id, body = {}) {
    return axios.put(`${API_URL}/${url}/${id}`, body);
  },
  delete: function (url, id) {
    return axios.delete(`${API_URL}/${url}/${id}`);
  },
};
