import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoCharacter from '../views/InfoCharacter.vue'
import PersHq from '../views/PersHq.vue'
import ComicsHq from '../views/ComicsHq.vue'
import CreatorsHq from '../views/CreatorsHq.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/character/:id',
      name: 'CharacterDetail',
      component: InfoCharacter,
      props: true,
    },
    {
      path: '/PersHq',
      name: 'PersHq',
      component: PersHq,
      props: true,
    },
    {
      path: '/ComicsHq',
      name: 'ComicsHq',
      component: ComicsHq,
      props: true, 
    },
    {
      path: '/CreatorsHq',
      name: 'CreatorsHq',
      component: CreatorsHq,
      props: true, 
    },
    
  ]
})

export default router
