<template>
  <TheLayout ref="layoutRef">
    <section id="announcement-detail" class="announcement-detail">
      <div class="container">
        {{ type }}
        {{ id }}
      </div>
    </section>
  </TheLayout>
</template>

<style scpped>
.announcement-detail {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  name: "AnnouncementsDetailView",
  props: ["type", "id"],
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.loadData();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const announcement_detailSection = this.$el.querySelector(
          ".announcement-detail"
        );
        announcement_detailSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    loadData() {
      console.log("Loading data for ID:", this.id, "and Type:", this.type);
    },
  },
};
</script>
