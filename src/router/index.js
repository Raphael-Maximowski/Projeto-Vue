import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoCharacter from '../views/Info/InfoCharacter.vue'
import PersHq from '../views/Menus/PersHq.vue'
import ComicsHq from '../views/Menus/ComicsHq.vue'
import CreatorsHq from '../views/Menus/CreatorsHq.vue'
import InfoComic from '../views/Info/InfoComic.vue'
import EventsHq from '../views/Menus/EventsHq.vue'
import InfoEvents from '../views/Info/InfoEvents.vue'
import SeriesHq from '../views/Menus/SeriesHq.vue'
import InfoSeries from '../views/Info/InfoSeries.vue'
import InfoCreators from '../views/Info/InfoCreators.vue'
import FavoritoHq from '../views/FavoritoHq.vue'

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
    {
      // Rota Comics info
      path: '/comics/:id',
      name: 'ComicDetail',
      component: InfoComic,
      props: true,
    },
    {
      // Rota Creators info
      path: '/creators/:id',
      name: 'CreatorDetail',
      component: InfoCreators,
      props: true,
    },
     // Rota Events
     {
      path: '/EventsHq',
      name: 'EventsHq',
      component: EventsHq,
      props: true, 
    },
    {
      // Rota Events info
      path: '/events/:id',
      name: 'EventsDetail',
      component: InfoEvents,
      props: true,
    },
    // Rota Series
    {
      path: '/SeriesHq',
      name: 'SeriesHq',
      component: SeriesHq,
      props: true, 
    },
    {
      // Rota Series info
      path: '/series/:id',
      name: 'SeriesDetail',
      component: InfoSeries,
      props: true,
    },
    {
      path: '/FavoritoHq',
      name: 'Favorito',
      component: FavoritoHq,
    }
    
    
  ]
})

export default router
