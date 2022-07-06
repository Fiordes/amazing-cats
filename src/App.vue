<template>
  <div class="app-container">
    <AsideNavigation/>
    <div :class="[isHomePage ? '' : 'view-container']">
      <ViewHeader v-if="!isHomePage"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AsideNavigation from "@/components/navigation/AsideNavigation";
import ViewHeader from "@/components/ViewHeader/ViewHeader";
import {useRoute} from 'vue-router';
import {computed, onMounted} from "vue";
import {useStore} from "vuex";


export default {
  components: {ViewHeader, AsideNavigation},
  setup() {
    const route = useRoute();
    const store = useStore();
    const isHomePage = computed(() => {
      return route.name === 'Home'
    });

    onMounted(async () => {
      await store.dispatch('getBreedsAction');
    })
    return {
      isHomePage,
    }
  }
}
</script>

<style lang="scss">
.app-container {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
