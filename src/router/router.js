import Home from "@/pages/Home.vue";
import Favorites from "@/pages/Favorites.vue";
import Basket from "@/pages/Basket.vue";
import Profile from "@/pages/Profile.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/favorites", name: "Favorites", component: Favorites },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/basket", name: "Basket", component: Basket },
];

const router = createRouter({
  linkActiveClass: "border-indigo-500",
  linkExactActiveClass: "border-indigo-700",
  history: createWebHistory(),
  routes,
});

export default router;
