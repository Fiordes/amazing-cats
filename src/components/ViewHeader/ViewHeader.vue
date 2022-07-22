<template>
  <div class="view-header__wrapper">
    <div class="view-header__search">
<!--      <input type="text" placeholder="Search for breeds by name" v-model="searchQuery">-->
      <SearchBar/>
<!--      <span class="search-bar__icon">-->
<!--        <IconSearch/>-->
<!--      </span>-->
    </div>
    <router-link class="view-header__link" to="/likes">
      <IconLike/>
    </router-link>
    <router-link class="view-header__link" to="/favorites">
      <IconFavorites/>
    </router-link>
    <router-link class="view-header__link" to="/dislikes">
      <IconDislike/>
    </router-link>
  </div>
</template>

<script>
import IconLike from "@/components/icons/IconLike";
import IconFavorites from "@/components/icons/IconFavorites";
import IconDislike from "@/components/icons/IconDislike";
// import IconSearch from "@/components/icons/IconSearch";
import SearchBar from "@/components/UI/SearchBar";

export default {
  name: "ViewHeader",
  components: {SearchBar, IconDislike, IconFavorites, IconLike}
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
