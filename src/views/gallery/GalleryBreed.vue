<template>
  <div class="content-container">
    <template v-if="breed">
      <div class="gallery-breed__header">
        <GoBackButton/>
      </div>
      <img @click="setAsFavorite" class="gallery-breed__image" :src="breed.url" :alt="breed.id">
    </template>
  </div>
</template>

<script>

import {useStore} from "vuex";
import GoBackButton from "@/components/UI/GoBackButton";

export default {
  name: "GalleryBreed",
  components: {GoBackButton},
  props: {},
  setup() {
    const store = useStore();

    const breed = store.state.breed;

    const setAsFavorite = () => {
      store.dispatch('setFavoritesAction', breed)
    }

    return {
      breed,
      setAsFavorite
    }
  }
}
</script>

<style scoped lang="scss">
.gallery-breed {
  &__header {
    margin-bottom: 20px;
  }

  &__image {
    width: 100%;
    border-radius: 16px;
  }
}
</style>
