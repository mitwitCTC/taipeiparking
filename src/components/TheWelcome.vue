<script>
import TheHeader from "@/components/TheHeader.vue";
import IndustryPromotion from '@/components/index/IndustryPromotion.vue'

export default {
  components: {
    TheHeader,
    IndustryPromotion
  },
};
</script>

<template>
  <TheHeader />
  <!-- 產業優惠訊息 -->
  <IndustryPromotion></IndustryPromotion>
</template>
<style>
#app {
  overflow-x: hidden;
}
</style>
