<template>
  <div id="menu">
    <img id="headerImg" src="@/assets/graphics/graphics-header.svg" />
    <HamburgerIcon class="hamburgerImage" />
    <CartIcon />
    <h1>Meny</h1>
    <div id="menuItemWrapper">
      <MenuItem class="menuItems" v-for="item in menu" :key="item.id" :item="item" />
    </div>

    <img id="footerImg" src="@/assets/graphics/graphics-footer.svg" />
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
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 228, 231);
}

.menuItems {
  z-index: 2;
}

#menuItemWrapper {
  margin-bottom: 5em;
}

#headerImg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

#footerImg {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

h1 {
  font-size: 3rem;
  text-align: center;
  margin-top: 2.2em;
}

.hamburgerImage {
  z-index: 1;
}
</style>