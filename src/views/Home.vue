<template>
  <div id="Home">
    <img id="left" src="@/assets/graphics/intro-graphic-left.svg" alt="left" />
    <img id="center" src="@/assets/graphics/airbean-landing.svg" />
    <img id="right" src="@/assets/graphics/intro-graphic-right.svg" alt="left" />
  </div>
</template>
<script>
export default {
  name: "Home",
  mounted() {
    setTimeout(() => {
      this.$router.replace("/menu");
    }, 2500);
  }
};
</script>
<style scoped>
#Home {
  background-color: rgb(61, 126, 98);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#left {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
}
#right {
  position: absolute;
  top: 10;
  right: 0;
  bottom: 0;
  height: 100%;
}
#center {
  width: 14em;
}
</style>
