<template>
  <div class="view-header__wrapper">
    <div class="view-header__search">
      <input type="text" placeholder="Search for breeds by name" v-model="searchQuery">
      <span class="search-bar__icon">
        <IconSearch/>
      </span>
    </div>
    <router-link class="view-header__link" to="/breeds">
      <IconLike/>
    </router-link>
    <router-link class="view-header__link" to="/">
      <IconFavorites/>
    </router-link>
    <router-link class="view-header__link" to="/">
      <IconDislike/>
    </router-link>
  </div>
</template>

<script>
import IconLike from "@/components/icons/IconLike";
import IconFavorites from "@/components/icons/IconFavorites";
import IconDislike from "@/components/icons/IconDislike";
import IconSearch from "@/components/icons/IconSearch";

export default {
  name: "ViewHeader",
  components: {IconSearch, IconDislike, IconFavorites, IconLike}
}
</script>

<style scoped lang="scss">
.view-header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 680px;
    width: 100%;
    margin-left: auto;
    margin-bottom: 10px;
  }

  &__search {
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

    .search-bar__icon {
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

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 15px;
    border-radius: 20px;
  }
}


</style>
