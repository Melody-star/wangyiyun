import {createRouter,createWebHistory } from 'vue-router'

import listView from "../components/listView/listView.vue";
import HomeVue from "../components/Home.vue";

const routes = [
  {
    path: '/',
    name: "HomeVue",
    component: HomeVue,
  },
  {
    path: '/listView',
    name: "歌单列表",
    component: listView,
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;
