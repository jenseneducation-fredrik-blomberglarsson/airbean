const state = {
  cart: []
};

const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  }
};
const actions = {
  addMenuItem({ state, commit }, item) {
    let cart = state.cart;
    cart.push(item);
    commit("setCart", cart);
  },
  removeMenuItem({ state, commit }, item) {
    let cart = state.cart;
    let firstOccuranceIndex = cart.findIndex(i => i.id === item.id);
    if (firstOccuranceIndex !== -1) {
      cart.splice(firstOccuranceIndex, 1);
    }
    commit("setCart", cart);
  }
};
const getters = {
  cart: state => state.cart
};

export default {
  state,
  mutations,
  actions,
  getters
};
