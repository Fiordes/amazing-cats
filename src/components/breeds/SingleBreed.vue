<template>
  <div class="breeds-grid__item" :class="positionClass" :data-name="breed.name">
    <router-link :to="`/${redirectPath}/${breed.id}`" @click="setBreedClick">
      <img v-if="breed.image" :src="breed.image.url" :alt="breed.name">
      <img src="@/assets/images/default-image.jpg" alt="Default Image" v-else />
    </router-link>
  </div>
</template>

<script>

import {useStore} from "vuex";


export default {
  name: "SingleBreed",
  props: {
    breed: {
      type: Object,
      default: () => {
      },
      require: true
    },
    positionClass: {
      type: String,
      default: ""
    },
    redirectPath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const store = useStore();

    const setBreedClick = () => {
        store.commit("setBreed", props.breed)
    }
    return {
      setBreedClick
    }
  }

}
</script>

<style scoped lang="scss">
.breeds-grid {
  &__item {
    width: 100%;
    position: relative;
    cursor: pointer;
    border-radius: 20px;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: $hover-card-bg;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s;
      opacity: 0;
      pointer-events: none;
      border-radius: 20px;
    }

    &:after {
      content: attr(data-name);
      display: block;
      padding: 5px 10px;
      text-align: center;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      transition: all 0.3s;
      max-width: 90%;
      background: #fff;
      color: $color-peach-main;
      opacity: 0;
      pointer-events: none;
      border-radius: 10px;
    }

    &:hover {
      &:before,
      &:after {
        opacity: 1;
      }

    }

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;

    }

    &.position-1 {
      grid-row: 1/3;
    }

    &.position-5 {
      grid-row: 2/4;
      grid-column: 2/4;
    }

    &.position-8 {
      grid-row: 4/6;
      grid-column: 3/4;
    }

    &.position-9 {
      grid-row: 5/7;
      grid-column: 1/3;
    }

    &.position-11 {
      grid-row: 7/9;
    }

    &.position-15 {
      grid-row: 8/10;
      grid-column: 2/4;
    }

    &.position-16 {
      grid-row: 10/12;
      grid-column: 3/4;
    }

    &.position-20 {
      grid-row: 11/13;
      grid-column: 1/3;
    }


  }


}

</style>
