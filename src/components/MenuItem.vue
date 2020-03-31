<template>
  <div id="menuItem">
    <aside @click="addMenuItem(item)">
      <!-- <aside class="addItem" @click="addItem"> -->
      <img class="add" src="./../assets/graphics/add.svg" alt />
    </aside>
    <div class="items">
      <h3 class="title">{{item.title}}</h3>
      <hr class="dots" />
      <p class="desc">{{item.desc}}</p>
      <h3 class="price">{{item.price}}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: { item: Object },
  methods: mapActions(["addMenuItem"])
};
</script>

<style scoped>
#menuItem {
  display: grid;
  grid-template-columns: 5rem 1fr 3.5rem;
  grid-template-rows: 2rem 2rem;
  margin: 0.5rem;
}
.add {
  margin-top: 3%;
  margin-left: 45%;
  width: 23%;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 999em;
  padding: 5px;
  background-color: black;
}
.title {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
}
.price {
  font-size: 1.5rem;
  text-align: right;
  margin-top: -15%;
}
.desc {
  margin: 0;
  padding: 0;
}
.dots {
  margin: 0 3.5rem;
  border: none;
  border-top: 1px dotted rgb(0, 0, 0);
  width: 70%;
}
</style>