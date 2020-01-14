import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
//Service Workers est un script qui tourne en arrière-plan et qui permet
// a  l'application de fonctioner en ligne, mais aussi hors ligne
import axios from 'axios'
//permet de faire la passerelle entre le client(=navigateur) et le serveur
import VueAxios from 'vue-axios';
import BackToTop from 'vue-backtotop'

Vue.use(VueAxios, axios)
Vue.use(BackToTop)

Vue.config.productionTip = false
//Vue.config est un objet contenant les configurations globales de Vue Par défaut : false
//pour ne plus avoir al notification de production au demarrage de vue

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
//permet de créer une nouvelle instance de vue qui va utiliser les fichier dans les accolades