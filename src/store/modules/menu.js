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
    const response = await fetch("http://localhost:5000/api/beans");
    const data = await response.json();
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
