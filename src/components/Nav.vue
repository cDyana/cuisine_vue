<template>
  <div>
    
    <nav class="navbar shownav">
       <div class="menu-icon">
        <i class="fas fa-bars"></i>
      </div>
            <ul id="myTopnavii" class="topnavi topnavi-plus">
                <li class="accueil-li"><router-link to="/" class="btn-nav">ACCUEIL</router-link></li>
                <li class="fix"><router-link to="/" class="btn-nav">RECETTES</router-link>
            <ul id="myTopnavi" class="topnavi">
                <li v-bind:key="categorie.id" v-for="categorie in categories" class="btn-nav-plus"><router-link :to="{path: categorie.nom_categorie}" class="btn-nav-router" onclick="myFunction1()">{{categorie.nom_categorie}}</router-link></li>
                
            </ul>
                </li>
                <li><router-link to="/articles" class="btn-nav">ACTUALITÉS</router-link></li>
                <li class="border"><router-link to="/liste" class="btn-nav">LISTE DE COURSES</router-link></li>
               
            </ul>
        </nav>
  </div>
</template>

<script>
export default {
  name: "myNav",

  data() {
    return {
        categories: []
    };
  },
  created() {
    let url = "http://46.101.151.49:80/categorie/getAll";
    this.axios
      .get(url)
      .then(response => {
        console.log(response);
        this.categories = response.data;
      })
      .catch(err => {
        console.log("error" + err);
      });
  },
 
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

nav{
  width: 100%;
  font-family: "Abel", sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
  margin-top: 10px;
  position: fixed;
  z-index: 10;
  top: 90px;
  left: 0;
 
}
ul{
    list-style: none;
    color: white;
    background-color: #ff6f61;   
}
ul li {
    float: left;
    width: 24.6%;
    background-color: #ff6f61;
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    margin-right: 5px;
    text-align: center;
    vertical-align: middle;
    align-items: center; 
    font-family: "Nothing You Could Do", cursive;
}

ul li ul li{
  width: 100%;
  
}
ul li a{
    color: white;
    text-decoration: none;
    display: block; 
    transition: all 0.2 s ease-in;
}

ul li:hover{
    background-color: #C1C3CD;   
}

ul li ul li{
    display: none;  
  
}

ul li:hover ul li{
    display: block;   
    transition: all 0.2 s ease-in;
    
}

ul li ul li:hover{
    background-color: #C1C3CD; 
}


ul li:hover ul li{
    display: block;
    background-color: #ff6f61;  
    
}

ul li ul li:hover{
    background-color: #C1C3CD;
    color: white;   
}
@media only screen and (max-width: 2560px){
  nav{
    margin-left: 10px;
  }
}
@media only screen and (max-width: 1440px){
  nav{
    margin-left: 3px;
  }
}
@media only screen and (max-width: 1250px){
ul li {
    float: left;
    width: 24.3%;
    }
}
@media only screen and (max-width: 1024px){
  nav{
   margin-left: 7px;
   z-index: 20;
  }
}

@media only screen and (max-width: 780px){
  nav{
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 0px;
    margin-bottom: 0px;
  }
  .fix{
  width: 330px;
  height: 130px;
}
}

@media only screen and (max-width: 890px){
ul li {
    float: left;
    width: 24%;
    }
}
@media only screen and (max-width: 815px){
ul li {
    float: left;
    width: 23.8%;
    font-size: 15px;
    }
    
}
@media only screen and (max-width: 425px){

}
</style>