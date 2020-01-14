<template>
  <div class="td">
     <h3>Liste ingredients</h3>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

    
<script>
import TodoItem from "../components/TodoItem";


export default {
  name: "Todos",
  components: {
    TodoItem,
    
  
  },
  props: ["todos"]
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
.td {
  width: 100%;
  margin-bottom: 20px;
}
</style>