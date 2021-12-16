import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/roster/:id",
    name: "Roster",
    component: () => import(/* webpackChunkName: "about" */ "../views/Roster.vue"),
  },
  {
    path: "/player/:id",
    name: "Player",
    component: () => import(/* webpackChunkName: "about" */ "../views/Player.vue"),
  },

  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../views/Calendar.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
