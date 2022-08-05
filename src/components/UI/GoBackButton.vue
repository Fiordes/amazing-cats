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

  }
</style>
