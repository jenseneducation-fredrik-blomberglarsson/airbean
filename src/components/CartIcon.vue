<template>
  <nav class="cartIcon">
    <img class="cartImage" src="./../assets/graphics/bag.svg" @click="showBag" />
    <div class="iconTextWrapper">
      <span>{{cart.length}}</span>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["cart"]),
  methods: mapActions(["showBag"])
};
</script>

<style lang="scss" scoped>
.cartImage {
  z-index: 200;
  cursor: pointer;
  background: black;
  padding: 1.5rem;
  border-radius: 30px;
}

.iconTextWrapper {
  display: flex;
  justify-content: center;
  margin-top: -85%;
  margin-left: 15%;
}

span {
  color: white;
  line-height: 25px;
  height: 25px;
  width: 25px;
  display: table-cell;
  text-align: center;
  border-radius: 50%; /* may require vendor prefixes */
  background: rgb(235, 94, 0);
}
</style>