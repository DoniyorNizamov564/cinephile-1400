import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import Home from './pages/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, name: 'home', alias: '/cinephile-1400'},
    { path: '/movie', component: ()=> import('./pages/Films.vue'), name: 'movie'},
    { path: '/movie/:id', component: ()=> import('./pages/FilmId.vue'), name: 'movieId'},
    { path: '/tv', component: ()=> import('./pages/Serials.vue'), name: 'tv'},
    { path: '/tv/:id', component: ()=> import('./pages/SerialId.vue'), name: 'tvId'},
    { path: '/search', component: ()=> import('./pages/Search.vue'), name: 'search'},
  ],
  linkActiveClass: 'active',
  scrollBehavior(){
    return { top: 0 }
  }
})
export default router;