<template>
  <div>
   

    <div class="image">
      <img :src="'/img/vegetables.jpg'" />
      <h2>VEGETARIAN</h2>
    </div>
    <div v-bind:key="categorie.id" v-for="categorie in categories"></div>
    <div class="all">
   
    <section @click="redirectToRecipe">
      <div
        class="vegetarian"
        v-bind:key="recette.id"
        v-for="recette in recettes"
        @click="redirectToRecipe(recette.id)"
      >
        <div v-for="item in images" :key="item.id">
          <img class="imgRecipe" v-if="item.recetteId == recette.id" :src="item.image" />
        </div>
        <h3>{{recette.nom_recette}}</h3>
        <h4>{{recette.description}}</h4>
      </div>
    </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "vegetarian",
  components: {
 
  },
  data() {
    return {
      recettes: [],
      images: [],
      categories: [],
      url: "http://46.101.151.49/categorie/FindByName/Vegetarian",
      url1: "http://46.101.151.49/image/ALL"
    };
  },
  created: function() {
    this.getRecette(), this.getImage();
  },
  methods: {
    getRecette() {
      this.axios
        .get(this.url)
        .then(response => {
          console.log(response.data.categorie.recettes);
          this.recettes = response.data.categorie.recettes;
          this.categories = response.data.categories;
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

.all{
  display: flex;
  margin-top: 30px;
}
section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  cursor: pointer;
}

h3 {
  width: 100%;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 1.5px;
  padding: 2% 0;
  
}
.vegetarian{
  width: 300px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
}
.image {
  width: 100%;
  height: 300px;
  object-fit: contain;
  position: relative;
  
}
h2{
  width: 100%;
  position: absolute;
  text-align: center;
  color: #ffffff;
  background: rgba(52, 52, 53, 0.2);
  bottom: 0px;
}
img {
  width: 100%;
  height: 300px;
  
}
.imgRecipe {
  width: 300px;
  height: 300px;
  border-radius: 5% 5% 0 0;
}

@media only screen and (max-width: 780px){
  .image {
    height: initial;
  }
  img {
    height: initial;
  }
  .vegetarian {
    width: 48%;
  }
  .vegetarian .imgRecipe {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
@media only screen and (max-width: 600px){
  section {
    flex-direction: column;
  }
  .vegetarian {
    width: 100%;
  }
   h3{
    margin-top: 30px;
  }
}
@media only screen and (max-width: 400px){
  section {
    flex-direction: column;
  }
  .vegetarian {
    width: 100%;
  }
   h3{
    margin-top: 50px;
  }
}
</style>