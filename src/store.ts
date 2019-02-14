import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('AUTH') || '',
  },
  mutations: {
    UpdateToken: (state, token) => {
      console.log('3. updating state', token);
      state.token = token;
    },
  },
  actions: {
    logout: ({commit}) => {
      localStorage.removeItem('AUTH');
      commit('UpdateToken', null);
    },
    setToken: ({commit}, token) => {
      console.log('2. committing to mutation : UpdateToken', token);
      commit('UpdateToken', token);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
