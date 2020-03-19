<template>
  <div id="Home">
    <div id="homeImgContainer">
      <homeImgRight id="homeImgRight" />
      <div id="homeLogoContainer">
        <homeLogo id="homeLogo" />
      </div>
      <homeImgLeft id="homeImgLeft" />
    </div>
  </div>
</template>
<script>
import homeLogo from "../assets/graphics/airbean-landing.svg";
import homeImgRight from "../assets/graphics/intro-graphic-left.svg";
import homeImgLeft from "../assets/graphics/intro-graphic-right.svg";

export default {
  name: "Home",
  components: {
    homeLogo,
    homeImgRight,
    homeImgLeft
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

#homeLogo {
  position: absolute;
}

#homeImgContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#homeImgRight {
  display: flex;
  justify-content: flex-end;
}

#homeImgLeft {
  display: flex;
  justify-content: flex-start;
}
</style>
