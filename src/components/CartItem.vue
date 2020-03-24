<template>
  <div id="cartItem">
    {{ item.title }}
    {{ count }}
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: { item: Object, count: Number }
};
</script>
<style scoped>
#cartItem {
  font-size: 2em;
  display: flex;
  flex: 1;
  padding: 1em;
}
</style>
