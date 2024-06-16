import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoCharacter from '../views/Info/InfoCharacter.vue'
import PersHq from '../views/Menus/PersHq.vue'
import ComicsHq from '../views/Menus/ComicsHq.vue'
import CreatorsHq from '../views/Menus/CreatorsHq.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Rota Default Login
      path: '/',
      name: 'home',
      component: HomeView
    },
 
    {
      // Rota Personagens Info
      path: '/character/:id',
      name: 'CharacterDetail',
      component: InfoCharacter,
      props: true,
    },

    {
      // Rota Personagens
      path: '/PersHq',
      name: 'PersHq',
      component: PersHq,
      props: true,
    },

    {
     // Rota Comics  
      path: '/ComicsHq',
      name: 'ComicsHq',
      component: ComicsHq,
      props: true, 
    },

    // Rota Creators
    {
      path: '/CreatorsHq',
      name: 'CreatorsHq',
      component: CreatorsHq,
      props: true, 
    },
    
  ]
})

export default router
