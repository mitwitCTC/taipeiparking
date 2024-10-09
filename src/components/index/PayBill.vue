<template>
  <div class="bg-paybill bg-container">
    <div class="container text-center">
      <img
        class="bg-desktop"
        src="/index/desktopPayment.png"
        alt="desktopPayment"
      />
      <p class="text-white fs-xl6 fw-bold mb-md-16 mb-10">
        {{ $t("pages.index.payBill.title") }}
      </p>
      <img
        class="bg-mobile"
        src="/index/mobilePayment.png"
        alt="mobilePayment"
      />
      <ul class="d-flex justify-content-between p-0 pay-list">
        <li class="pay-item bg-white col-3">
          <div class="pay-item-content">
            <p class="text-navy03 fw-bold text-start mb-1">
              {{ $t("pages.index.payBill.des1") }}
            </p>
            <p class="text-yellow05 fw-bold text-start">
              <vue-count-to
                class="text-yellow05 fw-bold text-start"
                :start-val="0"
                :end-val="90"
                :duration="2000"
                suffix="+"
              >
              </vue-count-to>
            </p>
          </div>
        </li>
        <li class="pay-item bg-white col-3">
          <div class="pay-item-content">
            <p class="text-nowrap text-navy03 fw-bold text-start mb-1">
              {{ $t("pages.index.payBill.des2") }}
            </p>
            <p class="text-yellow05 fw-bold text-start">
              <vue-count-to
                class="text-yellow05 fw-bold text-start"
                :start-val="0"
                :end-val="3000"
                :duration="5000"
                suffix="+"
              >
              </vue-count-to>
            </p>
          </div>
        </li>
        <li class="pay-item bg-white col-3">
          <div class="pay-item-content">
            <p class="text-navy03 fw-bold text-start mb-1">
              {{ $t("pages.index.payBill.des3") }}
            </p>
            <p class="text-yellow05 fw-bold text-start">
              <vue-count-to
                class="text-yellow05 fw-bold text-start"
                :start-val="0"
                :end-val="10"
                :duration="1000"
                suffix="+"
              >
              </vue-count-to>
            </p>
          </div>
        </li>
      </ul>
      <div class="goTopay-btn mt-12">
        <router-link to="pay">
          <button class="btn btn-yellow03 text-navy05 fs-lg-xl fs-md-md fw-bold">
          {{ $t("pages.index.payBill.btn-text") }}
        </button>
        </router-link>
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
  right: 0;
  height: 80%;
  object-fit: contain; /* 確保圖像按比例縮放 */
  top: 50%;
  transform: translateY(-50%); /* 垂直置中 */
  z-index: -1;
}

.bg-mobile {
  display: none;
}

.pay-list {
  position: relative; /* 使 bg-desktop 相對於這個元素定位 */
  overflow-x: auto; /* 使 ul 可以水平滑動 */
  white-space: nowrap; /* 防止 ul 在縮放時換行 */
  padding: 0; /* 移除內邊距 */
  margin: 0; /* 移除外邊距 */
  z-index: 1;
}

.pay-item {
  width: clamp(260px, 20vw, 392px); /* 設定寬度為可調整範圍 */
  aspect-ratio: 392 / 240; /* 保持寬高比例 */
  border-radius: 20px; /* 圓角邊框 */
  overflow: hidden; /* 確保內容不會超出邊框 */
  flex-shrink: 0; /* 防止元素縮小 */
  margin-right: 16px;
  display: flex; /* 保持內容的彈性佈局 */
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-sizing: border-box; /* 確保 padding 不影響寬度 */
}

.pay-item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1vw;
  border-radius: 20px;
  aspect-ratio: 392 / 240; /* Maintains aspect ratio (width / height) */
  background: white;
  width: 100%; /* Ensures content fills the item container */
}

.pay-item p:first-of-type {
  font-size: clamp(1rem, 1.5vw, 1.5rem); /* des1, des2, des3 的字體大小 */
  white-space: normal; /* 允許文字換行 */
  word-wrap: break-word; /* 讓過長的文字進行換行 */
  flex-grow: 1;
}

.pay-item p:last-of-type {
  font-size: clamp(2rem, 4vw, 4.5rem); /* 計數數值的字體大小 */
  align-self: flex-start;
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

  .pay-item {
    width: 50vw;
    aspect-ratio: 260/160;
    padding: 16px 12px; /* 進一步縮小 padding */
    z-index: 2;
  }

  .pay-item-content p:first-of-type {
    font-size: clamp(1.5rem, 1.5vw, 2.5rem); /* des1, des2, des3 的字體大小 */
  }

  .pay-item-content p:last-of-type {
    font-size: clamp(3rem, 4vw, 4.5rem); /* 計數數值的字體大小 */
  }
}

@media (max-width: 560px) {
  .pay-item {
    width: 69vw;
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
