<template>
  <div>
    <footer>
      <div class="titleF">
        <h3>Diana Cuisine</h3>
      </div>
      <div class="about">
        <router-link to="/aboutUs">Notre histoire</router-link>
      </div>
      <back-to-top class="btn-to-top" text="Back to top" @scrolled="myFunction"></back-to-top>

      <div class="follow">
        <p>Suivez-nous :</p>
        <div>
          <a href="https://fr-fr.facebook.com/">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
        </div>
        <div>
          <a href="https://www.pinterest.fr/">
            <i class="fab fa-pinterest-square fa-2x"></i>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/?hl=fr">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/?gl=FR&hl=fr">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
      <p class="logo">
        <img :src="'/img/logoM.jpg'" />
      </p>
      <div class="politique">
        <p>
          <a href="/mentionnes">Mentions légales</a>
        </p>
        <p>
          <a href="/politique">Politique de confidentialité</a>
        </p>
      </div>
      <p class="copyright">Copyright © 2019 - {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
  name: "aboutUs",
  components: { BackToTop },
  methods: {
    redirectToAbout() {
      this.$router.push({ name: "aboutUs" });
    },
    myFunction(){
      
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
}
footer {
  width: 100%;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ff6f61;
  opacity: 0.8;
  bottom: 0px;
  justify-content: space-around;
}
footer h3 {
  font-family: "Nothing You Could Do", cursive;
  display: flex;
  justify-content: center;
  font-size: 60px;
  margin: 1%;
}

.titleF {
  width: 100%;
  height: 5vh;
}

.about {
  width: 100%;
  height: 8vh;
  margin-top: 70px;
  font-size: 20px;
}
.about p:hover {
  color: #c0c0c0;
}
.follow {
  width: 30%;
  height: 10vh;

  display: flex;
}
.follow div {
  margin: 1%;
}
.follow p {
  margin-top: 10px;
  margin-right: 10px;
}
.follow i {
  transition: transform 0.2s;
}
.follow i:hover {
  transform: scale(1.2);
  color: black;
}
.follow div a i {
  color: #c0c0c0;
}
.logo {
  width: 70px;
  height: 70px;
  margin-right: 100px;
  
}
.logo img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  
}

.politique {
  width: 20%;
  height: 8vh;
}
.copyright {
  width: 100%;
  margin-left: 2%;
  margin-top: 50px;
}
a {
  text-decoration: none;
  color: #c0c0c0;
}
@media only screen and (max-width: 2560px){
 .logo {
  width: 70px;
  height: 70px;
  margin-right: 154px;
}
}
@media only screen and (max-width: 1024px){
 .logo {
  width: 70px;
  height: 70px;
  margin-right: 100px;
}
}
@media only screen and (max-width: 600px){
  footer h3{
    font-size: 36px;
  }
  .about{
    margin-top: 0;
    height: initial;
  }
  .politique{
    display: block;
    width: 100%;
  }
  .logo[data-v-df820212] {
    display: block;
    width: 100%;
    margin-right: 0;
  }
  body #app footer .follow{
    width: 100%;
    justify-content: center;
    margin-left: 0;
    height: initial;
  }
  .copyright[data-v-df820212] {
    margin-left: 0; 
}
.btn-to-top{
  margin-top: 10px;
}
}

</style>
