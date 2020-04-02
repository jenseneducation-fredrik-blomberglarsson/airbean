<template>
  <div id="menu">
    <img src="@/assets/graphics/graphics-header.svg" />
    <HamburgerButton class="hamburgerButton" />
    <CartIcon class="cartButton" />
    <h1>Meny</h1>

    <MenuItem class="menuItems" v-for="item in menu" :key="item.id" :item="item" />

    <img
      style="background-color:rgb(241, 228, 231); margin-top:auto;"
      src="@/assets/graphics/graphics-footer.svg"
    />
    <Cart v-if="showCart" />
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import HamburgerButton from "@/components/HamburgerButton";
import CartIcon from "@/components/CartIcon";
import MenuItem from "@/components/MenuItem";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Menu",
  components: { HamburgerButton, CartIcon, MenuItem, Cart },
  computed: mapGetters(["menu", "showCart"]),
  methods: {
    ...mapActions(["fetchMenu"])
  },
  mounted() {
    this.fetchMenu();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Serif:400,700|Work+Sans:300,600&display=swap");
#menu {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 228, 231);
}

h1 {
  font-family: "PT Serif", serif;
  font-size: 3rem;
  text-align: center;
}

.cartButton {
  z-index: 1;
}

.hamburgerButton {
  z-index: 2;
}
</style>