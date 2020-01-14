import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import Recette from './views/recette.vue'
import Articles from './views/articles.vue'
import ListeCourses from './views/liste.vue'
import Accueil from './views/myMain.vue'
import Categorie from './views/categorie.vue'
import Register from './views/register.vue'
import Entrées from './views/entrees.vue'
import Desserts from './views/desserts.vue'
import Plats from './views/plats.vue'
import Vegetarian from './views/vegetarian.vue'
import Vegan from './views/vegan.vue'
import Search from './views/search.vue'
import AboutUs from './views/aboutUs.vue'
import Admin from './views/admin.vue'
import MyArticle from './views/oneArticle.vue'
import Mentionnes from './views/mentionnes.vue'
import Politique from './views/politique.vue'

Vue.use(Router)
//ROUTER est un module qui permet de generer les routes des vues

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //on va créer une nouvelle instance de router,mode historique qui permet de naviguer entre les pages
  //precedentes et enlever le # dans url
  //PROCESS ENV sert a definir la base de l'url(nom de domaine ou local host)
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/recette',
      name: 'recette',
      component: Recette
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
    },
    {
      path: '/liste',
      name: 'liste',
      component: ListeCourses
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/categorie',
      name: 'categorie',
      component: Categorie
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/entrees',
      name: 'entrees',
      component: Entrées
    },
    {
      path: '/desserts',
      name: 'desserts',
      component: Desserts
    },
    {
      path: '/plats',
      name: 'plats',
      component: Plats
    },
    {
      path: '/vegetarian',
      name: 'vegetarian',
      component: Vegetarian
    },
    {
      path: '/vegan',
      name: 'vegan',
      component: Vegan
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/oneArticle',
      name: 'oneArticle',
      component: MyArticle
    },
    {
      path: '/mentionnes',
      name: 'mentionnes',
      component: Mentionnes
    },
    {
      path: '/politique',
      name: 'politique',
      component: Politique
    },



  ]
})