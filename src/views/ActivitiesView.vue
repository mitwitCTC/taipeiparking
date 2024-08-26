<template>
  <TheLayout ref="layoutRef">
    <section id="member" class="member">
      <div class="bg-yellow03 text-navy05 fs-xl5 fw-bold py-md-12 py-6">
        <p class="container">
          {{ $t("pages.activities.title") }}
        </p>
      </div>
      <div class="container mt-4 mt-md-16">
        建置中
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>

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
      // Access the layout and header refs correctly
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const memberSection = this.$el.querySelector(".member");
        memberSection.style.paddingTop = `${headerHeight}px`;
      }
    },
  },
};
</script>
