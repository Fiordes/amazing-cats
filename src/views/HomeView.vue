<template>
  <div class="home-container">
    <img src="@/assets/images/girl-and-pet.png" alt="Girl with pet on hands">
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped lang="scss">
.home-container {
  position: relative;
  display: flex;
  justify-content: end;

  &:before {
    content: '';
    display: block;
    width: 680px;
    height: 840px;
    background-color: $color-peach-secondary;
    border-radius: 20px;
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 9;
  }

  img {
    position: relative;
    z-index: 10;
  }
}
</style>
