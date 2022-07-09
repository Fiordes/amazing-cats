<template>
  <div class="content-container">
    <div class="header">
      <GoBackButton/>
      <h2 class="view-title">BREEDS</h2>
    </div>
    <div class="breeds-grid">
      <SingleBreed v-for="breed in breedsArray" :key="breed.id" :breed="breed"/>
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/UI/GoBackButton";
import {useStore} from 'vuex';
import {computed, onMounted} from "vue";
import SingleBreed from "@/components/breed/SingleBreed";


export default {
  name: "BreedsView",
  components: {SingleBreed, GoBackButton},
  setup() {
    const store = useStore();
    let breedsArray = computed(() => {
      return store.state.breeds;
    })

    onMounted(() => {
      store.commit('setBreed', null)
    })


    return {
      breedsArray
    }
  }
}
</script>

<style lang="scss" scoped>
.breeds-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 20px;


}
</style>
