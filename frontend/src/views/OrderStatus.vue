<template>
  <div id="orderStatus">
    <div id="orderNumber">
      <p style="margin-right: 0.5em;">Ordernummer</p>

      <strong>{{ orderNum }}</strong>
    </div>
    <div id="droneImg">
      <img src="@/assets/graphics/drone.svg" />
    </div>
    <h1>
      Din beställning
      <br />är på väg!
    </h1>
    <div id="orderTime">
      <strong style="margin-right: 0.5em;">{{ orderEta }}</strong>

      <p>minuter</p>
    </div>
    <div class="spacing" />
    <Button
      title="Ok, cool!"
      background-color="white"
      v-bind:onClick="onButtonClick"
    />
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import { mapGetters } from "vuex";
export default {
  name: "OrderStatus",
  computed: mapGetters(["orderNum", "orderEta"]),
  components: {
    Button
  },
  methods: {
    onButtonClick() {
      this.$router.replace("/menu");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Serif|Work+Sans&display=swap");

#orderStatus {
  display: flex;
  background-color: #d66e56;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 3em;
  padding-bottom: 3em;
  overflow: scroll;
}

#orderNumber {
  display: flex;
}

#orderTime {
  display: flex;
}

p {
  display: flex;
  font-family: "Work Sans", sans-serif;
  color: white;
  margin: 0;
}

strong {
  display: flex;
  font-weight: bolder;
  color: white;
  font-family: "Work Sans", sans-serif;
}

h1 {
  font-family: "PT Serif", serif;
  text-align: center;
  color: white;
}

h3 {
  font-family: "PT Serif", serif;
  color: white;
  margin: 0;
}

#droneImg {
  margin-top: 2em;
  margin-bottom: 1em;
}
.spacing {
  display: flex;
  flex-grow: 1;
}

#button {
  margin-top: 2em;
  margin-bottom: 3em;
}
</style>
