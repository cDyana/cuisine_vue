<template>
  <div class="admin">
    <admin></admin>
    <dataA fetchUrl="http://46.101.151.49/categorie/getAll" :columns="['id', 'nom_categorie']"></dataA>

    <dataA
      fetchUrl="http://46.101.151.49/article/getAll"
      :columns="['id', 'image', 'titre','description']"></dataA>

    <dataA
      fetchUrl="http://46.101.151.49/recette/getAll"
      :columns="['id', 'nom_recette', 'description','temp_preparation','temp_cuisson','quantite','niveau_difficulte', 'categorieId']"></dataA>

     <dataA
      fetchUrl="http://46.101.151.49/image/ALL"
      :columns="['id', 'image', 'recette_id']"></dataA>

      <dataA
      fetchUrl="http://46.101.151.49/ingredient/getAll"
      :columns="['id', 'quantite', 'equivalence_poids','nom_ingredient','recette_id']"></dataA>

      <dataA
      fetchUrl="http://46.101.151.49/etape_preparation/getAll"
      :columns="['id', 'etape', 'recette_id']"></dataA>

  </div>
</template>

<script>
import admin from "../components/admin";
import dataA from "../components/dataA";

export default {
  name: "MyAdmin",
  components: {
    dataA,
    admin
  },
  data() {
    return {
      categories: [],
      articles: [],
      recipes: [],
      images: [],
      ingredients: [],
      etapes: []
    
    };
  },
  created: function() {
    this.getAll();
    this.haveArticles();
    this.getRecipes();
    this.getImage();
    this.getIngredient()
    this.getEtape()
    

  },
  methods: {
    getAll() {
      let url1 = "http://46.101.151.49/categorie/getAll";
      this.axios
        .get(url1)
        .then(response => {
          console.log(response);
          this.categories = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },

    haveArticles() {
      let url2 = "http://46.101.151.49/article/getAll";
      this.axios
        .get(url2)
        .then(response => {
          console.log(response);
          this.articles = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    getRecipes() {
      let url3 = "http://46.101.151.49/recette/getAll";
      this.axios
        .get(url3)
        .then(response => {
          console.log(response);
          this.recipes = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
      getImage() {
        let url4 = "http://46.101.151.49/image/ALL";
        this.axios
        .get(url4)
        .then(response => {
          console.log(response);
          this.images = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
     getIngredient() {
        let url5 = "http://46.101.151.49/ingredient/getAll";
        this.axios
        .get(url5)
        .then(response => {
          console.log(response);
          this.ingredients = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    getEtape() {
        let url6 = "http://46.101.151.49/etape_preparation/getAll";
        this.axios
        .get(url6)
        .then(response => {
          console.log(response);
          this.etapes = response.data;
        })
        .catch(err => {
          console.log("error" + err);
        });
        }
  },

    beforeRouteEnter: (to, from, next) => {
      var userdata = JSON.parse(localStorage.getItem('user'))
      if (userdata.role == "admin") {
              next()
          } else {
            alert('Vous ne pouvez pas acceder à cette page')
        next("/")
          }
    },
};
</script>


<style scoped>
.admin {
  width: 90%;
  margin-left: 5%;
  margin-left: 5%;
}
</style>
