<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  components: {}
  /*   computed: {
    showHamburger() {
      return this.$store.state.showHamburger;
    }
  } */
};
// const express = require("express"); Bör flyttas ut!
// const cors = require("cors");
// const app = express();

// const beansRouter = require("./routes/beans");
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());
// app.use("/api/beans", beansRouter);

// app.listen(5000, () => console.log(`Server started on port ${PORT}`));
//
</script>