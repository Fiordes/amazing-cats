<template>
  <router-link class="icon-link" :to="linkTo">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "IconLink",
  props: {
    linkTo: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="scss">
  .icon-link {
    background: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 17px;
  }
</style>
