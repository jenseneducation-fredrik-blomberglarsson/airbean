const state = {
  cart: [
    {
      id: 2,
      title: "Kaffe Doppio",
      desc: "Bryggd på månadens bönor",
      price: 49
    },
    {
      id: 2,
      title: "Kaffe Doppio",
      desc: "Bryggd på månadens bönor",
      price: 49
    },
    {
      id: 3,
      title: "Cappuccino",
      desc: "Bryggd på månadens bönor",
      price: 49
    },
    {
      id: 4,
      title: "Latte Macchiato",
      desc: "Bryggd på månadens bönor",
      price: 49
    },
    {
      id: 5,
      title: "Kaffe Latte",
      desc: "Bryggd på månadens bönor",
      price: 54
    }
  ]
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
