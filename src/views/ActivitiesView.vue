<template>
  <TheLayout ref="layoutRef">
    <section id="member" class="member">
      <div class="bg-yellow03 text-navy05 fs-xl5 fw-bold py-md-12 py-6">
        <p class="container">
          {{ $t("pages.activities.title") }}
        </p>
      </div>
      <div class="container mt-4 mt-md-16">
        <div v-if="isLoading">載入中...</div>
        <!-- Masonry grid container -->
        <div v-else class="masonry-grid">
          <!-- Loop through activities and render each image -->
          <div
            v-for="(activity, index) in activities"
            :key="index"
            class="masonry-item"
          >
          <a :href="activity.link_url" target="_blank" rel="noopener noreferrer">
            <img :src="activity.preview_url" :alt="activity.name" />
            <p class="text-gray13 fs-xl mt-2">{{ activity.title }}</p>
          </a>
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
import { API } from "@/api.js";

import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      isLoading: false,
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
    async getActivities() {
      this.isLoading = true;
      const getEventsApi = `${API}/event`;
      try {
        const response = await this.axios.get(getEventsApi);
        if (response.data.status) {
          this.activities = response.data.events;
        }
      } catch (error) {
        console.error("Failed", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
