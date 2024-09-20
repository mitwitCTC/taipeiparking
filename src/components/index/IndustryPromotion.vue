<template>
  <section id="industry-promotion" class="container mt-16">
    <h2 class="text-navy04 fs-xl6 fw-bold text-center mb-10">
      {{ $t("pages.index.industry promotion") }}
    </h2>
    <h2 v-if="industryPromotions.length < 1" class="text-center mb-20">
      目前尚無資料
    </h2>
    <!-- Desktop Carousel (md and above) -->
    <div v-if="industryPromotions.length >= 1"
      id="carouselDesktop"
      class="carousel slide d-none d-md-block"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(chunk, index) in desktopPromotions"
          :key="'desktop-' + index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <ul class="row justify-content-center">
            <li
              v-for="(item, i) in chunk"
              :key="i"
              class="col-12 col-md-4 mb-6"
            >
              <a
                :href="item.link_url"
                target="_blank"
                class="d-block text-center"
              >
                <div class="object-fit-container mx-auto">
                  <img :src="item.preview_url" alt="industryPromotions" />
                </div>
                <p class="text-navy04 fw-bold mt-5">{{ item.title }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="carousel-control-prev custom-carousel-control"
        type="button"
        data-bs-target="#carouselDesktop"
        data-bs-slide="prev"
      >
        <img src="/icons/btn_prePage.svg" alt="btn_prePage">
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next custom-carousel-control"
        type="button"
        data-bs-target="#carouselDesktop"
        data-bs-slide="next"
      >
        <img src="/icons/btn_nextPage.svg" alt="btn_nextPage">
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Mobile Carousel (below md) -->
    <div v-if="industryPromotions.length >= 1"
      id="carouselMobile"
      class="carousel slide d-block d-md-none"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(item, index) in mobilePromotions"
          :key="'mobile-' + index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <ul class="row justify-content-center">
            <li :key="index" class="col-12 mb-6">
              <a
                :href="item[0].link_url"
                target="_blank"
                class="d-block text-center"
              >
                <div class="object-fit-container mx-auto">
                  <img :src="item[0].preview_url" alt="industryPromotions" />
                </div>
                <p class="text-navy04 fw-bold mt-5">{{ item[0].title }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselMobile"
        data-bs-slide="prev"
      >
        <img src="/icons/btn_prePage.svg" alt="btn_prePage">
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselMobile"
        data-bs-slide="next"
      >
        <img src="/icons/btn_nextPage.svg" alt="btn_nextPage">
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>
<style scoped>
.object-fit-container {
  width: 20vw;
  aspect-ratio: 392/264;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
}

.carousel-control-prev {
  position: absolute;
  left: -7.5%;
  top: 7.5vw;
  transform: translateY(-50%);
}

.carousel-control-next {
  position: absolute;
  right: -7.5%;
  top: 7.5vw;
  transform: translateY(-50%);
}

.carousel-inner {
  position: relative;
}

@media (max-width: 800px) {
  .object-fit-container {
    width: 70vw;
    aspect-ratio: 392/264;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }

  .carousel-inner {
    position: relative;
  }

  .carousel-control-prev {
    position: absolute;
    left: -3.5%;
    top: 25vw;
    transform: translateY(-50%);
  }

  .carousel-control-next {
    position: absolute;
    right: -3.5%;
    top: 25vw;
    transform: translateY(-50%);
  }
}

@media (max-width: 575px) {
  .carousel-inner {
    position: relative;
  }

  .carousel-control-prev {
    position: absolute;
    left: 5.5%;
    top: 25vw;
    transform: translateY(-50%);
  }

  .carousel-control-next {
    position: absolute;
    right: 5.5%;
    top: 25vw;
    transform: translateY(-50%);
  }
}

@media (min-width: 768px) and (max-width: 800px) {
  #carouselDesktop {
    display: none !important;
  }
  #carouselMobile {
    display: block !important;
  }

  .carousel-inner {
    position: relative;
  }

  .carousel-control-prev {
    position: absolute;
    left: -7.5%;
    top: 25vw;
    transform: translateY(-50%);
  }

  .carousel-control-next {
    position: absolute;
    right: -7.5%;
    top: 25vw;
    transform: translateY(-50%);
  }
}
</style>
<script>
import { API } from "@/api.js";
export default {
  data() {
    return {
      industryPromotions: [],
    };
  },
  methods: {
    async getIndustryPromotions() {
      const getIndustryPromotionsApi = `${API}/offer`;
      try {
        const response = await this.axios.get(getIndustryPromotionsApi);
        if (response.data.status == true) {
          this.industryPromotions = response.data.offers;
        }
      } catch (error) {
        console.error("Failed", error);
      }
    },
    chunkArray(array, chunkSize) {
      const chunks = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
  computed: {
    desktopPromotions() {
      return this.chunkArray(this.industryPromotions.slice(0, 6), 3);
    },
    mobilePromotions() {
      return this.chunkArray(this.industryPromotions.slice(0, 6), 1);
    },
  },
  mounted() {
    this.getIndustryPromotions();
  },
};
</script>
