<script>
import TheLayout from "@/components/TheLayout.vue";
import TheBanner from "@/components/TheBanner.vue"
import IndustryPromotion from "@/components/index/IndustryPromotion.vue";
import TheAnnouncements from "@/components/index/TheAnnouncements.vue";
import PayBill from "@/components/index/PayBill.vue";
import TheTemporary from "@/components/index/TheTemporary.vue";
import TheActivities from "@/components/index/TheActivities.vue";
import MemberVendor from "@/components/index/MemberVendor.vue";
import TheDownload from "@/components/index/TheDownload.vue"
import TheMonthly from "@/components/index/TheMonthly.vue";

export default {
  components: {
    TheLayout,
    TheBanner,
    IndustryPromotion,
    TheAnnouncements,
    PayBill,
    TheTemporary,
    TheActivities,
    MemberVendor,
    TheDownload,
    TheMonthly,
  },
};
</script>

<template>
  <TheBanner></TheBanner>
  <TheLayout>
    <!-- 產業優惠訊息 -->
    <IndustryPromotion></IndustryPromotion>
    <!-- 公告資訊 -->
    <TheAnnouncements></TheAnnouncements>
    <!-- 月租 -->
     <TheMonthly></TheMonthly>
    <!-- 繳費 -->
    <PayBill></PayBill>
    <!-- 臨停 -->
    <TheTemporary></TheTemporary>
    <!-- 公會會員/協力廠商 -->
    <MemberVendor></MemberVendor>
    <!-- 活動花絮 -->
    <TheActivities></TheActivities>
    <!-- 資料查詢 -->
    <TheDownload></TheDownload>
  </TheLayout>
</template>
<style>
#app {
  overflow-x: hidden;
}
</style>
