const state = {
  showHamburger: false,
  showCart: false
};
const actions = {
  show({ commit }) {
    commit("show");
  },
  toggleBag({ commit }) {
    commit("toggleBag");
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
  toggleBag(state) {
    state.showCart = !state.showCart;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
