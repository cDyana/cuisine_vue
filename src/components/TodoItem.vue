<template>
  <div class="align">
    <div class="todo-item">
      <div>
        <p>
          {{todo.quantite_liste}} {{todo.equivalence_poids_liste}} {{todo.nom_ingredient_liste}}
          <button @click="$emit('del-todo', todo.id)" class="del">X</button>
        </p>
      </div>
      
    </div>
  </div>
</template>
    
<script>
export default {
  name: "TodoItem",

  props: ["todo"],
  data() {
    return {};
  },
  created() {
    
  },
  methods: {
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
p {
  width: 100%;
  background-color: #f4f4f4;
  margin: 0 auto;
  padding: 0.5% 1%;
  letter-spacing: 1%;
  font-weight: 400;
  text-align: left;
}
.todo-item {
  width: 70%;
}
.del {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
.align {
  display: flex;
  flex-wrap: wrap;
 justify-content: center;
}
@media only screen and (max-width: 550px) {
.todo-item {
  width: 100%;
}
.align{
  width: 100%;
}
}


</style>