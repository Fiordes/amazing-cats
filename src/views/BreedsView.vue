<template>
  <div class="content-container">
    <div class="header">
      <GoBackButton/>
      <h2 class="view-title">BREEDS</h2>

    </div>
    <div v-for="breed in breedsArray" :key="breed.id">
      <router-link :to="{path: `/breeds/${breed.id}`}" >LINK</router-link>
    </div>

  </div>
</template>

<script>
import GoBackButton from "@/components/UI/GoBackButton";
import {useStore} from 'vuex';
import {computed} from "vue";


export default {
  name: "BreedsView",
  components: {GoBackButton},
  setup() {
    const store = useStore();
    let breedsArray = computed(() => {
      return store.state.breeds;
    })



    return {
      breedsArray
    }
  }
}
</script>

<style scoped>

</style>
