<template>
  <div class="banner">
    <div class="container">
      <div class="bannerText text-center">
        <h1 :class="h1fs" class="text-yellow04 fw-bold">
          台北市停車商業同業公會
        </h1>
        <h2 :class="[h2fs, h2margin]" class="text-white">
          提供停車同業與產業連結，打造數位轉型停車服務
        </h2>
        <button class="btn btn-yellow03 text-navy05 fw-bold btn-join">
          加入公會
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  width: 100%;
  background: url("/img_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 576px;
}
.bannerText {
  padding-top: 176px;
  padding-bottom: 102px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-join {
  padding: 24px 160px;
  font-size: 20px;
  line-height: 1.5;
  /* margin-bottom: 154px; */
}

@media (max-width: 560px) {
  .banner {
    background-size: 100% 480px;
  }
  .bannerText {
    padding-top: 104px;
    padding-bottom: 280px;
  }
  .btn-join {
    padding: 12px 80px;
    font-size: 16px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    h1fs() {
      return this.windowWidth <= 560 ? "fs-xl6" : "fs-xl8";
    },
    h2fs() {
      return this.windowWidth <= 560 ? "fs-xl" : "fs-xl2";
    },
    h2margin() {
      return this.windowWidth <= 560 ? "mt-4 mb-8" : "mt-5 mb-12";
    },
  },
  created() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
