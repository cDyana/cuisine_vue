<template>
  <div>
    <liste></liste>
    <newListe></newListe>
  </div>
</template>

<script>
import liste from "../components/listeCourses";
import newListe from"../components/newListe"
export default {
  components: {
    liste,
    newListe
  },
        beforeRouteEnter: (to, from, next) => {
      if (!localStorage.getItem("token")) {
          alert('Merci de créer un compte pour acceder à cette page')
        next("/register")
      } else {
        next()
      }
    },
};
</script>

<style scoped>
</style>