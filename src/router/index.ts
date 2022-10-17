import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splittingg
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splittingg
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/monthly-idea",
      name: "monthly-idea",
      // route level code-splittingg
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/MonthlyIdea/index.vue"),
    },
    {
      path: "/monthly-idea/:id",
      name: "monthly-idea-detail",
      // route level code-splittingg
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/MonthlyIdea/_id.vue"),
    },
    {
      path: "/monthly-result",
      name: "monthly-result",
      // route level code-splittingg
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/MonthlyResult/index.vue"),
    },
    {
      path: "/monthly-result/:id",
      name: "monthly-result-detail",
      // route level code-splittingg
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/MonthlyResult/_id.vue"),
    },
  ],
});

export default router;
