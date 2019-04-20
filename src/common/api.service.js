import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "./jwt.service"
import {
  cfg
} from "@/common/config";

export const API = {

  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = cfg.API_URL;
  },

  setAuthHeader() {
    Vue.axios
      .defaults
      .headers
      .common['Authorization'] = `Bearer ${JwtService.getAuth().access_token}`
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] API ${error}`);
    });
  },

  get(resource) {
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`[RWV] API ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update(resource, id, params) {
    return Vue.axios.put(`${resource}/${id}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export const RideService = {
  get() {
    return API.get('rides');
  }
}

export const AuthService = {
  getUser() {
    return API.get('user');
  },
  login(payload) {
    return API.post('auth', payload);
  },
  register(payload) {
    return API.post('user', payload);
  },
  deleteUser(userid, payload) {
    return API.delete('auth', userid, payload);
  },
  update(userid, payload) {
    return API.update('auth', userid, payload);
  },
  resetPwd(payload) {
    return API.put('user/password', payload);
  },
  confirmPwd(payload) {
    return API.post('user/password', payload);
  },

  setAuth() {
    API.setAuthHeader();
  },

  async setAuthAsync() {
    API.setAuthHeader();
  }
}

export default {
  API,
  RideService,
  AuthService
}