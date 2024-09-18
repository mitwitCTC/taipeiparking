<template>
  <TheLayout ref="layoutRef">
    <section id="content" class="content">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <div
          class="container mb-4 mb-md-0 d-flex align-items-center justify-content-between"
        >
        <div class="d-flex flex-column">
          <div class="d-flex align-items-center">
            <span class="text-navy05 fs-xl5 fw-bold me-5">
              {{ $t("pages.monthly.title") }}
            </span>
            <img
              src="/monthly/tabler_map.svg"
              alt="tabler_map"
              class="searchByMap me-1"
            />
            <span class="text-navy03 fs-sm fw-bold">
              {{ $t("pages.monthly.searchByMap") }}
            </span>
          </div>
        </div>
          <div class="img-container d-none d-sm-block">
            <img src="/index/monthly.png" alt="monthly-banner-img" />
          </div>
        </div>
      </div>
      <div class="container d-flex mt-8 mt-md-10">
        <span>內容</span>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.content {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.searchByMap {
  padding-left: 24px;
  border-left: 1px solid #244873;
}

.img-container {
  width: 10vw;
  aspect-ratio: 200/135;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = 98;
        const contentSection = this.$el.querySelector(".content");
        contentSection.style.paddingTop = `${headerHeight}px`;
      }
    },
  },
};
</script>
