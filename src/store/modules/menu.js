import { getMenu } from "../../api";
const state = {
  menu: []
};

const mutations = {
  setMenu(state, menu) {
    state.menu = menu;
  }
};
const actions = {
  async fetchMenu({ commit }) {
    const data = await getMenu();
    commit("setMenu", data.menu);
  }
};
const getters = {
  menu: state => state.menu
};

export default {
  state,
  mutations,
  actions,
  getters
};
