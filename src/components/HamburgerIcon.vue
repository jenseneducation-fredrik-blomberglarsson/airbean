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
export default {
  name: "HamburgerIcon",
  components: {
    HamburgerMenu
  },

  methods: {
    show() {
      this.$store.commit("show");
    }
  }
};
</script>

<style scoped>
.hamburgerIcon {
  display: flex;
}
.HamburgerImage {
  cursor: pointer;
  margin-left: 5%;
  margin-top: 5%;
  background: white;
  padding: 1rem;
  border-radius: 20px;
}
</style>