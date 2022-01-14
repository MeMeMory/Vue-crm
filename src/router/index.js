import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Registration",
    name: "Registration",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/Categories",
    name: "Categories",
    meta: { layout: "main" },
    component: () => import("../views/Categories.vue"),
  },
  {
    path: "/Detail-record",
    name: "Detail-record",
    meta: { layout: "main" },
    component: () => import("../views/Detail-record.vue"),
  },
  {
    path: "/History",
    name: "History",
    meta: { layout: "main" },
    component: () => import("../views/History.vue"),
  },
  {
    path: "/Planing",
    name: "Planing",
    meta: { layout: "main" },
    component: () => import("../views/Planning.vue"),
  },

  {
    path: "/Profile",
    name: "Profile",
    meta: { layout: "main" },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/Record",
    name: "Record",
    meta: { layout: "main" },
    component: () => import("../views/Record.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
