<template>
  <header class="header">
    <p>Imprimer la liste de courses</p>
    <div class="printer">
      <a href="" onClick="window.print();return false">
        <img :src="'/img/printer.svg'" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style scoped>
html body {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  color: #47555f;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.header a {
  color: #fff;
}
p{
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.printer {
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  
}
.printer a {
  color: #47555f;
  text-decoration: none;
 
}
.printer img {
  width: 35px;
  object-fit: contain;
}
@media only screen and (max-width: 550px){

h2{
  display: none;
}
.printer{
 display: none;
}
.header {
  width: 100%;
  height: 0px;
}
}
</style>