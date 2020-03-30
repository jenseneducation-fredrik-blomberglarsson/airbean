<template>
  <nav class="hamburgerIcon">
    <img
      class="HamburgerImage"
      src="./../assets/graphics/navicon.svg"
      alt="hamburgerImage"
      @click="show"
    />
    <HamburgerMenu />
  </nav>
</template>

<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import { mapActions } from "vuex";
export default {
  name: "HamburgerIcon",
  components: {
    HamburgerMenu
  },
  methods: mapActions(["show"])
};
</script>

<style scoped>
.HamburgerImage {
  cursor: pointer;
  margin-left: 5%;
  margin-top: 5%;
  background: white;
  padding: 1rem;
  border-radius: 20px;
}
</style>