const state = {
  showHamburger: false,
  showCart: false
};
const actions = {
  show({ commit }) {
    commit("show");
  },
  showBag({ commit }) {
    commit("showBag");
  }
};
const getters = {
  showHamburger: state => state.showHamburger,
  showCart: state => state.showCart
};
const mutations = {
  show(state) {
    state.showHamburger = !state.showHamburger;
  },
  showBag(state) {
    state.showCart = !state.showCart;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
