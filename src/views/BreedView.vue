<template>
  <div class="content-container">
    <template v-if="breed">
      <div class="header">
        <GoBackButton/>
        <h2 class="view-title">BREEDS</h2>
        <small class="view-breed__id">{{ id }}</small>
      </div>
      <div class="body">
        <Splide :options="slideOptions">
          <SplideSlide v-for="item in breed" :key="item.id">
            <div class="slide-content" :style="{backgroundImage: `url(${item.url})`}"></div>
            <!--            <img class="slide-image" :src="" :alt="item.breeds[0].name">-->
          </SplideSlide>
        </Splide>
      </div>
    </template>


  </div>

</template>

<script>
import {computed, onMounted} from "vue";
import {useStore} from "vuex/dist/vuex.mjs";
import {useRoute} from "vue-router";
import GoBackButton from "@/components/UI/GoBackButton";
import {Splide, SplideSlide} from "@splidejs/vue-splide";


export default {
  name: "BreedView",
  components: {GoBackButton, Splide, SplideSlide},
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const store = useStore();
    const breed = computed(() => {
      return store.state.breed
    });

    const slideOptions = {
      type: 'loop',
      arrows: false,
      autoHeight: true,
      rewind: true,
      gap: '20px'
    }

    onMounted(async () => {
      const query = {
        limit: 5,
        breed_id: id
      }
      await store.dispatch('getImagesAction', query)
    })


    return {
      breed,
      id,
      slideOptions
    }
  }

}
</script>

<style scoped lang="scss">


.view {
  &-title {
    background: $color-peach-secondary;
    color: $color-peach-main;
  }


  &-breed {
    &__id {
      background: $color-peach-main;
      color: #fff;
      padding: 5px 30px;
      letter-spacing: 2px;
      border-radius: 10px;
      font: $main-font-size;
      margin-left: 10px;
      text-transform: uppercase;
    }
  }
}

//.slide-image {
//  max-height: 360px;
//  height: 100%;
//  object-fit: fill;
//}

.slide-content {
  height: 360px;
  width: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
}

</style>
