<template>
  <div class="search-bar__wrapper">
    <input type="text" placeholder="Search for breeds by name" @input="change" v-model="searchQuery">
    <span class="search-bar__icon">
      <IconSearch/>
    </span>
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch";
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
  name: "SearchBar",
  components: {IconSearch},
  setup() {
    const route = useRoute();

    const store = useStore();
    const searchQuery = ref('');


    const pathQuery = computed(() => {
      if(searchQuery.value === '')  {
         return `${route.path}`
      }
      return `${route.path}?search=${searchQuery.value}`
    })
    watch(searchQuery, () => {
      window.history.pushState({}, null, pathQuery.value);
    })
    const change = () => {
      store.dispatch('changeSearchQueryAction', searchQuery);
    }


    return {
      searchQuery,
      change
    }
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  &__wrapper {
    display: flex;
    align-items: center;
    position: relative;
    background: #fff;
    width: 100%;
    max-width: 470px;
    border-radius: 20px;
    padding: 10px;
    border: 2px solid transparent;

    &:hover {
      border-color: $color-peach-secondary;
    }

    &:focus-within {
      border-color: $color-peach-main;
    }

    input {
      outline: none;
      background: transparent;
      padding: 5px 5px 5px 10px;
      border: none;
      font: 400 20px/30px $main-font;
      color: $color-gray;
      width: 100%;
    }
  }

  &__icon {
    background: $color-peach-secondary;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
