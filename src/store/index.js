import { createStore } from 'vuex';
import { useAxios } from '@/composables/useAxios'


export default createStore({
    state: {
      loaded: false,
      breeds: [],
      breedsImages: [],
      breed: null,
      searchQuery: null,
      breedImages: null
    },
    getters: {},
    mutations: {
      setBreeds(state, payload) {
        state.breeds = payload
      },
      setBreedsImages(state, payload) {
        state.breedsImages = payload
      },
      setBreed(state, payload) {
        state.breed = payload
      },
      setBreedImages(state, payload) {
          state.breedImages = payload
        },
      setSearchQuery(state, payload) {
        state.searchQuery = payload
      }
    },
    actions: {
      async getBreedsAction({commit}) {
          try {
          // Can use limit
              const {data} = await useAxios.get('https://api.thecatapi.com/v1/breeds');
              commit('setBreeds', data);
          } catch(e) {
            throw new Error(e.data.message)
          }
      },
      async getImagesAction({commit}, query) {
        try {
//         search?limit=10&breed_id=aege
            const {data} = await useAxios.get('https://api.thecatapi.com/v1/images/search', {
                params: {
                    limit: query.limit,
                    breed_id: query.breed_id,
                }
            });
            commit('setBreedImages', data)
        } catch(e) {
            throw new Error(e.data.message)
        }
      },
      async getImagesWithParamsAction({commit}, query) {
          try {
              const {data} = await useAxios.get('https://api.thecatapi.com/v1/images/search', {
                  params: {
                      limit: query.limit || 5,
                      breed_id: query.breed_id || '',
                      order: query.order || '',
                      mime_types: query.type || '',
                  }
              });
              commit('setBreedsImages', data);

          } catch(e) {
              throw new Error(e.data.message)
          }
      },
      async getImageWithUniqId({commit}, query) {
        try {
            const {data} = await useAxios.get(`https://api.thecatapi.com/v1/images/${query}`);
            commit('setBreed', data)
        } catch(e) {
            throw new Error(e.data.message)
        }
      },
      changeSearchQueryAction({commit}, payload) {
        commit('setSearchQuery', payload)
      }

    },
    modules: {}
});
