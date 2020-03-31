<template>
  <div id="Home">
    <div id="homeImgContainer">
      <img src="@/assets/graphics/intro-graphic-left.svg" alt="left" />
      <img src="@/assets/graphics/airbean-landing.svg" />
      <img src="@/assets/graphics/intro-graphic-right.svg" alt="left" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  mounted() {
    setTimeout(() => {
      this.$router.push("/menu");
    }, 2500);
  }
};
</script>
<style scoped>
#Home {
  display: flex;
  background-color: rgb(61, 126, 98);
}

#homeImgContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(61, 126, 98);
}
</style>
