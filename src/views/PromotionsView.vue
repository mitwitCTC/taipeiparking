<template>
  <TheLayout ref="layoutRef">
    <section id="promotions" class="promotions">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold mb-4 mb-md-0">
          {{ $t("pages.promotion.title") }}
        </p>
      </div>
      <h2 v-if="promotions.length < 1" class="text-center">目前尚無資料</h2>
      <div v-if="promotions.length > 1" class="container d-flex mt-8 mt-md-10">
        <ul class="row justify-content-between gap-1">
          <li
            v-for="(item, i) in paginatedPromotions"
            :key="i"
            class="col-12 col-md-5 mb-6"
          >
            <a :href="item.link_url" target="_blank" class="d-block">
              <div class="object-fit-container">
                <img :src="item.preview_url" alt="industryPromotions" />
              </div>
              <div class="d-flex align-items-center">
                <p class="text-navy04 fw-bold mt-5 me-1 me-md-2">
                  {{ item.title }}
                </p>
                <i class="bi bi-box-arrow-up-right text-navy02 fs-xl"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <ThePagination
         v-if="promotions.length > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-changed="handlePageChange"
      />
    </section>
  </TheLayout>
</template>

<style scoped>
.promotions {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.object-fit-container {
  max-width: 600px;
  aspect-ratio: 600/264;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
}

@media (max-width: 375px) {
  .object-fit-container {
    width: 166px;
    height: 138px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
}
</style>

<script>
import { API } from '@/api.js'
import TheLayout from "@/components/TheLayout.vue";
import ThePagination from "@/components/ThePagination.vue"

export default {
  data() {
    return {
      activeTabIndex: 0, // Track the active tab index
      promotions: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  components: {
    TheLayout,
    ThePagination,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.promotions.length / this.itemsPerPage);
    },
    paginatedPromotions() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.promotions.slice(start, end);
    },
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getPromotions();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = 98;
        const promotionsSection = this.$el.querySelector(".promotions");
        promotionsSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    async getPromotions() {
      const getPromotionsApi = `${API}/offer`
      try {
        const response = await this.axios.get(getPromotionsApi)
        if (response.data.status) {
          this.promotions = response.data.offers          
        }
      } catch (error) {
        console.error("Failed", error);
      }
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
