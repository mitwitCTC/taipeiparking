<template>
  <TheLayout ref="layoutRef">
    <section id="payment" class="payment">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold">
          {{ $t("pages.payment.title") }}
        </p>
        <nav class="d-flex container">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              v-for="(payment, index) in paymentTypes"
              :key="index"
              class="nav-link text-navy04 fs-xl fw-bold"
              :class="{ active: index === activeTabIndex }"
              :id="'nav-' + index + '-tab'"
              data-bs-toggle="tab"
              :data-bs-target="'#nav-' + index"
              type="button"
              role="tab"
              :aria-controls="'nav-' + index"
              :aria-selected="index === activeTabIndex ? 'true' : 'false'"
              @click="fetchPaymentData(payment.type, index)"
            >
              {{ payment.type }}
            </button>
          </div>
        </nav>
      </div>
      <div class="tab-content container mt-4 mt-md-16" id="nav-tabContent">
        <div
          v-for="(payment, index) in paymentTypes"
          :key="index"
          class="tab-pane fade"
          :class="{ 'show active': index === activeTabIndex }"
          :id="'nav-' + index"
          role="tabpanel"
          :aria-labelledby="'nav-' + index + '-tab'"
        >
          <div v-if="paymentType == '停車場（路外）'">
            <div v-if="isLoading">
              載入中...
            </div>
            <ul v-else class="row">
              <li
                class="col-12 col-md-6 mb-6"
                v-for="(item, itemIndex) in paymentData"
                :key="itemIndex"
              >
                <div
                  class="payment-item"
                >
                <a :href="item.payment_url" target="_blank" rel="noopener noreferrer">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex">
                      <div class="img-container me-6">
                        <img
                          :src="item.memberLogo"
                          alt="payment_logo"
                        />
                      </div>
                      <p class="text-navy03 fs-xl fw-bold mt-5 me-2">{{ item.memberName }}</p>
                    </div>
                      <i class="bi bi-box-arrow-up-right text-navy02"></i>
                    </div>
                  </a>
                  </div>
              </li>
            </ul>
          </div>
          <div v-else-if="paymentType === '縣市政府路邊'">
            <div v-if="isLoading">
              載入中...
            </div>
            <div v-else v-for="(area, areaIndex) in paymentData" :key="areaIndex">
              <h3 class="text-navy03 fs-xl3 fw-bold mt-4 mb-2">
                {{ area.area }}
              </h3>
              <ul class="row gap-2">
                <li
                  class="region bg-white col-12 col-md-4"
                  v-for="(region, regionIndex) in area.regions"
                  :key="regionIndex"
                >
                  <a :href="region.url" target="_blank" rel="noopener noreferrer">
                   <div
                    class="py-6 d-flex align-items-center justify-content-between"
                  >
                    <p
                      class="text-navy03 ps-20 fs-xl fw-bold text-center"
                      :class="`border-start border-3 border-${region.color}`"
                    >
                      {{ region.region }}
                    </p>
                    <div class="text-end">
                      <i class="bi bi-box-arrow-up-right text-navy02 fs-xl"></i>
                    </div>
                   </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p v-else>{{ payment.type }} 繳費連結建置中...</p>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.payment {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.tab-bg {
  position: relative;
}
nav {
  position: absolute;
  bottom: 0;
  left: 17vw;
}

.nav-tabs,
.nav-link,
.nav-link.active {
  background: none;
  border: none;
}

.nav-tabs:hover {
  border: none;
}

.nav-link.active {
  border-bottom: 6px solid #133155;
}

/* New CSS to prevent tab content from moving down */
.tab-content {
  min-height: 200px; /* Adjust the min-height to suit your needs */
}

.tab-pane {
  padding: 1rem; /* Optional padding for each tab pane */
}

.payment-item {
  max-width: 30vw;
  border: 1px solid #E6E6E6;
  background: #FFFFFF;
  border-radius: 6px;
  padding: 0 24px;
}

.region {
  max-width: 20vw;
  border: 1px solid#E6E6E6;
}

.img-container {
  width: 72px;
  height: 72px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media (max-width: 800px) {
  .payment-item, .region {
    max-width: 90vw;
  }
  nav {
    left: 0vw;
  }
}
</style>

<script>
import { API } from "@/api.js";

import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      paymentTypes: null,
      activeTabIndex: 0, // Track the active tab index
      paymentType: "",
      paymentData: [],
      isLoading: false,
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getPaymentTypes();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = 98;
        const paymentSection = this.$el.querySelector(".payment");
        paymentSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    getPaymentTypes() {
      this.paymentTypes = [
        { type: "停車場（路外）" },
        { type: "縣市政府路邊" },
      ];
      // Fetch data for the first tab by default
      this.fetchPaymentData(this.paymentTypes[0].type, 0);
    },
    async fetchPaymentData(type, index) {
      this.activeTabIndex = index; // Set the active tab index
      if (type == "停車場（路外）") {
        this.paymentType = "停車場（路外）";
        this.isLoading = true;
        const getParkingPaymentApi = `${API}/payment/parking`;
        try {
          const response = await this.axios.get(getParkingPaymentApi);
          if (response.data.status) {
            this.paymentData = response.data.payments;
          }
        } catch (error) {
          console.error("Failed", error);
        } finally {
          this.isLoading = false;
        }
      } else if (type == "縣市政府路邊") {
        this.paymentType = "縣市政府路邊";
        this.isLoading = true;
        const getParkingPaymentApi = `${API}/payment/area`;
        try {
          const response = await this.axios.get(getParkingPaymentApi);
          if (response.data.status) {
            this.paymentData = response.data.parking_payments;
          }
        } catch (error) {
          console.error("Failed", error);
        } finally {
          this.isLoading = false;
        }
      }
    },
  },
};
</script>
