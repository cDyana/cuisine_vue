<template>
  <div>
    <div class="image">
      <img :src="'/img/news.jpg'" />
      <h2>Actualités</h2>
    </div>

    <div class="myArticles">
      <div
        class="articles"
        v-bind:key="article.id"
        v-for="article in articles"
        @click="sendToArticle(article.id)"
      >
        <div class="myImage">
          <img class="imgArticle" :src="`${article.image}`" />
        </div>
        <h3>{{article.titre}}</h3>
      </div>
    </div>
    <!-- <a href="#" id="load">Load More</a> -->
   
  </div>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      articles: []
    };
  },
  created() {
    let url = "http://46.101.151.49/article/getAll";
    this.axios
      .get(url)
      .then(response => {
        console.log(response);
        this.articles = response.data;
      })
      .catch(err => {
        console.log("error" + err);
      });

    $(function(){
    $("div").slice(0, 10).show(); // select the first ten
    $("#load").click(function(e){ // click event for load more
        e.preventDefault();
        $("div:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
        if($("div:hidden").length == 0){ // check if any hidden divs still exist
            alert("Il y a plus d'articles"); // alert if there are none left
        }
    });
});
  },

  methods: {
    sendToArticle(id) {
      this.$router.push({ name: "oneArticle", params: { id: id } });
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
.imgArticle {
  width: 300px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 5% 5% 0 0;
}
.myArticles {
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  cursor: pointer;
  /* display: none; */
}
.articles {
  width: 300px;
  height: auto;
  border: 0.5px solid #c0c0c0;
  border-radius: 5%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.image {
  width: 100%;
  position: relative;
}
h2{
  width: 100%;
  position: absolute;
  bottom: 4px;
  text-align: center;
  color: #ffffff;
  background: rgba(52, 52, 53, 0.2);
}
.image img {
  width: 100%;
  object-fit: contain;
}

@media only screen and (max-width: 768px){
  h2{
    position: absolute;
    z-index: 15;
    background: rgba(52, 52, 53, 0.2);
  }
}
@media only screen and (max-width: 600px){
   h3{
    margin-top: 30px;
  }
}
@media only screen and (max-width: 425px){
   h2{
    position: absolute;
    z-index: 15;
    background: rgba(52, 52, 53, 0.2);
    top: 100px;
  }
  .myArticles{
    margin-top: 30px;
  }
}
@media only screen and (max-width: 320px){
.myArticles{
    margin-top: 50px;
  }
}
</style>