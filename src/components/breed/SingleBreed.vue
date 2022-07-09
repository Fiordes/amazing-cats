<template>
  <div class="breeds-grid__item">
    <router-link :to="`/breeds/${breed.id}`">
      <img v-if="breed.image" :src="breed.image.url" :alt="breed.name">
      <p v-else> ESLE</p>
    </router-link>
    <span class="grid-item__label">{{ breed.name }}</span>
  </div>
</template>

<script>

export default {
  name: "SingleBreed",
  props: {
    breed: {
      type: Object,
      default: () => {
      },
      require: true
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
    }

    &__label {
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s;
      width: 100%;
      background: #fff;
      color: $color-peach-main;
    }

    &:hover {
      &:before {
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
    }
  }
}

</style>
