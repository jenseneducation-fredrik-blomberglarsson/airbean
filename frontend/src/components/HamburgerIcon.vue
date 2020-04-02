<template>
  <nav class="hamburgerIcon">
    <img
      class="hamburgerImage"
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
.hamburgerIcon {
  position: fixed;
  top: 1em;
  left: 1em;
  cursor: pointer;
  background: white;
  width: 1.5em;
  padding: 1rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
}
</style>