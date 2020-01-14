<template>
  <div>
   
    <div class="container">
      <form @submit.prevent="registerSubmit">
        <h1>Créer un compte</h1>
        <hr />

        <input type="text" placeholder="Votre nom" name="nom" v-model="user.nom" required />

        <input type="text" placeholder="Votre prenom" name="prenom" v-model="user.prenom" required />

        <input type="email" id="email" name="email" placeholder="ex: mail@monmail.com" v-model="user.email" required/>

        <input type="text" placeholder="Votre pseudo" name="pseudo" v-model="user.username" required/>

        <input type="password" placeholder="Votre mot de passe" name="psw" v-model="user.password" required/>

        <hr />
        <p>
          Avec la création de ce compte vous acceptez notre
          <a href="#">Politique de confidentialité</a>.
        </p>

        <button type="submit" class="registerbtn">Créer un compte</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      user: {},
     
    };
  },
  methods: {
    registerSubmit() {
      let url = "http://46.101.151.49/user/register";
      console.log(this.user)
        this.axios.post(url, this.user)
          .then(response => {

            console.log(response);
            this.$router.push({ path: "/login" });
            alert("Compte crée avec succes, connectez-vous");
          })
          .catch(err => {
            console.log("error" + err);
          });
    },
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

/* Add padding to containers */
.container {
  width: 50%;
  height: 770px;
  background-color: white;
  margin: 0 auto;
}
form {
  margin-top: 160px;
  border: 1px solid #c1c3cd;
}

/* Full-width input fields */
input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  text-align: center;
}

input[type="text"]:focus,
input[type="password"]:focus input[type="email"]:focus {
  background-color: #c1c3cd;
  outline: none;
}

hr {
  border: 1px solid #c1c3cd;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #c1c3cd;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 20px;
}

.registerbtn:hover {
  background-color: #47555f;
  opacity: 1;
}

/* Add a blue text color to links */
a {
  background-color: #fff;
}
</style>

    
