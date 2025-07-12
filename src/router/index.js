import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    index: 1,
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    index: 2,
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    index: 3,
    path: "/services",
    name: "services",
    component: () => import("@/views/ServicesPage.vue"),
  },
  {
    index: 4,
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
