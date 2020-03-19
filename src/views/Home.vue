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
  components: {}
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
