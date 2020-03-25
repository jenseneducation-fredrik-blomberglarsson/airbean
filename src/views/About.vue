<template>
  <div id="About">
    <section class="content">
      <div class="imgHeader"></div>
      <HamburgerIcon />
      <h1>Vårt Kaffe</h1>
      <strong>
        Pumpkin spice mug, barista cup, sit
        <br />macchiato, kopi-luwak, doppio, grounds
        <br />dripper, crema, strong whipped, variety
        <br />extra iced id lungo half and half mazagran.
        <br />Pumpkin spice.
      </strong>
      <p>
        Que dark fair trade, spoon decaffeinated, barista
        <br />wings whipped, as rich aftertaste, con panna milk
        <br />black, arabica white rich beans single shot extra
        <br />affogato. So affogato macchiato sit extraction
        <br />instant grinder seasonal organic, turkish single shot,
        <br />single origin, and robusta strong to go so dripper.
        <br />Viennese froth, grounds caramelization skinny
        <br />aromatic cup kopi-luwak, fair trade flavour,
        <br />frappuccino medium, café au lait flavour cultivar ut
        <br />bar instant kopi-luwak.
      </p>
      <p>
        Roast id macchiato, single shot siphon mazagran
        <br />milk fair trade est aroma a half and half and, so,
        <br />galão iced to go, whipped as cream cup pumpkin
        <br />spice iced. At extra, rich grinder, brewed to go,
        <br />steamed half and half at, that, percolator macchiato
        <br />trifecta and body as arabica dripper. In galão black
        <br />java milk sit trifecta, robusta, acerbic café au lait
        <br />instant shop latte. Seasonal bar shop filter aroma id,
        <br />crema, affogato viennese cultivar aftertaste,
        <br />seasonal, percolator cream black, galão flavour, milk
        <br />aromatic turkish skinny crema.
      </p>
    </section>
    <footer>
      <img class="imgAvatar" src="@/assets/graphics/eva-cortado.jpg" alt="avatarImg" />
      <h2 class="avatarName">Eva Cortado</h2>
      <h4 class="avatarText">VD & Grundare</h4>
    </footer>
  </div>
</template>
<script>
import HamburgerIcon from "@/components/HamburgerIcon";
export default {
  name: "About",
  components: { HamburgerIcon }
};
</script>
<style scoped>
#About {
  height: 150vh;
  width: 450px;
  margin: 0 auto;
  background-color: rgb(241, 228, 231);
  display: flex;
  flex-direction: column;
  background-image: url(../assets/graphics/graphics-header.svg),
    url(../assets/graphics/graphics-footer.svg);
  background-size: 100%, 100%;
  background-repeat: no-repeat, no-repeat;
  background-position: top, bottom;
}

h1,
p,
strong {
  margin-left: 15%;
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}
h1 {
  margin-top: 15%;
  font-size: 3rem;
}
p {
  font-size: 1rem;
}

footer {
  text-align: center;
}

.imgAvatar {
  margin-top: 5%;
  border-radius: 50px;
}
</style>