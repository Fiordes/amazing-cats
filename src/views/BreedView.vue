<template>
  <GoBackButton/>
  <h2>Breed View</h2>
  <small>{{ breed.id }}</small>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex/dist/vuex.mjs";
import {useRoute} from "vue-router";
import GoBackButton from "@/components/UI/GoBackButton";

export default {
  name: "BreedView",
  components: {GoBackButton},
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const store = useStore();
    const breed = computed(() => {
      return store.state.breeds.find(
          breed => breed.id === id
      )
    });

    return {
      breed
    }
  }

}
</script>

<style scoped>

</style>
