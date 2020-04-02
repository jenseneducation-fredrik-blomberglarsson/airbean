import { placeOrder } from "../../api";

const state = {
  cart: [],
  orderNum: "",
  orderEta: 0
};

const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  },
  setOrderNum(state, orderNum) {
    state.orderNum = orderNum;
  },
  setOrderEta(state, orderEta) {
    state.orderEta = orderEta;
  }
};
const actions = {
  async placeOrder({ commit }) {
    const order = await placeOrder();
    commit("setOrderEta", order.eta);
    commit("setOrderNum", order.orderNr);
  },

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
  cart: state => state.cart,
  orderNum: state => state.orderNum,
  orderEta: state => state.orderEta
};

export default {
  state,
  mutations,
  actions,
  getters
};
