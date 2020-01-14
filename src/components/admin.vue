<template>
  <div class="admin">
    <form class="categorie" v-on:submit="addCategory">
      <h3>Ajouter une categorie</h3>
      <input type="text" placeholder="nom categorie" v-model="categorie.nom_categorie" />
      <input type="submit" value="Add categorie" />
    </form>

    <form class="article" v-on:submit="addArticle">
      <h3>Ajouter un article</h3>
      <input type="text" placeholder="image-src" v-model="article.image" />
      <input type="text" placeholder="titre" v-model="article.titre" />
      <input type="text" placeholder="description" v-model="article.description" />
      <input type="submit" value="Add article" />
    </form>

    <form class="recette" v-on:submit="addRecipe">
      <h3>Ajouter une recette</h3>
      <input type="text" placeholder="nom_recette" v-model="recipe.nom_recette" />
      <input type="text" placeholder="description" v-model="recipe.description" />
      <input type="text" placeholder="temp_preparation" v-model="recipe.temp_preparation" />
      <input type="text" placeholder="temp_cuisson" v-model="recipe.temp_cuisson" />
      <input type="text" placeholder="quantite" v-model="recipe.quantite" />
      <input type="text" placeholder="niveau_difficulte" v-model="recipe.niveau_difficulte" />
      <input type="submit" value="Add recipe" />
    </form>

    <form class="image" v-on:submit="addImage">
         <h3>Ajouter une image</h3>
        <input type="text" placeholder="image src" v-model="image.image" />
        <input type="submit" value="Add image" />
      
   </form>

    <form class="ingredient" v-on:submit="addIngredient">
        <h3>Ajouter les ingredients</h3>
        <input type="text" placeholder="quantite" v-model="ingredient.quantite" />
        <input type="text" placeholder="unite" v-model="ingredient.equivalence_poids" />
        <input type="text" placeholder="nom_ingredient" v-model="ingredient.nom_ingredient" />
        <input type="submit" value="Add ingredient" />

    </form> 

   <form class="etape" v-on:submit="addEtape">
        <h3>Ajouter les etapes de preparation</h3>
        <input type="text" placeholder="etape" v-model="etape.etape" />
        <input type="submit" value="Add etape de preparation" />
      
      </form>  

   
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      categorie: {},
      categories: [],
      article: {},
      articles: [],
      recipe: {},
      recipes: [],
      image: {},
      images: [],
      ingredient: {},
      ingredients: [],
      etape: {},
      etapes: []

   
    };
  },
  created: function() {
  },
  methods: {
    addCategory() {
      let url = "http://46.101.151.49/categorie/add";
      this.axios
        .post(url, this.categorie)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    
    addArticle() {
      let url2 = "http://46.101.151.49/article/add";
      this.axios
        .post(url2, this.article)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    addRecipe() {
      let url4 = "http://46.101.151.49/add/recipe";
      this.axios
        .get(url4)
        .then(response => {
          console.log(response);
          this.articles = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
 
    addImage() {
      let url6 = "http://46.101.151.49/image/add";
      this.axios
        .post(url6, this.image)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
      addIngredient() {
      let url8 = "http://46.101.151.49/ingredient/add";
      this.axios
        .post(url8, this.ingredient)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
      addEtape() {
      let url10 = "http://46.101.151.49/etape_preparation/add";
      this.axios
        .post(url10, this.etape)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    
    }
}
</script>

<style  scoped>
.admin {
  width: 90%;
  margin-top: 170px;
  margin-left: 5%;
  margin-left: 5%;
}
form {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
}
input[type="submit"] {
  background-color: #ff6162;
}
input[type="text"] {
  margin: 1% 0;
}
</style>