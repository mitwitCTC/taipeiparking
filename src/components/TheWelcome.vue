<script>
import TheHeader from "@/components/TheHeader.vue";
import IndustryPromotion from "@/components/index/IndustryPromotion.vue";
import TheAnnouncements from "@/components/index/TheAnnouncements.vue";

export default {
  components: {
    TheHeader,
    IndustryPromotion,
    TheAnnouncements,
  },
};
</script>

<template>
  <TheHeader />
  <!-- 產業優惠訊息 -->
  <IndustryPromotion></IndustryPromotion>
  <!-- 公告資訊 -->
  <TheAnnouncements></TheAnnouncements>
</template>
<style>
#app {
  overflow-x: hidden;
}
</style>
