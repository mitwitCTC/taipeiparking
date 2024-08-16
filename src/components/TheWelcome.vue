<script>
import TheLayout from "@/components/TheLayout.vue";
import IndustryPromotion from "@/components/index/IndustryPromotion.vue";
import TheAnnouncements from "@/components/index/TheAnnouncements.vue";

export default {
  components: {
    TheLayout,
    IndustryPromotion,
    TheAnnouncements,
  },
};
</script>

<template>
  <TheLayout>
    <!-- 產業優惠訊息 -->
    <IndustryPromotion></IndustryPromotion>
    <!-- 公告資訊 -->
    <TheAnnouncements></TheAnnouncements>
  </TheLayout>
</template>
<style>
#app {
  overflow-x: hidden;
}
</style>
