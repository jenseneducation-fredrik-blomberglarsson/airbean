<template>
  <nav id="hamburgerMenu" v-if="show">
    <img class="close" src="./../assets/graphics/close.svg" alt="close" @click="close" />
    <router-link v-on:click.native="close" to="/menu" class="router-link">Meny</router-link>
    <hr class="hr" />
    <router-link v-on:click.native="close" to="/about" class="router-link">Vårt Kaffe</router-link>
    <hr class="hr" />
    <router-link v-on:click.native="close" to="/status" class="router-link">Orderstatus</router-link>
  </nav>
</template>

<script>
export default {
  name: "HamburgerMenu",

  methods: {
    close() {
      this.$store.commit("show");
    }
  },
  computed: {
    show() {
      return this.$store.state.showHamburger;
    }
  }
};
</script>

<style scoped>
#hamburgerMenu {
  height: 150vh;
  width: 450px;
  position: absolute;
  padding: 0;
  background: rgb(36, 8, 8);
}
.router-link {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  text-decoration: none;
  color: white;
}
.hr {
  width: 20%;
}
.close {
  margin-bottom: 60%;
  cursor: pointer;
  margin-left: 5%;
  margin-top: 5%;
  width: 12%;
  border-radius: 10px;
  background-color: white;
}
</style>