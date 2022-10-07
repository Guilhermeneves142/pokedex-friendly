import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/PokedexView.vue"),
  },
  {
    name: "Pokedex",
    path: "/pokedex",
    component: () => import("@/views/PokedexView.vue"),
  },
  {
    name: "Games",
    path: "/games",
    component: () => import("@/views/PokedexView.vue"),
  },
  {
    name: "Berries",
    path: "/berries",
    component: () => import("@/views/PokedexView.vue"),
  },
  {
    name: "Pokemon",
    path: "/pokemon",
    component: () => import("@/views/PokedexView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
