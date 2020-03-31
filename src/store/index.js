import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import menu from "./modules/menu";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { cart, menu },
  state: {
    showHamburger: false,
    showCart: false
  },
  actions: {
    show({ commit }) {
      commit("show");
    },
    showBag({ commit }) {
      commit("showBag");
    }
  },
  getters: {
    showHamburger: state => state.showHamburger,
    showCart: state => state.showCart
  },
  mutations: {
    show(state) {
      state.showHamburger = !state.showHamburger;
    },
    showBag(state) {
      state.showCart = !state.showCart;
    }
  }
});
