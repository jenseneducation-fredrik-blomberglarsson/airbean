<template>
  <div id="menu">
    <HamburgerIcon class="hamburgerImage" />
    <CartIcon class="cartIcon" />
    <h1>Meny</h1>
    <MenuItem class="menuItems" v-for="item in menu" :key="item.id" :item="item" />
    <Cart v-if="showCart" />
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import HamburgerIcon from "@/components/HamburgerIcon";
import CartIcon from "@/components/CartIcon";
import MenuItem from "@/components/MenuItem";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Menu",
  components: { HamburgerIcon, CartIcon, MenuItem, Cart },
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
#menu {
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

h1 {
  margin-top: 30%;
  font-size: 3rem;
  text-align: center;
}

.cartIcon {
  margin-left: 80%;
  margin-top: -13%;
}
</style>