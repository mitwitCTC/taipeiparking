<template>
  <div class="bg-paybill bg-container">
    <div class="container text-center">
      <img
        class="bg-desktop"
        src="/index/desktopPayment.png"
        alt="desktopPayment"
      />
      <p class="text-white fs-xl6 fw-bold mb-md-16 mb-10">想繳費？來這裡</p>
      <img
        class="bg-mobile"
        src="/index/mobilePayment.png"
        alt="mobilePayment"
      />
      <ul class="d-flex justify-content-between p-0 pay-list">
        <li class="pay-item bg-white col-3">
          <p class="text-navy03 fs-xl2 fw-bold text-start mb-16">
            公會會員停車場
          </p>
          <p class="text-yellow05 fs-xl8 fw-bold text-start">
            <vue-count-to
              class="text-yellow05 fs-xl8 fw-bold text-start"
              :start-val="0"
              :end-val="90"
              :duration="2000"
              suffix="+"
            >
            </vue-count-to>
          </p>
        </li>
        <li class="pay-item bg-white col-3">
          <p class="text-navy03 fs-xl2 fw-bold text-start mb-16">
            提供路邊及路外停車場
          </p>
          <p class="text-yellow05 fs-xl8 fw-bold text-start">
            <vue-count-to
              class="text-yellow05 fs-xl8 fw-bold text-start"
              :start-val="0"
              :end-val="3000"
              :duration="5000"
              suffix="+"
            >
            </vue-count-to>
          </p>
        </li>
        <li class="pay-item bg-white col-3">
          <p class="text-navy03 fs-xl2 fw-bold text-start mb-16">
            多元支付繳款
          </p>
          <p class="text-yellow05 fs-xl8 fw-bold text-start">
            <vue-count-to
              class="text-yellow05 fs-xl8 fw-bold text-start"
              :start-val="0"
              :end-val="10"
              :duration="1000"
              suffix="+"
            >
            </vue-count-to>
          </p>
        </li>
      </ul>
      <div class="goTopay-btn mt-12">
        <button class="btn btn-yellow03 text-navy05 fs-lg-xl fs-md-md fw-bold">
          前往繳費
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-paybill {
  background: linear-gradient(180deg, #133155 0%, #1d4a80 100%);
  padding: 120px 0;
  z-index: -3;
}

.bg-container {
  position: relative;
  z-index: 1;
}

.bg-desktop {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.bg-mobile {
  display: none;
}

.pay-list {
  overflow-x: auto; /* 使 ul 可以水平滑動 */
  white-space: nowrap; /* 防止 ul 在縮放時換行 */
  padding: 0; /* 移除內邊距 */
  margin: 0; /* 移除外邊距 */
}

.pay-item {
  display: inline-block; /* 使 li 元素在水平方向上排列 */
  width: 392px;
  height: 240px;
  padding-top: 32px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-right: 192px;
  border-radius: 20px;
  margin-right: 16px; /* 保留 li 元素之間的間距 */
}

/* 隱藏 WebKit 瀏覽器中的滾動條 */
.bg-paybill::-webkit-scrollbar {
  display: none;
}

/* 隱藏 Firefox 中的滾動條 */
.pay-list {
  scrollbar-width: none;
}

@media (max-width: 800px) {
  .bg-desktop {
    display: none;
  }
  .bg-mobile {
    display: block;
    margin: 0 auto;
  }
}
</style>

<script>
import VueCountTo from "../VueCountTo/vue-countTo.vue";

export default {
  components: {
    VueCountTo,
  },
};
</script>
