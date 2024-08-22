<template>
  <section id="activities" class="mt-16 mb-20">
    <h2 class="text-navy04 fs-xl6 fw-bold text-center mb-10">
      {{ $t("pages.index.activities") }}
    </h2>
    <div
      id="marquee-container"
      @mouseover="pauseMarquee"
      @mouseleave="resumeMarquee"
    >
      <vue-marquee-slider
        id="marquee-slider"
        :paused="isPaused"
        :speed="10000"
        :space="16"
        :width="392"
      >
        <div class="activity-item">
          <div class="img-container">
            <img src="/index/activities/img01.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第21屆第1次理監事暨會員聯誼</p>
        </div>
        <div class="activity-item">
          <div class="img-container">
            <img src="/index/activities/img02.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第21屆第2次理監事暨會員聯誼</p>
        </div>
        <div class="activity-item">
          <div class="img-container">
            <img src="/index/activities/img03.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第1屆第3次理監事聯席會議</p>
        </div>
        <div class="activity-item">
          <div class="img-container">
            <img src="/index/activities/img04.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第1屆第4次理監事聯席會議</p>
        </div>
        <div class="activity-item">
          <div class="img-container">
            <img src="/index/activities/img05.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第1屆第5次理監事聯席會議</p>
        </div>
      </vue-marquee-slider>
    </div>
    <div class="text-center mt-12">
      <button class="btn btn-lg btn-navy03 fw-bold">查看更多活動花絮</button>
    </div>
  </section>
</template>
<style>
.img-container {
  width: 392px;
  height: 392px;
}
.img-container img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
</style>
<script>
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "@/assets/vue3-marquee-slider.css";
export default {
  components: {
    VueMarqueeSlider,
  },
  data() {
    return {
      isPaused: false,
    };
  },
  methods: {
    pauseMarquee() {
      this.isPaused = true; // 鼠標懸停時設置為暫停
    },
    resumeMarquee() {
      this.isPaused = false; // 鼠標離開時恢復滾動
    },
  },
};
</script>
