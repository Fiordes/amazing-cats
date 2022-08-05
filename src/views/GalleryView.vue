<template>
  <div class="content-container">
    <div class="header flex-start">
      <GoBackButton/>
      <h2 class="view-title">Gallery</h2>
      <button class="upload-button">
        <IconUpload/>
        Upload
      </button>
      <!--      <select v-model="selectBreed">-->
      <!--        <option value="All breeds" selected>All breeds</option>-->
      <!--        <option v-for="option in breedsArray" :key="option.id" :value="option.name">{{ option.name }}</option>-->
      <!--      </select>-->

      <!--      <select v-model="itemsToShow">-->
      <!--        <option value="5" selected>5</option>-->
      <!--        <option value="10">10</option>-->
      <!--        <option value="15">15</option>-->
      <!--        <option value="20">20</option>-->
      <!--      </select>-->
      <!--      <button class="sort-button" @click="sortArray()">-->
      <!--        <IconAsc/>-->
      <!--      </button>-->
      <!--      <button class="sort-button" @click="reverseArray()">-->
      <!--        <IconDesc/>-->
      <!--      </button>-->

    </div>
    <div class="selectors-wrapper">
      <select name="order" v-model="queryParams.order">
        <option value="Random">Random</option>
      </select>
      <select name="type" v-model="queryParams.type">
        <option value="jpg,png">Static</option>
        <option value="gif">Animated</option>
      </select>
      <select name="breed" v-model="queryParams.breed">
        <option value="abys">Abyssinian</option>
      </select>
      <select name="limit" v-model="queryParams.limit">
        <option value="5">5 items per page</option>
      </select>
    </div>
    <div class="breeds-grid">
      <SingleBreed v-for="(breed, index) in ar" :key="breed.id" :breed="breed" :positionClass="`position-${index+1}`"/>
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/UI/GoBackButton";
import IconUpload from "@/components/icons/IconUpload";
import {computed, reactive, watch} from "vue";
import {useStore} from "vuex";
import SingleBreed from "@/components/breed/SingleBreed";

export default {
  name: "GalleryView",
  components: {
    SingleBreed,
    GoBackButton,
    IconUpload
  },
  setup() {
    const store = useStore();
    const queryParams = reactive({
      order: '',
      type: '',
      breed: '',
      limit: 5
    });

    const ar = computed(() => {
      return store.state.breeds.slice(0, queryParams.limit)
    })


    watch(
        queryParams,
        (value) => {
          store.dispatch('getImagesWithParamsAction', value)
        }
    )

    return {
      queryParams,
      ar
    }
  }
}
</script>

<style scoped lang="scss">
.upload-button {
  margin-left: auto;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: $color-peach-main;
  font-weight: 500;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: $color-peach-main;

    color: #fff;

  }
}


</style>
