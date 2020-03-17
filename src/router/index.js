import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import residential from "../views/servRes.vue";
import error from "../views/error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/services/residential",
    name: "residential",
    component: residential
  },
  {
    path: "*",
    name: "error",
    component: error
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
