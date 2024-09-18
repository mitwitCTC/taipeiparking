<template>
  <div class="banner">
    <div class="container">
      <div class="bannerText text-center">
        <p :class="fs" class="text-white fw-bold">
            {{ $t("pages.index.download.title") }}
        </p>
        <button class="btn btn-yellow03 px-10 py-6 btn-download">
            <router-link to="/inquiry" class="text-navy03 fw-bold">
              {{ $t("pages.index.download.btn-text") }}
            </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  background-image: url("/download_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 576px;
  background-blend-mode: multiply;
}
.bannerText {
  padding-top: 156px;
  padding-bottom: 158px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 560px) {
  .banner {
    background-size: 100% 480px;
  }
  .bannerText {
    padding-top: 126px;
    padding-bottom: 126px;
  }
  .btn-download {
    padding: 12px 80px;
    font-size: 16px;
  }
  .banner {
  background-image: url("/download_sm_bg.jpg");
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
    fs() {
      return this.windowWidth <= 560 ? "fs-xl3" : "fs-xl6";
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
