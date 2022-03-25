import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    snackbar: {
      show: false,
      text: '',
    },
  },
  mutations: {
    addTask(state, title) {
      const newTask = {
        id: Date.now(),
        title: title,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    editTask(state, payload) {
      const task = state.tasks.find((task) => task.id === payload.id);
      task.title = payload.title;
    },
    doneTask(state, id) {
      const task = state.tasks.find((task) => task.id === id);
      task.isDone = !task.isDone;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, text) {
      if (state.snackbar.show) {
        state.snackbar.show = false;
        setTimeout(() => {
          state.snackbar.text = text;
          state.snackbar.show = true;
        }, 250);
      } else {
        state.snackbar.text = text;
        state.snackbar.show = true;
      }
    },
  },
  getters: {},
  actions: {
    addTask({ commit }, payload) {
      commit('addTask', payload.title);
      commit('showSnackbar', payload.text);
    },
    editTask({ commit }, payload) {
      commit('editTask', payload);
      commit('showSnackbar', payload.text);
    },
    deleteTask({ commit }, payload) {
      commit('deleteTask', payload.id);
      commit('showSnackbar', payload.text);
    },
    doneTask({ commit }, payload) {
      commit('doneTask', payload.id);
      commit('showSnackbar', payload.text);
    },
  },
  modules: {},
});
