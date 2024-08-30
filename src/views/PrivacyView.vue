<template>
  <TheLayout ref="layoutRef">
    <section id="privacy" class="privacy">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold mb-4 mb-md-0">
          {{ $t("pages.privacy.title") }}
        </p>
      </div>
      <div class="container d-flex mt-8 mt-md-12">
        privacy
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.privacy {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
    };
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
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const privacySection = this.$el.querySelector(".privacy");
        privacySection.style.paddingTop = `${headerHeight}px`;
      }
    },
  },
};
</script>
