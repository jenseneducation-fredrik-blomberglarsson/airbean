<template>
  <nav id="hamburgerMenu" v-if="showHamburger">
    <img class="close" src="./../assets/graphics/close.svg" alt="close" @click="show" />
    <router-link v-on:click.native="show" to="/menu" class="router-link">Meny</router-link>
    <hr class="hr" />
    <router-link v-on:click.native="show" to="/about" class="router-link">Vårt Kaffe</router-link>
    <hr class="hr" />
    <router-link v-on:click.native="show" to="/status" class="router-link">Orderstatus</router-link>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HamburgerMenu",
  methods: mapActions(["show"]),
  computed: mapGetters(["showHamburger"])
};
</script>

<style scoped>
#hamburgerMenu {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  background: rgb(36, 8, 8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9999;
  cursor: default;
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
  position: fixed;
  top: 1em;
  left: 1em;
  cursor: pointer;
  background: white;
  width: 1.5em;
  padding: 1rem;
  border-radius: 50px;
}
</style>