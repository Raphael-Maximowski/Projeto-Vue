import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    favorites: [],
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    },
  },
  mutations: {
    addFavorite(state, favorite) {
      state.favorites.push(favorite);
    },
  },
  actions: {
    addFavoriteAction(context, newFavorite) {
      if(this.state.favorites.find(item => item.id === newFavorite.id)) {
        alert('ja existe')        
      }
      else {
        context.commit("addFavorite", newFavorite);
      }
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
