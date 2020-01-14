<template>
  <div class="align">
    <div class="todo-item">
      <h3>Liste ingredients de recettes</h3>
      <div>
      <p v-for="item in recupererLS" :key="item.id">
        {{item}}
       <button @click="removeTask" class="del">X</button>
      </p>
      </div>
     </div>
  </div>
</template>
    
<script>
import axios from 'axios';
export default {
  name: "newListe",
   
  data() {
    return {
      listIgredients: null,
      recupererLS: []
    };
  },
  created() {
    this.recupererLS = localStorage.getItem("listIgredients");
      if (this.recupererLS != null || this.recupererLS != undefined) {
        this.recupererLS = JSON.parse(this.recupererLS);
        console.log(this.recupererLS);}
    
  },
  methods: {
    
  removeTask(e) {
    if (e.target.classList.contains('del')) {
        e.target.parentElement.remove()
         localStorage.removeItem("listIgredients")
         localStorage.removeItem("recupererLS")
        //  this.listIgredients = localStorage.removeItem("listIgredients");
        //  this.recupererLS = localStorage.removeItem("recupererLS");
    }
   
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

p{
  width: 100%;
  background-color: #f4f4f4;
  margin: 0 auto;
  padding: 0.5% 1%;
  letter-spacing: 1%;
  font-weight: 400;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.todo-item {
  width: 70%;
  margin-bottom: 2%;
 
}
h3{
  padding: 1%;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  display: block;
  width: 25px;
  height: 25px;
}

.align {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
@media only screen and (max-width: 550px) {
.todo-item {
  width: 95%;
}
}
</style>