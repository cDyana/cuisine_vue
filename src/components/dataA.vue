<template>
  <div class="data-table">
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column" class="table-head">{{column}}</th>
        </tr>
      </thead>

      <tbody>
        <tr class v-if="tableData.length ===0">
          <td class="lead text-center" :colspan="columns.length + 1">No data found</td>
        </tr>
        <tr v-for="data in tableData" :key="data.id" class="m-datatable__row" v-else>
          <td v-for="value in data" :key="value.id">{{value}}</td>
          <td>
            <button v-on:click="fndelete(data.id)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "dataA",
  props: {
    fetchUrl: { type: String, required: true },
    columns: { type: Array, required: true }
  },
  data() {
    return {
      tableData: {}
    };
  },
  created() {
    return this.fetchData(this.fetchUrl);
  },
  methods: {
    fetchData(url) {
      this.axios.get(url).then(res => {
        this.tableData = res.data;
      });
    },
    fndelete: function(id) {
      var url = this.fetchUrl.split("/");
      //split-methode that splits a string into an array
      var lastSegment = url.pop() || url.pop();
      //La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément
      url = this.fetchUrl.replace(lastSegment, "delete/" + id);
      console.log(url);
      this.axios.delete(url).then(response => {
        alert(response.data);
        this.fetchData(this.fetchUrl);
        console.log(response.data);
      });
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
th {
  height: 50px;
  background-color: grey;
}
td {
  height: 50px;
  vertical-align: center;
}
button {
  background-color: #ff6162;
}
</style>