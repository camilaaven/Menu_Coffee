import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/ComHome.vue'; // Ruta al componente Home

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
