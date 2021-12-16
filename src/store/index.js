import { createStore } from "vuex";

export default createStore({
  state: {
    teamId: 0,
  },
  getters: {
    getTeamId: (state) => {
      return state.teamId;
    },
  },
  mutations: {
    UPDATE_TEAMID(state, id) {
      state.teamId = id;
    },
  },
  actions: {
    ChangeTeamView({ commit }, teamid) {
      commit("UPDATE_TEAMID", teamid);
    },
  },
});
