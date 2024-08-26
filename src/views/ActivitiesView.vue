<template>
  <TheLayout ref="layoutRef">
    <section id="member" class="member">
      <div class="bg-yellow03 text-navy05 fs-xl5 fw-bold py-md-12 py-6">
        <p class="container">
          {{ $t("pages.activities.title") }}
        </p>
      </div>
      <div class="container mt-4 mt-md-16">
        <!-- Masonry grid container -->
        <div class="masonry-grid">
          <!-- Loop through activities and render each image -->
          <div
            v-for="(activity, index) in activities"
            :key="index"
            class="masonry-item"
          >
            <img :src="activity.imgUrl" :alt="activity.name" />
            <p class="mt-2">{{ activity.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.masonry-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.masonry-item {
  width: calc(50% - 16px); /* Adjust the width of each item */
  margin-bottom: 16px;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .masonry-item {
    width: 100%;
  }
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      activities: [],
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getActivities();
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
    getActivities() {
      this.activities = [
        {
          name: "第21屆第1次理監事暨會員聯誼",
          imgUrl: "/index/activities/img01.jpg",
        },
        {
          name: "第21屆第1次理監事暨會員聯誼",
          imgUrl: "/index/activities/img02.jpg",
        },
        {
          name: "第21屆第1次理監事暨會員聯誼",
          imgUrl: "/index/activities/img03.jpg",
        },
        {
          name: "第21屆第1次理監事暨會員聯誼",
          imgUrl: "/index/activities/img04.jpg",
        },
        {
          name: "第21屆第1次理監事暨會員聯誼",
          imgUrl: "/index/activities/img05.jpg",
        },
      ];
    },
  },
};
</script>
