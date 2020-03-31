<template>
  <div id="cartItem">
    <div class="left">
      <p class="title">{{ item.title }}</p>
      <p class="price">{{ item.price }} kr</p>
    </div>
    <div id="spacing" />
    <div class="right">
      <img src="@/assets/graphics/arrow-up.svg" v-on:click="addMenuItem(item)" />
      <p style="margin: 0.2em">{{ count }}</p>
      <img src="@/assets/graphics/arrow-down.svg" v-on:click="removeMenuItem(item)" />
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartItem",
  props: { item: Object, count: Number },
  methods: mapActions(["addMenuItem", "removeMenuItem"])
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Serif|Work+Sans&display=swap");

#cartItem {
  font-size: 1.2em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin-top: 1em;
}
p {
  display: flex;
  margin: 0;
}

.title {
  font-family: "PT Serif", serif;
  font-size: 1.2em;
}

.price {
  font-family: "Work Sans", sans-serif;
  font-size: 0.8em;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
}

img {
  width: 0.7em;
  height: 0.7em;
  cursor: pointer;
}

#spacing {
  display: flex;
  margin-left: 1em;
  margin-right: 1em;
  flex-grow: 1;
  border-bottom-width: 5px;
  border-bottom-color: grey;
  border-bottom-style: dotted;
}
</style>
