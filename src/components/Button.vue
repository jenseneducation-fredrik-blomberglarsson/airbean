<template>
  <div id="button" v-on:click="onClick()" v-bind:style="{'background-color':backgroundColor}">
    <p v-bind:style="{color:textColor}">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    backgroundColor: String,
    textColor: String,
    title: String,
    onClick: Function
  }
};
</script>

<style scoped>
#button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em;
  border-radius: 2em;
  padding-left: 2em;
  padding-right: 2em;
  cursor: pointer;
}

p {
  font-size: 1.2em;
  margin: 0;
  text-align: center;
}
</style>