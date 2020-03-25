<template>
  <div id="cartItem">
    <div class="left">
      <p>{{ item.title }}</p>
      <p>{{ item.price }} kr</p>
    </div>
    <div id="spacing" />
    <div class="right">
      <p v-on:click="addMenuItem(item)">^</p>
      <p>{{ count }}</p>
      <p style="transform: rotate(180deg)" v-on:click="removeMenuItem(item)">^</p>
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
#cartItem {
  font-size: 2em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}
p {
  display: flex;
  margin: 0;
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
