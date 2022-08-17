<template>
  <div class="content-container">
    <div class="header">
      <GoBackButton/>
      <h2 class="view-title">BREEDS</h2>
      <select v-model="selectBreed">
        <option value="All breeds" selected>All breeds</option>
        <option
            v-for="option in selectValue"
            :key="option.id"
            :value="option"
        >
          {{ option }}
        </option>
      </select>

      <select v-model="itemsToShow">
        <option value="5" selected>5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <button class="sort-button" @click="sortArray()">
        <IconAsc/>
      </button>
      <button class="sort-button" @click="reverseArray()">
        <IconDesc/>
      </button>
    </div>
    <div class="breeds-grid" :class="gridClass">
      <SingleBreed
          v-for="(breed, index) in filteredBreed"
          :positionClass="`position-${index + 1}`"
          :redirectPath="redirectPath"
          :key="breed.id"
          :breed="breed"
      />
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/UI/GoBackButton";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";
import SingleBreed from "@/components/breeds/SingleBreed";
import IconAsc from "@/components/icons/IconAsc";
import IconDesc from "@/components/icons/IconDesc";
import {useRoute} from "vue-router";

export default {
  name: "BreedsView",
  components: {
    IconDesc,
    IconAsc,
    SingleBreed,
    GoBackButton,
  },
  setup() {
    const store = useStore();
    const route = useRoute()
    const selectBreed = ref("All breeds");
    const itemsToShow = ref(5);
    const selectValue = ref([]);
    const searchQuery = computed(() => {
      return store.state.searchQuery || "";
    });
    const redirectPath = route.name.toLowerCase();

    const breedsArray = computed(() => {
      const arr = store.state.breeds;
      if (selectBreed.value === "All breeds") return arr;
      return arr.filter((br) => br.name === selectBreed.value)
    });

    const filteredBreed = computed(() => {
      let filter = searchQuery.value;
      if (!filter.length) return breedsArray.value.slice(0, itemsToShow.value);
      return breedsArray.value.filter((br) => {
        return br.name.toLowerCase().includes(filter.toLowerCase());
      });
    });

    const sortArray = () => {
      return breedsArray.value.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    };

    const reverseArray = () => {
      return breedsArray.value.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    };

    const gridClass = computed(() => {
      return selectBreed.value !== "All breeds" ? "single-grid" : "";
    });


    onMounted(() => {
      store.commit("setBreed", null);
      selectValue.value = JSON.parse(localStorage.getItem("breedsArray")).map(breed => breed.name);
    });


    return {
      breedsArray,
      searchQuery,
      selectBreed,
      filteredBreed,
      gridClass,
      itemsToShow,
      sortArray,
      reverseArray,
      selectValue,
      redirectPath
      // searchedBreedsArray
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
