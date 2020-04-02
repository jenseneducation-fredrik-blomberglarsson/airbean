<template>
  <nav class="cartIcon">
    <img
      class="cartImage"
      src="./../assets/graphics/bag.svg"
      @click="onIconClick"
    />
    <span :style="{ opacity: cart.length > 0 ? 1 : 0 }">{{ cart.length }}</span>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["cart"]),
  methods: {
    ...mapActions(["toggleBag"]),
    onIconClick() {
      this.toggleBag();
    }
  }
};
</script>

<style lang="scss" scoped>
.cartImage {
  cursor: pointer;
  background: black;
  padding: 1.5rem;
  border-radius: 50px;
}

.cartIcon {
  position: fixed;
  top: 1em;
  right: 1em;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

span {
  margin-left: -1em;
  color: white;
  line-height: 25px;
  height: 25px;
  width: 25px;
  display: table-cell;
  text-align: center;
  border-radius: 50%;
  background: rgb(235, 94, 0);
}
</style>
