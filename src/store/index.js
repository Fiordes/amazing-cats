import { createStore } from 'vuex';
import { axiosRequest } from '../composables/axios'


export default createStore({
    state: {
      loaded: false,
      breeds: null
    },
    getters: {},
    mutations: {
      setBreeds(state, payload) {
        state.breeds = payload
      }
    },
    actions: {
      async getBreedsAction({commit}) {
           console.log(axiosRequest.defaults)
          const {data} = await axiosRequest.get('https://api.thecatapi.com/v1/breeds');
          commit('setBreeds', data);
      }
    },
    modules: {}
});
