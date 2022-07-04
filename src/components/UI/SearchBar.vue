<template>
  <div class="search-bar__wrapper">
    <input type="text" placeholder="Search for breeds by name" v-model="searchQuery">
    <span class="search-bar__icon">
      <IconSearch/>
    </span>
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch";
import {ref} from "vue";

export default {
  name: "SearchBar",
  components: {IconSearch},
  setup() {
    const searchQuery = ref('');
    return {
      searchQuery
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
