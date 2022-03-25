import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Pedidos from '../components/Pedidos.vue';
import Productos from '../components/Productos.vue';
import Orden from '../components/Orden.vue';
import Inventario from '../components/Inventario.vue';
import Contato from '../components/Contacto.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Productos
    },
    {
      path: '/ver-pedidos',
      name: 'pedidos',
      component: Pedidos
    },
    {
      path: '/pide-aqui',
      name: 'orden',
      component: Orden
    },
    {
      path: '/inventario',
      name: 'inventario',
      component: Inventario
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contato
    }

  ]
})

export default router
