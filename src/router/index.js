import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/404.vue";

const routes = [
  { paht: "/", component: Home },
  { paht: "/404", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
