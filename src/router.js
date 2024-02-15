import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./components/About.vue"),
  },
  {
    path: "/color",
    name: "Color",
    component: () => import("./components/Color.vue"),
  },
  {
    path: "/draggable",
    name: "Draggable",
    component: () => import("./components/Draggable.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
