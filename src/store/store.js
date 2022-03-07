import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  mutations: {
    setUser: function (state, payload) {
      state.userName = payload;
      state.logined = true;
    },
    addArticle: function (state, payload) {
      state.articles.push(payload);
    },
    increaseID: function (state) {
      state.ID += 1;
      localStorage.setItem("ID", state.ID);
    },
  },
  getters: {
    getArticles: function (state) {
      return state.articles;
    },
    getLength: function (state) {
      return state.articles.length;
    },
    getUser: function (state) {
      return state.userName;
    },
    getID: function (state) {
      return state.ID;
    },
  },
  state: {
    articles: [],
    logined: false,
    userName: null,
    ID: parseInt(localStorage.getItem("ID"), 10),
  },
});
