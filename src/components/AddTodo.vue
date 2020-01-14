<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        type="number"
        min="1"
        v-model="newTodo.quantite_liste"
        name="quantite"
        placeholder="Ajouter la quantite.."
        required
      />
      <select name="equivalence_poids" id v-model="newTodo.equivalence_poids_liste">
        <option value="" disabled selected>Choisir l'unite</option>
        <option value="gr">gr</option>
        <option value="pcs">pcs</option>
        <option value="gr">kg</option>
        <option value="ml">ml</option>
        <option value="bouquet">bouquet</option>
        <option value="botte">botte</option>
        <option value="conserve">conserve</option>
        <option value="boite">boite</option>
        <option value="paquet">paquet</option>
        <option value="bouteille">bouteille</option>
      </select>

      <input
        type="text"
        v-model="newTodo.nom_ingredient_liste"
        name="nom_ingredient"
        placeholder="Ajouter l'ingredient.."
        required
      />
      <input type="submit" value="Valider" class="btn" />
    </form>
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddTodo",
  data() {
    return {
      newTodo: {}
    };
  },
  created() {
     
  },
  methods: {
    addTodo(newTodo) {
      axios.post("http://46.101.151.49/liste_courses/add/liste", this.newTodo)
        .then(res => (this.newTodo = res.data))
        
        .catch(err => {
          console.log("error" + err);
        });
        window.location.reload();
       
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
form {
  display: flex;
  margin-bottom: 20px;
}
input[type="number"] {
  width: 30%;
  height: 40px;
  padding: 5px;
}
input[type="text"] {
  width: 30%;
  height: 40px;
  padding: 5px;
}
select {
  width: 30%;
  height: 40px;
  padding: 5px;
}
::placeholder {
  font-size: 1.2em;
  letter-spacing: 1px;
}

input[type="submit"] {
  width: 30%;
  height: 40px;
  font-size: 1.2em;
  letter-spacing: 1px;
}
.btn {
  width: 30%;
  height: 40px;
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background-color: #ff6f61;
}
@media only screen and (max-width: 780px){
  form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-self: center;
}
input[type="number"] {
  width: 70%;
  height: 30px;
  padding: 5px;
}
input[type="text"] {
  width: 70%;
  height: 30px;
  padding: 5px;
}
select {
  width: 70%;
  height: 30px;
  padding: 5px;
}
::placeholder {
  font-size: 1.2em;
  letter-spacing: 1px;
}

input[type="submit"] {
  width: 70%;
  height: 30px;
  font-size: 1em;
  letter-spacing: 1px;
}
.btn {
  width: 70%;
  height: 30px;
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
}
@media only screen and (max-width: 550px){
 ::placeholder {
  font-size: 1em;
}
input[type="number"] {
  width: 95%;
  
}
input[type="text"] {
 width: 95%;
  
}
select {
  width: 95%;
  
}
input[type="submit"] {
  width: 95%;
  
}

}
@media only screen and (max-width: 425px){
input[type="number"] {
  width: 95%;
  height: 30px;
  padding: 5px;
}
input[type="text"] {
  width: 95%;
  height: 30px;
  padding: 5px;
}
select {
  width: 95%;
  height: 30px;
  padding: 5px;
}
::placeholder {
  font-size: 1.2em;
  letter-spacing: 1px;
}

input[type="submit"] {
  width: 95%;
  height: 30px;
  font-size: 1em;
  letter-spacing: 1px;
}
.btn {
  width: 95%;
  height: 30px;
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
}

</style>