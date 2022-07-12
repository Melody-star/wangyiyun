import { createStore } from "vuex";

export default createStore({
  state: {
    playlist: [
      {
        al: {name: "暂无音乐~"},
        ar: [{name: ""}],
      },
    ],
    playCurrentIndex: 0,
  },
  mutations: {
    setPlaylist: function (state, value) {
      state.playlist = value;
    },
    setPlayIndex(state,value){
      state.playCurrentIndex = value
    }
  },
  actions: {},
  modules: {},
});
