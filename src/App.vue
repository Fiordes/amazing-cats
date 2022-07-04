<script>
import AsideNavigation from "@/components/navigation/AsideNavigation";
export default {
  components: { AsideNavigation}
}
</script>

<template>
  <div class="app-container">
    <AsideNavigation/>
    <router-view />
<!--    <IconLink  linkTo="/breeds">-->
<!--      <IconDislike/>-->
<!--    </IconLink>-->
  </div>
</template>

<style lang="scss">
.app-container {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
