<template>
  <div style="background: white; width: 400px; margin: auto;" id="app">
    <h3>Дерево</h3>
    <TreeBrowser 
      :nodes="root"
      @onClick="nodeWasClicked"
    />
  </div>
</template>

<script>
import TreeBrowser from "./components/TreeBrowser";
// import AddNode from "./components/AddNode";

export default {
  name: "App",
  data() {
    console.log('rootData:', this.$store.getters.getNumbers)
    return {
      root: this.$store.getters.getNumbers,
    };
  },
  components: {
    TreeBrowser
}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
