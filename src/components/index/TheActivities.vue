<template>
  <section id="activities" class="mt-16 mb-20">
    <h2 class="text-navy04 fs-xl6 fw-bold text-center mb-10">
      {{ $t("pages.index.activities") }}
    </h2>
    <h2 v-if="isLoading" class="text-center">載入中...</h2>
    <div v-else
      id="marquee-container"
      @mouseover="pauseMarquee"
      @mouseleave="resumeMarquee"
    >
      <vue-marquee-slider
        id="marquee-slider"
        :paused="isPaused"
        :speed="30000"
        :space="16"
        :width="calculatedWidth"
      >
        <div class="activity-item" v-for="(item, index) in events" :key="index">
          <a :href="item.link_url" target="_blank">
            <div class="img-container">
              <img :src="item.preview_url || defaultImgUrl" @error="handleImageError($event)" />
            </div>
            <p class="text-gray13 fw-bold mt-4">
              {{ item.title }}
            </p>
          </a>
        </div>
      </vue-marquee-slider>
    </div>
    <div class="text-center mt-12">
      <router-link to="/activities">
        <button class="btn btn-lg btn-navy03 fw-bold">
          查看更多活動花絮
        </button>
      </router-link>
    </div>
  </section>
</template>
<style scoped>
.activity-item {
  width: 25vw;
}
.img-container {
  width: 100%;
  aspect-ratio: 392/392;
}
.img-container img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

@media (max-width: 800px) {
  .activity-item {
    width: 33vw;
  }
}
</style>
<script>
import { API } from "@/api.js";

import { VueMarqueeSlider } from "vue3-marquee-slider";
import "@/assets/vue3-marquee-slider.css";
export default {
  components: {
    VueMarqueeSlider,
  },
  data() {
    return {
      isPaused: false,
      isLoading: false,
      events: [],
      defaultImgUrl: '/default.svg'
    };
  },
  computed: {
    calculatedWidth() {
      const width = window.innerWidth;
      if (width <= 800) {
        return width * 0.33;
      } else if (width <= 1200) {
        return width * 0.25;
      } else {
        return width * 0.20;
      }
    },
  },
  methods: {
    async getEvents() {
      this.isLoading = true;
      const getEventsApi = `${API}/event`;
      try {
        const response = await this.axios.get(getEventsApi);
        if (response.data.status) {
          this.events = response.data.events;
        }
      } catch (error) {
        console.error("Failed", error);
      } finally {
        this.isLoading = false;
      }
    },
    pauseMarquee() {
      this.isPaused = true; // 鼠標懸停時設置為暫停
    },
    resumeMarquee() {
      this.isPaused = false; // 鼠標離開時恢復滾動
    },
    handleImageError(event) {
      event.target.src = "/default.svg"; // 預設圖片的路徑
    },
    
  },
  mounted() {
    this.getEvents();
  },
};
</script>
