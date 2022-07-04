<template>
  <button class="back-button" @click="goBack">
    <IconBack/>
  </button>
</template>

<script>
import IconBack from "@/components/icons/IconBack";
import {useRouter} from "vue-router";
export default {
  name: "GoBackButton",
  components: {IconBack},
  setup() {
    const router = useRouter();
    const goBack = () => {
      return router.go(-1)
    }
    return {
      goBack
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background: $color-peach-secondary;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
