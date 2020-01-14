<template>
<div>
  <div id="app">
    <div class="image">
      <img :src="'/img/liste.jpg'" />
      <h2>Liste de courses</h2>
    </div>
    <Header />
  </div>
<div class="dt">
    <AddTodo>{{quantite_liste}} {{equivalence_poids_liste}} {{nom_ingredient_liste}}</AddTodo>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /></div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "app",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      quantite_liste: "",
      equivalence_poids_liste: "",
      nom_ingredient_liste: ""
    };
  },

  methods: {
    deleteTodo(id) {
      axios
        .delete(`http://46.101.151.49/liste_courses/delete/${id}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => {
          console.log("error" + err);
        });
    }
  },

  created() {
    axios
      .get("http://46.101.151.49/liste_courses/getAll")
      .then(res => (this.todos = res.data))
      .catch(err => {
        console.log("error" + err);
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html body {
  margin: 0;
  padding: 0;
}
.dt{
  width: 100%;
}
.image {
  width: 100%;
  height: 250px;
  position: relative;
}
h2{
  width: 100%;
  position: absolute;
  text-align: center;
  color: #ffffff;
  background: rgba(52, 52, 53, 0.2);
  bottom: -24px;
}
img {
  width: 100%;
  object-fit: contain;
}
@media only screen and (max-width: 1060px){
.image {
  width: 100%;
  height: 200px;
  position: relative;
}
}
@media only screen and (max-width: 780px){
  .image {
  width: 100%;
  height: 150px;
  position: relative;
}
}
@media only screen and (max-width: 550px){
  .image img{
  height: initial;
}
.dt{
  width: 95%;
  margin: 0 auto;
}
}
</style>