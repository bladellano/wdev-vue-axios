import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Videos from "@/pages/Videos.vue";
import Sobre from "@/pages/Sobre.vue";
import Contato from "@/pages/Contato.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/videos", component: Videos },
    { path: "/sobre", component: Sobre },
    { path: "/Contato", component: Contato },
  ];
  
const history = createWebHistory();

const router = createRouter({
history,
routes,
});
  
export default router;