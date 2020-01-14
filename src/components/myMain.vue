<template>
<div>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="shortcut icon" href="/src/logoD.jpg" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css?family=Nothing+You+Could+Do" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans|Titillium+Web&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    
  </head>
 
  <main>
    <section class="slider">
      <div class="banner">
        <img :src="'/img/tarte.jpg'" />
        <div class="backgr">
      <h2>Ça donne envie? cliquez pour voir les recettes...</h2>
      </div>
      </div>
      
    </section>

    <section class="recette ctn2">
      <section class="allrecipes load-more-container" >
        <div
          class="accueil" 
          v-bind:key="recette.id"
          v-for="recette in recettes"
          @click="redirectToRecipe(recette.id)"
        >
          <div class="accueil-div" v-for="item in images" :key="item.id">
            <img class="imgRecipe" v-if="item.recetteId == recette.id" :src="item.image" />
          </div>
          <h3>{{recette.nom_recette}}</h3>
          <h4>{{recette.description}}</h4>
          
        </div>
        <!-- <a href="#" id="load">Load More</a> -->
     
      </section>
    </section>
  </main>
</div>
</template>

<script>
export default {
  name: "accueil",

  data() {
    return {
      recettes: [],
      images: [],
      categories: [],
      url: "http://46.101.151.49/recette/getAll",
      url1: "http://46.101.151.49/image/ALL",
    };
  },
  created: function() {
    this.getRecette(), this.getImage();

    $(function(){
    //var n = $("div").length;
    $(recettes).slice(0, 5).show(); // select the first ten
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $("div:hidden").slice(0, 5).show(); // select next 10 hidden divs and show them
        if($("div:hidden").length == 0){ // check if any hidden divs still exist
            alert("Il y a plus d'articles"); // alert if there are none left
        }
    });
});
  },
  methods: {
    getRecette() {
      this.axios
        .get(this.url)
        .then(response => {
          console.log(response.data);
          this.recettes = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    
    getImage() {
      this.axios
        .get(this.url1)
        .then(response => {
          console.log(response.data);
          this.images = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    redirectToRecipe(id) {
      this.$router.push({ name: "recette", params: { id: id } });
    },
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
.accueil {
  width: 350px;
  cursor: pointer;
  margin-bottom: 20px;
}
.imgRecipe {
  width: 350px;
  height: 300px;
  border-radius: 5% 5% 0 0;
  display: block;
}

main {
  width: 100%;
}
.allrecipes {
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 25px auto;
}
.allrecipes h3 {
  letter-spacing: 1.2px;
  font-weight: 500;
  padding: 3% 0;
}
.allrecipes h4 {
  letter-spacing: 1.2px;
  font-weight: 500;
  padding: 2% 0;
}
.slider {
  width: 100%;
  margin: 0 auto;
}
.banner{
  width: 100%;
  position: relative;
}
.backgr{
  width: 100%;
  position: absolute;
  bottom: 10px;
}

.slider img{
  width: 100%;
  object-fit: contain;
}

/* Section Recettes */

.slider h2 {
  width: 100%;
  text-align: center;
  letter-spacing: 1.5px;
  color: #ffffff;
  background: rgba(52, 52, 53, 0.2);
  
}
.recette {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#load{
  width: 100%;
  height: 60px;
  color: white;
  background-color: #c1c3cd;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.9;
  font-size: 20px;
}

#load:hover{
background-color: #47555f;
}
 a{
   list-style: none;
   text-decoration: none;
   color: #ffffff;
 }

@media only screen and (max-width: 700px){
h2{
  font-size: 15px;
}
}

@media only screen and (max-width: 600px){

  main[data-v-dfb75dd6] {
    padding-top: 130px;
  }
  .imgRecipe[data-v-dfb75dd6] {
    width: 100%;
  }
}
</style>
