<template>
  <div class="content-container">
    <div class="header">
      <GoBackButton/>
      <h2 class="view-title">BREEDS</h2>
      <select v-model="selectBreed">
        <option value="All breeds" selected>All breeds</option>
        <option v-for="option in breedsArray" :key="option.id" :value="option.name">{{ option.name }}</option>
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
          :positionClass="`position-${index+1}`" :key="breed.id"
          :breed="breed"
      />
    </div>
  </div>
</template>

<script>
import GoBackButton from "@/components/UI/GoBackButton";
import {useStore} from 'vuex';
import {computed, onMounted, ref} from "vue";
import SingleBreed from "@/components/breed/SingleBreed";
import IconAsc from "@/components/icons/IconAsc";
import IconDesc from "@/components/icons/IconDesc";


export default {
  name: "BreedsView",
  components: {
    IconDesc,
    IconAsc,
    SingleBreed,
    GoBackButton
  },
  setup() {
    const selectBreed = ref('All breeds');
    const itemsToShow = ref(5);
    const store = useStore();
    const searchQuery = computed(() => {
      return store.state.searchQuery || ''
    })

    const breedsArray = computed(() => {
      const arr =  JSON.parse(localStorage.getItem('breedsArray')).slice(0, itemsToShow.value)
      if (selectBreed.value === 'All breeds') return arr.slice(0, itemsToShow.value)
      return arr.filter(br => {
        return br.name === selectBreed.value
      }).slice(0, itemsToShow.value)
    });


    const filteredBreed = computed(() => {
      let filter = searchQuery.value;
      if(!filter.length) return breedsArray.value.slice(0, itemsToShow.value)
      return  breedsArray.value.filter( br => {
        return br.name.toLowerCase().includes(filter.toLowerCase())
      })
    });

    const sortArray = () => {
      return filteredBreed.value.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      })
    }

    const reverseArray = () => {
      return filteredBreed.value.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })


    }

    const gridClass = computed(() => {
      return selectBreed.value !== 'All breeds' ? 'single-grid' : ''
    })




    onMounted(() => {
      store.commit('setBreed', null);
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
      // searchedBreedsArray
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  background: #F8F8F7;
  border-radius: 10px;
  border: 2px solid transparent;
  color: $color-gray;
  padding: 8px 10px;
  font: 400 16px/24px $main-font, sans-serif;
  margin-left: 10px;
  position: relative;

  option {
    background: #fff;
    color: $color-gray;
    border: none;
  }
}


.breeds-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 140px;
  margin-top: 20px;
  grid-gap: 20px;

  &.single-grid {
    grid-template-rows: auto;
  }
}
</style>
