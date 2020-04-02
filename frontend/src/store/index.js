import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import menu from "./modules/menu";
import burgerandcart from "./modules/burgerandcart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { cart, menu, burgerandcart }
});
