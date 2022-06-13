import { createRouter, createWebHistory } from "vue-router";
import MainPanels from "./components/MainPanels.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: MainPanels,
    },
    {
        path: "/HelloWorld",
        component: HelloWorld,
      }
  ],
});
export default router;
