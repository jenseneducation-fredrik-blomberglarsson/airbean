<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
  /*   computed: {
    showHamburger() {
      return this.$store.state.showHamburger;
    }
  } */
};
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}

#app {
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
}
</style>
