<template>
  <div id="cart">
    <div class="modalContainer">
      <h1>Din beställning</h1>
      <div class="cartContainer">
        <CartItem
          v-for="item in countCart()"
          :key="item.item.id"
          :item="item.item"
          :count="item.count"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "../components/CartItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    CartItem
  },
  computed: mapGetters(["cart"]),
  methods: {
    countCart() {
      let result = [];
      this.cart.forEach(item => {
        let existingObject = result.find(i => i.item.id === item.id);
        if (existingObject !== undefined) {
          // Does exist. Increment count.
          existingObject.count += 1;
        } else {
          // Does not exist. Create initial.
          result.push({
            item: item,
            count: 1
          });
        }
      });
      console.log(result);
      return result;
    }
  }
};
</script>
<style scoped>
#cart {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
}
.modalContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2em;
  right: 2em;
  bottom: 2em;
  left: 2em;
  background-color: white;
  border-radius: 0.2em;
}
.cartContainer {
  width: 100%;
  display: flex;
  flex-grow: grow;
  flex-direction: column;
}

h1 {
  display: flex;
  height: 2em;
}
</style>
