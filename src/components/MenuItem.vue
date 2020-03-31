<template>
  <div id="menuItem">
    <aside @click="addMenuItem(item)">
      <img class="add" src="./../assets/graphics/add.svg" alt />
    </aside>
    <h3 class="title">{{item.title}}</h3>
    <hr class="dots" />
    <p class="desc">{{item.desc}}</p>
    <h3 class="price">{{item.price}}</h3>
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
  grid-template-columns: 5rem 1fr 3rem;
  grid-template-rows: 2rem 2rem;
  margin: 0;
  height: 100vh;
}
.add {
  margin-top: 8%;
  margin-left: 45%;
  width: 23%;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 999em;
  padding: 5px;
  background-color: black;
}
.title {
  grid-column: 2/3;
  grid-row: 1/2;
  font-family: "PT Serif", serif;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
}

.price {
  margin: 0;
  font-size: 1.5rem;
  text-align: right;
  grid-column: 3/4;
  grid-row: 1/3;
  text-align: left;
}
.desc {
  grid-column: 2/3;
  grid-row: 2/3;
  font-family: "Work Sans", sans-serif;
  margin: 0;
  padding: 0;
}
.dots {
  margin: 0;
  grid-column: 2/3;
  grid-row: 2/2;
  border: none;
  border-top: 1px dotted rgb(0, 0, 0);
  width: 100%;
}
</style>