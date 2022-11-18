import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AmiiboList from "../components/AmiiboList.vue";
import AmiiboSingle from "../components/AmiiboSingle.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/amiibo-list",
      name: "amiiboList",
      component: AmiiboList,
    },
    {
      path: "/amiibo-detail/:tailId",
      name: "amiiboSingle",
      component: AmiiboSingle,
    },
  ],
});

export default router;
