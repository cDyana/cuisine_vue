<template>
  <div id="app">
    <myHeader></myHeader>

    <router-view />

    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from "./components/myHeader";
import myFooter from "./components/myFooter";
export default {
  components: {
    myHeader,
    myFooter
  },
  data() {
    return {
      log: true
    };
  },
  created() {
    if (
      localStorage.length === 0 &&
      localStorage.getItem("token") !== undefined
    ) {
      this.log = false;
    } else {
      this.log = true;
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
