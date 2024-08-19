<script>
import TheLayout from "@/components/TheLayout.vue";
import IndustryPromotion from "@/components/index/IndustryPromotion.vue";
import TheAnnouncements from "@/components/index/TheAnnouncements.vue";
import PayBill from "@/components/index/PayBill.vue"

export default {
  components: {
    TheLayout,
    IndustryPromotion,
    TheAnnouncements,
    PayBill
  },
};
</script>

<template>
  <TheLayout>
    <!-- 產業優惠訊息 -->
    <IndustryPromotion></IndustryPromotion>
    <!-- 公告資訊 -->
    <TheAnnouncements></TheAnnouncements>
    <!-- 繳費 -->
    <PayBill></PayBill>
  </TheLayout>
</template>
<style>
#app {
  overflow-x: hidden;
}
</style>
