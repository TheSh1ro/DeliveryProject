import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmesView from '../views/FilmesView.vue'
import PoltronasView from '../views/PoltronasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: FilmesView
    },
    {
      path: '/poltronas',
      name: 'poltronas',
      component: PoltronasView
    }
  ]
})

export default router
