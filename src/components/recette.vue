<template>
  <div>
    <section class="displayRecipe">
      <div class="recipe">
        
        <section class="row">
        <div class="image" v-for="item in images" :key="item.id">
          <img :src="`${item.image}`" />
        </div>

        <div class="column">
        <h3>{{recettes.nom_recette}}</h3>
        <h4>{{recettes.description}}</h4>
        <div class="printer">
          <a href="" onClick="window.print();return false">
            Imprimer
            <img :src="'/img/printer.svg'" />
          </a>
          </div>
        </div>
        </section>


        <div class="details">
          <p>
            Pour :
            <input type="text" v-model="recettes.quantite" />
          </p>
          <p>
            Temps de preparation :
            <strong>{{recettes.temp_preparation}}</strong>
          </p>
          <p>
            Temps de cuisson :
            <strong>{{recettes.temp_cuisson}}</strong>
          </p>
          <p>
            Niveau de difficulté:
            <strong>{{recettes.niveau_difficulte}}</strong>
          </p>
        </div>

        <div class="ingr-steps">
          <div class="ingredient">
            <span>
              <strong>
                <p class="bot">Ingredients:</p>
              </strong>
            </span>
            <div v-for="item in ingredients" :key="item.id">
              <p>
                {{item.quantite}} {{item.equivalence_poids}} {{item.nom_ingredient}}
                <input
                  type="checkbox"
                  class="test"
                />
              </p>
            </div>
            <button @click="sendToLC($event)" class="send">Envoyer dans la liste de courses</button>
          </div>

          <div class="steps">
            <span>
              <strong>
                <p class="bot">Etape de preparation:</p>
              </strong>
            </span>
            <div v-for="item in etapes" :key="item.id">
              <ul>
                <li>{{item.etape}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "recette",

  data() {
    return {
      recettes: {},
      images: {},
      ingredients: {},
      etapes: {},
      listIgredients: [],
    
    };
  },
  created: function() {
    this.getRecette();
  },

  methods: {
    getRecette() {
      let id = this.$route.params.id;
      // console.log('this.$route.params',this.$route.params.id)
      let test = "http://46.101.151.49/recette/toute/" + id;
      console.log("test" + test);
      this.axios
        .get(test)
        .then(response => {
          console.log(response.data);
          this.recettes = response.data;
          this.images = response.data.images;
          console.log("this.images", this.images);
          this.ingredients = response.data.ingredients;
          this.etapes = response.data.etape_preparations;
          // console.log(this.etapes)
        })
        .catch(err => {
          console.log("error" + err);
        });
    },
    sendToLC(e) {
      let test = document.getElementsByClassName("test");
      for (let i = 0; i < test.length; i++) {
        // console.log(test[i])
        if (test[i].checked) {
          const ingredient = test[i].parentElement.innerText;
          this.listIgredients.push(ingredient);

          console.log(this.listIgredients);
        }
      }
      let essai =
        e.target.parentElement.children[2].children[0].lastElementChild.value;

        var lastStorage = JSON.parse(localStorage.getItem("listIgredients"));
        var newStorage = lastStorage;
        console.log("Last Storage = ");
        console.log(lastStorage);
        //verifier si l'item qui vient d'etre rajouté existe deja dans l'array
        if (lastStorage != null)
        {
        for (var i in this.listIgredients)
        {
          console.log('item in last storage = '+lastStorage[i]);
          var itExists = false;
          for (var j in  lastStorage)
          {
            console.log('item in new array  = '+this.listIgredients[i]);
            
            if (this.listIgredients[i] == lastStorage[j])
              itExists = true;

          }
          if (!itExists)
          {
            newStorage.push(this.listIgredients[i]);
          }
        }
        }

        console.log("NewStorage");
        console.log(newStorage);
        if (!newStorage)
          newStorage = this.listIgredients;

      localStorage.setItem("listIgredients",JSON.stringify(newStorage)
      );
      
      this.$router.push({ path: "/liste" });

      //    console.log(this.checked)
      //    console.log(this.checked)
      //   console.log(e.target.parentElement.children[0])
      //    this.$router.push({name:'liste',params: {ingredients}})
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
.row{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.column{
  width: 45%;
  display: flex;
 flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 5%;
  text-align: left;
  
}
.displayRecipe {
  width: 100%;
  height: 800px;
  margin: 0 auto;
  margin-top: 130px;
}
.send {
  margin-top: 20px;
  color: #fff;
  background-color: #ff6f61;
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 400;
  border-radius: 5px;
  padding: 1%;
}
.send:hover {
  background-color: #f2f2f2;
  color: black;
}

.image {
  width: 45%;
  height: auto;
  object-fit: contain;
  margin-bottom: 5px;
  text-align: right;
}
.image img{
  width: 300px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  margin-top: 20px;
}
.recipe {
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
}

.ingredient {
  width: 45%;
  height: auto;
  margin-top: 20px;
  text-align: right;
}
.steps {
  width: 45%;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
}
.ingr-steps {
  width: 100%;
  display: flex;
}
.bot {
  margin-bottom: 10px;
}

.recipe h3{
  width: 100%;
  letter-spacing: 1.2px;
  font-weight: 500;
  font-size: 1.5em;
}
.recipe h4 {
  width: 100%;
}
.printer {
  width: 100%;
  height: auto;
  margin-top: 10px;
  
}
.printer a {
  margin-left: 1%;
  display: block;
  width: 70px;
}
.printer img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
a {
  text-decoration: none;
  color: #c0c0c0;
}
.details {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 1% 0;
  color: #ff6f61;
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 400;
}
.details strong{
  color: #000;
}
ul li {
  width: 100%;
  list-style: none;
}
ol {
  display: flex;
  flex-direction: column;
}
ol li {
  width: 100%;
  list-style: none;
}
input {
  text-align: center;
}
</style>