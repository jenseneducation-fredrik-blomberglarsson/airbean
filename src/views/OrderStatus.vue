<template>
  <div id="orderStatus">
    <div id="orderNumber">
      <p>
        Ordernummer
        <strong>#ABC123</strong>
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
      <strong>XX</strong> minuter
    </h3>
    <div class="spacing" />
    <Button title="Ok, cool!" background-color="white" />
  </div>
</template>
<script>
import Button from "../components/Button.vue";
export default {
  name: "OrderStatus",
  components: {
    Button
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
}

.spacing {
  display: flex;
  flex-grow: 1;
}

#button {
  margin-bottom: 4em;
}
</style>