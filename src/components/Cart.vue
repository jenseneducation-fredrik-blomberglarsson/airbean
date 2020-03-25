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
        <div class="verticalSpacing" />
        <div class="totalAndPrice">
          <h3>Total</h3>
          <div class="spacing" />
          <h3>XXX kr</h3>
        </div>
        <div class="priceInfo">
          <p>inkl moms + drönarleverans</p>
        </div>
        <div class="buttonContainer">
          <Button
            title="Take my money!"
            backgroundColor="#2d2d2d"
            textColor="white"
            v-bind:onClick="onButtonClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "../components/CartItem.vue";
import Button from "../components/Button.vue";
import { placeOrder } from "../api";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    CartItem,
    Button
  },
  computed: mapGetters(["cart"]),
  methods: {
    async onButtonClick() {
      const order = await placeOrder();
      console.log(order);
      // todo: send to confirmation page, not built yet
    },
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
  overflow: scroll;
  top: 2em;
  right: 2em;
  bottom: 2em;
  left: 2em;

  background-color: white;
  border-radius: 0.2em;
}
.cartContainer {
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

h1 {
  display: flex;
  height: 2em;
  font-size: 3em;
}

h3 {
  display: flex;
  font-size: 2em;
  margin: 0;
}

.spacing {
  display: flex;
  margin-left: 1em;
  margin-right: 1em;
  flex-grow: 1;
  border-bottom-width: 5px;
  border-bottom-color: grey;
  border-bottom-style: dotted;
}

p {
  display: flex;
  margin: 0;
}

.totalAndPrice {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.priceInfo {
  display: flex;
}

.verticalSpacing {
  min-height: 3em;
  display: flex;
  flex-grow: 1;
}

.buttonContainer {
  display: flex;
  justify-content: center;
  margin: 5em;
}
</style>
