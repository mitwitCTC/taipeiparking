<template>
  <TheLayout ref="layoutRef">
    <section id="vendor" class="vendor">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold">
          {{ $t("pages.vendor.title") }}
        </p>
        <nav class="d-flex container-fluid">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
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
              <div
                class="h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div>
                  <div class="img-container">
                    <img :src="vendor.preview_url" :alt="vendor.name" />
                  </div>
                  <p class="text-navy03 text-start fw-bold mt-2 mt-md-4">
                    {{ vendor.name }}
                  </p>
                </div>
              </div>
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
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const vendorSection = this.$el.querySelector(".vendor");
        vendorSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    getVendorTypes() {
      this.vendorTypes = [
        {
          type: "收費系統",
          count: 8,
        },
        {
          type: "監控系統",
          count: 4,
        },
        {
          type: "附屬設施",
          count: 1,
        },
        {
          type: "資訊服務",
          count: 4,
        },
        {
          type: "金融及保險",
          count: 1,
        },
      ];
      // Fetch data for the first tab by default
      this.fetchVendorData(this.vendorTypes[0].type, 0);
    },
    fetchVendorData(type, index) {
      this.activeTabIndex = index; // Set the active tab index
      if (type == "收費系統") {
        this.vendorType = "收費系統";
        this.vendorData = [];
        this.vendorCount = 0;
      } else if (type == "監控系統") {
        this.vendorType = "監控系統";
        this.vendorData = [
          {
            name: "慶立工程",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/415517759_669835842002689_892192799853392770_n.jpg",
            link_url: "https://www.facebook.com/profile.php?id=100069288366635",
          },
          {
            name: "test",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/00007-2275314969.png",
            link_url: "https://google.com",
          },
          {
            name: "test",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/00011-1101207267.png",
            link_url: "https://google.com",
          },
          {
            name: "TEST3",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/00011-1101207267.png",
            link_url: "http://www.youtube.com",
          },
        ];
        this.vendorCount = 4;
      } else if (type == "附屬設施") {
        this.vendorType = "附屬設施";
        this.vendorData = [
          {
            name: "TEST5",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/album/1721759094251.jpg",
            link_url: null,
          },
        ];
        this.vendorCount = 1;
      } else if (type == "資訊服務") {
        this.vendorType = "資訊服務";
        this.vendorData = [
          {
            name: "車麻吉",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/下載.png",
            link_url: "https://carmochi.com/",
          },
          {
            name: "NewVendorName",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/test.png",
            link_url: "https://example.com/new-link",
          },
          {
            name: "Updated Vendor Name",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/test.png",
            link_url: "https://example.com/new-link",
          },
          {
            name: "TEST6",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/album/1721759094251.jpg",
            link_url: null,
          },
        ];
        this.vendorCount = 4;
      } else if (type == "金融及保險") {
        this.vendorType = "金融及保險";
        this.vendorData = [
          {
            name: "34534534543",
            preview_url:
              "https://t01.mitwit-cre.com.tw/f/test/vendor/202408/00012-1101207268.png",
            link_url: "http://www.youtube.com",
          },
        ];
        this.vendorCount = 1;
      }
    },
  },
};
</script>
