<template>
  <TheLayout ref="layoutRef">
    <section id="content" class="content">
      <div class="temp">
        <div class="d-flex justify-content-center align-items-center">
          <p class="text-navy05  p-5 fs-xl8 text-center">建置中...</p>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.content {
  padding-bottom: 20px;
}

.temp {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .temp {
    background-image: url('/public/temp/1920.png');
  }
}

@media (max-width: 767px) {
  .temp {
    background-image: url('/public/temp/375.png');
  }
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
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
        const headerHeight = layout.$refs.headerRef.offsetHeight || 98;
        const contentSection = this.$el.querySelector(".content");
        contentSection.style.paddingTop = `${headerHeight}px`;
      }
    },
  },
};
</script>
