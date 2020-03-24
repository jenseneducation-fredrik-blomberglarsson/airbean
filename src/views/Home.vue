<template>
  <div id="Home" @click="goToAbout">
    <Cart />
    <div id="homeImgContainer">
      <img src="@/assets/graphics/intro-graphic-left.svg" alt="left" />
      <img src="@/assets/graphics/airbean-landing.svg" />
      <img src="@/assets/graphics/intro-graphic-right.svg" alt="left" />
    </div>
  </div>
</template>
<script>
import Cart from "../components/Cart.vue";
export default {
  name: "Home",
  components: {
    Cart
  },
  methods: {
    goToAbout() {
      this.$router.push("/about");
    }
  }
};
</script>
<style scoped>
#Home {
  background-color: rgb(61, 126, 98);
}

#homeLogoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#homeImgContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
