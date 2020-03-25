import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import menu from "./modules/menu";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: { cart, menu },
  state: {
    showHamburger: false
  },

  mutations: {
    show(state) {
      state.showHamburger = !state.showHamburger
    }
  }

});
