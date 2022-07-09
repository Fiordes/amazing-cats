import { createStore } from 'vuex';
import { axiosRequest } from '../composables/axios'


export default createStore({
    state: {
      loaded: false,
      breeds: null,
      breed: null
    },
    getters: {},
    mutations: {
      setBreeds(state, payload) {
        state.breeds = payload
      },
      setBreed(state, payload) {
        state.breed = payload
      }
    },
    actions: {
      async getBreedsAction({commit}) {
          try {
              const {data} = await axiosRequest.get('https://api.thecatapi.com/v1/breeds');
              commit('setBreeds', data);
          } catch(e) {
            throw new Error(e.data.message)
          }
      },
      async getImagesAction({commit}, query) {
        try {
//         search?limit=10&breed_id=aege
            const {data} = await axiosRequest.get('https://api.thecatapi.com/v1/images/search', {
                params: {
                    limit: query.limit,
                    breed_id: query.breed_id
                }
            });
            commit('setBreed', data)
        } catch(e) {
            throw new Error(e.data.message)
        }
      }
    },
    modules: {}
});
