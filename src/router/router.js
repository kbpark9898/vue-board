import Vue from "vue";
import VueRouter from "vue-router";
import BoardList from "../components/BoardList";
import BoardWriter from "../components/BoardWriter";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: BoardList },
  { path: "/write", component: BoardWriter },
];

export const router = new VueRouter({ routes });
