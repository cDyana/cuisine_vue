<template>
  <div>
    <form v-on:submit="loginSubmit">
      <h3>Connectez-vous</h3>
      <br />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />

      <input class="login" type="submit" value="Login" />
    </form>

    <div>
      <p>Pas de compte?</p>
      <router-link to="/register">
        <button type="submit" class="registerbtn">Cliquez ici pour créer un compte</button>
      </router-link>
    </div>
  </div>
</template>


<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      token: ""
    };
  },
  methods: {
    loginSubmit: function(e) {
      e.preventDefault();
      //The preventDefault() methode empêche son comportement par défaut
      //pour les formulaires par exemple empeche que la page rafrachisse et evite d eperdre les valeurs 
      
      this.axios
        .post("http://46.101.151.49/user/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          var user = VueJwtDecode.decode(res.data["token"]);
          //vuejwtdecode sert a decoder un json webtoken
          var userdata = {
            prenom: user.prenom,
            role: user.role
          };
          console.log(userdata);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(userdata));
          

          if (userdata.role == "admin") {
            this.$router.push({ name: "admin" });
            window.location.reload();
          } else {
            this.$router.push({ name: "home" });
            window.location.reload();
           
          }
        })
        .catch(function(err) {
          alert('Votre indentifiant ou mot de passe est incorrect')
          console.log(err);
        });
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

div {
  margin-top: 160px;
}

.registerbtn {
  width: 150px;
  height: 60px;
  color: white;
  background-color: #c1c3cd;
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
.login {
  width: 300px;
  height: 60px;
  border-radius: 5%;
  color: white;
  background-color: #c1c3cd;
  font-size: 20px;
}
.login:hover {
  background-color: #47555f;
  opacity: 1;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.form {
  margin-top: 50px;
}
input {
  width: 300px;
  height: 20px;
  margin: 1%;
}
</style>

