<template>
<div>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="img/logoM.jpg" />
    <link href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />

    <title>DianaCuisine</title>
  </head>
  <header>
    <div class="title">

      <div class="logo">
        <img src="img/logoM.jpg" alt="logo du site" />
      </div>

      <h1>
        <router-link to="/">DIANA CUISINE</router-link>
      </h1>
    </div>

    <div class="search">
      <router-link to="/search">
        <i class="fas fa-search"></i>
      </router-link>
    </div>

    <section class="reseau">
      <div class="connexion" v-if="log">
        <p>Connexion</p>
        <a class="bonhomme" href="login">
          <i class="far fa-user fa-2x"></i>
        </a>
      </div>
      
      <div class="deconnexion" v-else>
       <p>Bienvenue, {{user.prenom}} <br>Deconnexion</p>
        <a href>
          <i class="far fa-user fa-2x" @click="doLogout"></i>
        </a>
      </div>
      
      <div class="hide">
        <a href="https://fr-fr.facebook.com/">
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
      </div>
      <div class="hide">
        <a href="https://www.pinterest.fr/">
          <i class="fab fa-pinterest-square fa-2x"></i>
        </a>
      </div>
      <div class="hide">
        <a href="https://www.instagram.com/?hl=fr">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
      </div>
      <div class="hide">
        <a href="https://www.youtube.com/?gl=FR&hl=fr">
          <i class="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </section>
    
  </header>

  <myNav></myNav>
 
</div>
</template>

<script>
import myNav from "../components/Nav";
export default {
  name: "myHeader",

  components: {
    myNav
  },
  data() {
    return {
      data: [],
      log: true,
      user: {}
      
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  mounted() {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== undefined
    ) {
      this.log = false;
    } else {
      this.log = true;
    }
  },
  computed: {},

  methods: {
    doLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.log = true;
    }
   
  }
};
</script>




<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html body {
  margin: 0;
  padding: 0;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  background-color: #fff;
}

h1,
h2,
h3 {
  font-family: "Titillium Web", sans-serif;
  font-family: "Open Sans", sans-serif;
  padding: 2% 0;
  color: #47555f;
}
header {
  width: 100%;
  height: 140px;
  background: rgba(52, 52, 53, 0.7);
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}

/* title contient logo et h1 */
.title {
  width: 40%;
  height: 90px;
  padding: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 100px;
}

.logo {
  width: 70px;
  height: 70px;
}

.logo img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 70px 70px 70px 70px;
}

h1 {
  width: 100%;
  font-family: "Nothing You Could Do", cursive;
  font-size: 30px;
  color: #c1c3cd;
  margin-left: 10px;
}
h1 a {
  text-decoration: none;
  color: #ff6f61;
}

h1 a:hover {
  color: #c1c3cd;
}
p{
  color: #ffffff;
  font-weight: 900;
}

/*  search contient input et bouton */
.search {
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 10px;
}
/* id de input */
#site-search {
  width: 40%;
  height: 50px;
  border-radius: 5%;
  border: none;
  margin-right: 10px;
  margin-left: 110px;
  border-bottom: 2px solid #c1c3cd;
}
::placeholder {
  text-align: center;
  color: #c1c3cd;
  font-size: 20px;
}
.fa-search {
  color: #ff6f61;
}
/* le bouton */
.recherche {
  width: 40%;
  height: 50px;
  background-color: #c1c3cd;
  font-size: 15px;
  border: none;
  border-radius: 5% 5% 5% 5%;
  margin-left: 10px;
}
.recherche:hover {
  background-color: #ff6f61;
}

.reseau {
  width: 40%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
}
.reseau .connexion {
  width: 40%;
}
.connexion {
  display: flex;
  flex-direction: row;
}
.reseau p {
  margin-top: 5px;
  margin-right: 5px;
  color: #c0c0c0;
}
.reseau i {
  transition: transform 0.2s;
}
.reseau i:hover {
  transform: scale(1.2);
  color: #ff6f61;
}
.reseau div a i {
  color: #c0c0c0;
}
@media only screen and (max-width: 780px){
header {
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}
}
@media only screen and (max-width: 621px){
header {
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}
}
 @media only screen and (max-width: 600px){
  
   /* title contient logo et h1 */
  .title {
    width: 70%;
    padding: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
    text-align: initial;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .logo img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 70px 70px 70px 70px;
  }

  h1 {
    width: 100%;
    font-family: "Nothing You Could Do", cursive;
    font-size: 30px;
    color: #c1c3cd;
    margin-left: 10px;
  }
  .search {
    width: 20%;
  }

  body #app div header .reseau .connexion{
    margin-top: 0;
    margin-bottom: 15px;
  }
  body #app div .reseau {
    margin-right: 0;
    margin-left: 20px;
  }
  body .reseau p{
    margin-right: 0;
  }
}

@media only screen and (max-width: 400px){
  body #app div .title{
    width: 35%;
    margin-left: 5px;
  }
  .search {
    width: 6%;
  }
  h1 {
    font-size: 15px;
  }
  body #app div header .reseau .connexion{
    width: 40%;
  }
  body #app .bonhomme{
    margin-left: 10px;
  }
}

</style>