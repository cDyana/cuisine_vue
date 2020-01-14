<template>
  <div>
    <div class="us">
      <h3>Mon histoire</h3>
      <div class="image">
        <img :src="'/img/macaron.jpg'" />
      </div>
      <p>
        Pour moi cuisiner c'est avant tout la cuisine de mon enfance, des plats traditionnels de Roumanie, des goûts, des parfums, des épices, les légumes & fruits de notre jardin...
        Petite, j'aimais accompagner ma mère dans ses longues préparations culinaires où elle prenait beaucoup de plaisir à me transmettre son savoir-faire, j'ai beaucoup appris à ses côtés. Elle savait tout réaliser ou presque, dotée d'un véritable talent, d'un plaisir à transmettre et à innover, elle est mon modèle. Aujourd'hui, c'est mon tour de me mettre aux fourneaux et de transmettre mon savoire faire à mon enfant.
        Cuisiner est pour moi un moment de plaisir, où je peux à partir de bases simples, innover en permanence. Pour moi la cuisine est celle du cœur, que l'on partage, la cuisine généreuse et gourmande. Faire tout simplement plaisir à ma famille, mes amis et surtout mon mari ! J'invente et revisite certaines recettes, car j'aime l'innovation, mes recettes vous le verrez sont assez simples mais je l'espère très savoureuses, j'essaie de donner au fil de ces dernières toutes mes petites astuces pour un meilleur résultat.
        A vos tabliers, couteaux, maryses, fouets... Prenez du plaisir ! Je vous souhaite de très belles réalisations et par conséquent de très bonnes dégustations...
      </p>
    </div>
  </div>
</template>

<script>
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
.us {
  width: 100%;
  height: auto;
  margin-top: 150px;
}
p {
  text-align: left;
  margin: 2%;
}
img {
  width: 100%;
  height: 300px;
  object-fit: contain;
}
.image {
  width: 100%;
}
</style>
