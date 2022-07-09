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
          </SplideSlide>
        </Splide>

        <div class="view-breed__description">
          <h2>{{ breedOption.breedName }}</h2>
          <h3>{{ breedOption.breedDescription }}</h3>
          <div class="description-grid">
            <div class="description-grid__item">
              <h5>Temperament</h5>
              <p>{{ breedOption.breedTemperament }}</p>
            </div>
            <div class="description-grid__item">
              <ul>
                <li>
                  <bold>Origin:</bold>
                  <span>{{ breedOption.breedOrigin }}</span>
                </li>
                <li>
                  <bold>Weight:</bold>
                  <span>{{ breedOption.breedWeight }} kgs</span>
                </li>
                <li>
                  <bold>Life span:</bold>
                  <span>{{ breedOption.breedLife }} years</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div>LOADING</div>
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
    const breedOption = computed(() => {
      return {
        breedName: breed.value[0].breeds[0].name,
        breedDescription: breed.value[0].breeds[0].description,
        breedTemperament: breed.value[0].breeds[0].temperament,
        breedOrigin: breed.value[0].breeds[0].origin,
        breedWeight: breed.value[0].breeds[0].weight.metric,
        breedLife: breed.value[0].breeds[0].life_span
      }
    })

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
      slideOptions,
      breedOption
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

    &__description {
      margin-top: 51px;
      padding: 0 40px 40px;
      border: 2px solid $color-peach-secondary;
      border-radius: 20px;
      position: relative;

      h2 {
        font: 500 36px/52px $main-font, sans-serif;
        text-align: center;
        background: #FFFFFF;
        border-radius: 20px;
        padding: 5px 40px;
        max-width: fit-content;
        position: relative;
        top: -32px;
        left: 50%;
        transform: translateX(-50%);
      }

      h3 {
        font: $main-font-size;
        margin-bottom: 20px;
        text-align: center;
        color: $color-gray;
      }

      .description-grid {
        display: flex;

        &__item {
          h5 {
            font: 500 16px/23px $main-font, sans-serif;
            color: $color-main;
          }

          p {
            max-width: 270px;
            font: 400 16px/23px $main-font, sans-serif;
            color: $color-gray;
          }

          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font: 500 16px/23px $main-font, sans-serif;

            span {
              color: $color-gray;
              margin-left: 5px;
              font: 400 16px/23px $main-font, sans-serif;
            }
          }
        }
      }
    }
  }


}

.slide-content {
  height: 360px;
  width: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 20px;
}

</style>
