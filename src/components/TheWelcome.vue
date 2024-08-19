<script>
import TheLayout from "@/components/TheLayout.vue";
import IndustryPromotion from "@/components/index/IndustryPromotion.vue";
import TheAnnouncements from "@/components/index/TheAnnouncements.vue";
import PayBill from "@/components/index/PayBill.vue";
import TheTemporary from "@/components/index/TheTemporary.vue";

export default {
  components: {
    TheLayout,
    IndustryPromotion,
    TheAnnouncements,
    PayBill,
    TheTemporary,
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
    <!-- 臨停 -->
    <TheTemporary></TheTemporary>
  </TheLayout>
</template>
<style>
#app {
  overflow-x: hidden;
}
</style>
