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
          <!-- Render payment data -->
          <div v-if="paymentData.length > 0">
            <ul class="row">
              <li class="col-12 col-md-6 mb-6" v-for="(item, itemIndex) in paymentData" :key="itemIndex">
                <div class="payment-item d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <img class="me-6" :src="item.preview_url" alt="payment_logo">
                    <p class="mt-5">{{ item.name }}</p>
                  </div>
                  <i class="bi bi-box-arrow-up-right"></i>
                </div>
              </li>
            </ul>
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
  left: 10vw;
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

.payment-item{
  max-width: 600px;
  border: 1px solid #E6E6E6;
  background: #FFFFFF;
  border-radius: 6px;
  padding: 0 24px;
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      paymentTypes: [],
      activeTabIndex: 0, // Track the active tab index
      paymentData: [],
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
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
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
    fetchPaymentData(type, index) {
      this.activeTabIndex = index; // Set the active tab index
      if (type == "停車場（路外）") {
        this.paymentData = [
          {
            name: "應安 168 停車",
            preview_url: "/payment/payment01.svg",
            link_url: "",
          },
          {
            name: "力揚停車",
            preview_url: "/payment/payment02.svg",
            link_url: "",
          },
          {
            name: "台灣聯通",
            preview_url: "/payment/payment03.svg",
            link_url: "",
          },
          {
            name: "富山停車",
            preview_url: "/payment/payment04.svg",
            link_url: "",
          },
          {
            name: "TPS 便利停車場",
            preview_url: "/payment/payment05.svg",
            link_url: "",
          },
          {
            name: "山發物業",
            preview_url: "/payment/payment06.svg",
            link_url: "",
          },
          {
            name: "國雲停車",
            preview_url: "/payment/payment07.svg",
            link_url: "",
          },
          {
            name: "JSP 正好停",
            preview_url: "/payment/payment08.svg",
            link_url: "",
          },
          {
            name: "uTagGo",
            preview_url: "/payment/payment10.svg",
            link_url: "",
          },
        ];
      } else {
        this.paymentData = [];
      }
    },
  },
};
</script>
