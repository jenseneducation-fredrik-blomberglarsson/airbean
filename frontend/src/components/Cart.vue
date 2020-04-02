<template>
  <div id="cart">
    <div class="modalContainer">
      <div id="triangleImgContainer">
        <img id="triangle" src="@/assets/graphics/triangle.svg" />
      </div>
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
          <h3>{{ totalPrice() }} kr</h3>
        </div>
        <div class="priceInfo">
          <p>inkl moms + drönarleverans</p>
        </div>
        <div class="buttonContainer">
          <p style="color: red;" v-if="errmsg !== null">{{ errmsg }}</p>
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
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem,
    Button
  },
  data() {
    return {
      errmsg: null
    };
  },

  computed: mapGetters(["cart"]),
  methods: {
    ...mapActions(["showBag", "placeOrder"]),

    async onButtonClick() {
      if (this.cart.length === 0) {
        this.errmsg = "Cart is empty!";
        setTimeout(() => {
          this.errmsg = null;
        }, 2000);
        return;
      }
      await this.placeOrder();

      this.$router.push({ name: "OrderStatus" });
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
    },
    totalPrice() {
      let price = 0;
      this.cart.forEach(item => {
        price = price + item.price;
      });

      return price;
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Serif|Work+Sans&display=swap");

#cart {
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  height: 100%;
  width: 100%;
}

#triangleImgContainer {
  position: fixed;
  right: 2.2em;
  top: 4.5em;
}

#triangle {
  width: 3em;
  height: 3em;
}

.modalContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  overflow: scroll;
  top: 6em;
  right: 1.5em;
  bottom: 2em;
  left: 1.5em;
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
  font-size: 2em;
  font-family: "PT Serif", serif;
}

h3 {
  display: flex;
  font-size: 1.2em;
  margin: 0;
  font-family: "PT Serif", serif;
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
  margin: 0;
}

.totalAndPrice {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.priceInfo {
  display: flex;
  font-family: "Work Sans", sans-serif;
  font-size: 1em;
}

.verticalSpacing {
  min-height: 3em;
  display: flex;
  flex-grow: 1;
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em;
}

.buttonContainer p {
  font-family: "Work Sans", sans-serif;
}
</style>
