<template>
  <div id="orderStatus">
    <div id="orderNumber">
      <p>
        Ordernummer
        <strong>{{orderNum}}</strong>
      </p>
    </div>
    <div id="droneImg">
      <img src="@/assets/graphics/drone.svg" />
    </div>
    <h1>
      Din beställning
      <br />är på väg!
    </h1>
    <h3>
      <strong>{{orderTime}}</strong> minuter
    </h3>
    <div class="spacing" />
    <Button title="Ok, cool!" background-color="white" v-bind:onClick="onButtonClick" />
  </div>
</template>
<script>
import Button from "../components/Button.vue";
export default {
  name: "OrderStatus",
  props: {
    orderNum: String,
    orderTime: Number
  },
  components: {
    Button
  },
  methods: {
    onButtonClick() {
      this.$router.replace("/");
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

p {
  font-family: "PT Serif", serif;
  color: white;
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
}
</style>