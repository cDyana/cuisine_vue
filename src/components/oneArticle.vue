<template>
  <div class="oneArticle">
    <div class="myImage">
      <img class="imgArticle" :src="`${articles.image}`" />
    </div>
    <div class="articles">
      <h3>{{articles.titre}}</h3>
      <p>{{articles.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "oneArticle",

  data() {
    return {
      articles: {}
    };
  },
  created: function() {
    this.getArticle();
  },

  methods: {
    getArticle() {
      let id = this.$route.params.id;
      console.log("this.$route.params", this.$route.params.id);
      let test = "http://46.101.151.49/article/Find/" + id;
      console.log("test" + test);
      this.axios
        .get(test)
        .then(response => {
          console.log(response.data);
          this.articles = response.data;
          console.log("this.articles", this.articles);
        })
        .catch(err => {
          console.log("error" + err);
        });
    }
  }
};
</script>
<style scoped>
.oneArticle {
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.myImage {
  margin-top: 40px;
}
.imgArticle {
  width: 300px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  padding: 4%;
}
.articles {
  width: 45%;
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
}
p {
  text-align: left;
}
</style>