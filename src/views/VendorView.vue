<template>
  <TheLayout ref="layoutRef">
    <section id="vendor" class="vendor">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold mb-4 mb-md-0">
          {{ $t("pages.vendor.title") }}
        </p>
        <nav class="container overflow-x-auto">
          <div
            class="nav nav-tabs d-flex flex-nowrap"
            id="nav-tab"
            role="tablist"
          >
            <button
              v-for="(vendor, index) in vendorTypes"
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
              @click="fetchVendorData(vendor.type, index)"
            >
              {{ vendor.type }}
            </button>
          </div>
        </nav>
      </div>
      <div class="tab-content container mt-4 mt-md-8" id="nav-tabContent">
        <div
          v-for="(item, index) in vendorTypes"
          :key="index"
          class="tab-pane fade"
          :class="{ 'show active': index === activeTabIndex }"
          :id="'nav-' + index"
          role="tabpanel"
          :aria-labelledby="'nav-' + index + '-tab'"
        >
          <p class="text-navy03 fs-xl">{{ vendorCount }} 間廠商</p>
          <div class="row">
            <div
              v-for="(vendor, index) in vendorData"
              :key="index"
              class="col-md-6 col-lg-4 col-xl-3 mb-4"
            >
              <a
                :href="vendor.link_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  class="h-100 d-flex flex-column justify-content-center align-items-center"
                >
                  <div class="img-container">
                    <img :src="vendor.preview_url" :alt="vendor.name" />
                  </div>
                  <p class="text-navy03 text-start fw-bold mt-2 mt-md-4">
                    {{ vendor.name }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.vendor {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.tab-bg {
  position: relative;
}

nav {
  position: absolute;
  bottom: 0;
  left: 17vw;
  width: 80%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

nav::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
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

.tab-pane {
  padding: 1rem;
}

.img-container {
  width: clamp(166px, 7.85vw + 66.2px, 288px);
  height: clamp(138px, 6.58vw + 53.4px, 240px);
  padding: clamp(36px, 1.55vw + 24.1px, 60px) clamp(40px, 2.06vw + 24.3px, 72px);
  box-shadow: 0px 0px 20px 0px #0000001a;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-container img {
  border-radius: 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 375px) {
  .img-container {
    width: 166px;
    height: 138px;
    padding: 36px 40px;
  }
}

@media (min-width: 1920px) {
  .img-container {
    width: 288px;
    height: 240px;
    padding: 60px 72px;
  }
}
</style>

<script>
import { API } from "@/api.js";
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      vendorTypes: null,
      activeTabIndex: 0, // Track the active tab index
      vendorType: "",
      vendorData: [],
      vendorCount: 0,
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getVendorTypes();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = 98;
        const vendorSection = this.$el.querySelector(".vendor");
        vendorSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    async getVendorTypes() {
      const getVendorsApi = `${API}/vendor`;
      try {
        const response = await this.axios.get(getVendorsApi);
        if (response.data.status == true) {
          this.vendorTypes = response.data.vendorTypes;
          this.fetchVendorData(this.vendorTypes[0].type, 0);
        }
      } catch (error) {
        console.error("Failed", error);
      }
    },
    async fetchVendorData(type, index) {
      this.activeTabIndex = index; // Set the active tab index
      const fetchVendorDataApi = `${API}/vendor/list?type=${type}`;
      try {
        const response = await this.axios.get(fetchVendorDataApi);
        if (response.data.status == true) {
          this.vendorType = response.data.vendorTypes[0].type;
          this.vendorData = response.data.vendorTypes[0].vendors;
          this.vendorCount = response.data.vendorTypes[0].count;
        }
      } catch (error) {
        console.error("Failed", error);
      }
    },
  },
};
</script>
