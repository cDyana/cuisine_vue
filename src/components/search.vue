<template>
<div>
  <div class="image">
      <img :src="'/img/legumes.jpg'" />
  </div>
  <hr>
   <h3>TROUVER UNE RECETTE</h3>
    
  <div id="show-recettes">
    
    <input type="text" v-model="search" placeholder="Rechercher une recette" />
    <div
      class="single-recette"
      v-bind:key="recette.id"
      v-for="recette in filteredRecipes"
      @click="redirectToRecipe(recette.id)"
    >
      <div v-for="item in images" :key="item.id">
        <img class="imgRecipe" v-if="item.id == recette.id" :src="item.image" />
      </div>
      <h4>{{recette.nom_recette}}</h4>
    </div>
  </div>
 
  </div>
</template>

<script>
var globalCounter = 0;
export default {
  data() {
    
    return {
      
      blogs: [],
      search: "",
      images: [],
      url1: "http://46.101.151.49/image/ALL"
    };
  },
  created() {
    this.haveRecipes();
    this.getImage();
  },

  computed: {
    filteredRecipes() {
      return this.blogs.filter(recette => {
       // recherche case insensitive
        var nomNormalise = recette.nom_recette.toLowerCase();

        return nomNormalise.match(this.search.toLowerCase());
      });
    }
  },
  methods: {
    redirectToRecipe(id) {
      this.$router.push({ name: "recette", params: { id: id } });
    },
    haveRecipes() {
      this.axios
        .get("http://46.101.151.49/recette/getAll")
        .then(data => {
          this.blogs = data.data;
        })
        .catch(err => {
          console.log(err);
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
h3{
  padding: 1%;
}

#show-recettes {
  max-width: 800px;
  margin: 0 auto 20px auto;
}
.single-recette {
  width: 500px;
  background-color: #f2f2f2;
  margin: 0 auto;
  cursor: pointer;
  border: 0.5px solid #c1c3cd;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
}
.single-recette:hover {
  background-color: #ff6f61;
  color: #fff;
}
input {
  width: 500px;
  height: 30px;
  margin-bottom: 20px;
  margin-bottom: 20px;
  border: 0.5px solid #c1c3cd;
}
::placeholder {
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.2em;
}
h4 {
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 2% 0;
  margin-left: 30px;
  margin-top: 15px;
  text-align: left;
}
.imgRecipe {
  width: 60px;
  height: 60px;
  padding: 6%;
  margin-top: 10px;
  margin-left: 10px;
}
.image {
  width: 100%;
  object-fit: contain;
}
hr{
  border: 1px solid #c1c3cd;
}
</style>