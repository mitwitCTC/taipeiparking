<template>
  <TheLayout ref="layoutRef">
    <section id="inquiry" class="inquiry">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold">
          {{ $t("pages.download.title") }}
        </p>
      </div>
      <div class="container mt-4 mt-md-16">
        <div class="container mt-4 mt-md-16">
          <div class="d-flex flex-column flex-md-row align-items-start">
            <!-- Tabs/Dropdown -->
            <div class="col-12 col-md-3 me-md-3 mb-3 mb-md-0">
              <!-- Dropdown for smaller screens -->
              <div class="d-block d-md-none">
                <select
                  class="form-select nav-dropdown"
                  @change="handleTabChange"
                  :style="getDropdownStyle()"
                >
                  <option value="download">
                    {{ $t("pages.download.tabs.download") }}
                  </option>
                  <option value="parkingLotRegulations">
                    {{ $t("pages.download.tabs.parkingLotRegulations") }}
                  </option>
                  <option value="industryRegulations">
                    {{ $t("pages.download.tabs.industryRegulations") }}
                  </option>
                  <option value="register">
                    {{ $t("pages.download.tabs.register") }}
                  </option>
                </select>
              </div>
              <!-- Tabs for larger screens -->
              <div
                class="nav flex-column nav-pills me-3 d-none d-md-flex"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link text-navy05 active"
                  id="v-pills-download-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-download"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-download"
                  aria-selected="true"
                  @click="activateTab('download')"
                >
                  <img src="/icons/inquiry1.svg" alt="icon" />
                  {{ $t("pages.download.tabs.download") }}
                </button>
                <button
                  class="nav-link text-navy05"
                  id="v-pills-parkingLotRegulations-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-parkingLotRegulations"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-parkingLotRegulations"
                  aria-selected="false"
                  @click="activateTab('parkingLotRegulations')"
                >
                  <img src="/icons/inquiry2.svg" alt="icon" />
                  {{ $t("pages.download.tabs.parkingLotRegulations") }}
                </button>
                <button
                  class="nav-link text-navy05"
                  id="v-pills-industryRegulations-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-industryRegulations"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-industryRegulations"
                  aria-selected="false"
                  @click="activateTab('industryRegulations')"
                >
                  <img src="/icons/inquiry3.svg" alt="icon" />
                  {{ $t("pages.download.tabs.industryRegulations") }}
                </button>
                <button
                  class="nav-link text-navy05"
                  id="v-pills-register-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-register"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-register"
                  aria-selected="false"
                  @click="activateTab('register')"
                >
                  <img src="/icons/inquiry4.svg" alt="icon" />
                  {{ $t("pages.download.tabs.register") }}
                </button>
              </div>
            </div>
            <!-- Tab content -->
            <div class="tab-content col-12 col-md-8" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-download"
                role="tabpanel"
                aria-labelledby="v-pills-download-tab"
              >
                資料下載
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-parkingLotRegulations"
                role="tabpanel"
                aria-labelledby="v-pills-parkingLotRegulations-tab"
              >
                停車場法規
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-industryRegulations"
                role="tabpanel"
                aria-labelledby="v-pills-industryRegulations-tab"
              >
                產業法規
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-register"
                role="tabpanel"
                aria-labelledby="v-pills-register-tab"
              >
                登記相關作業
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.inquiry {
  padding-bottom: clamp(120px, 5.16vw + 33.1px, 160px);
}

.nav-link {
  display: flex;
  align-items: center;
  max-width: 432px;
}

.nav-link img {
  margin-right: 16px;
}

.nav-pills .nav-link.active {
  background-color: #ffdc83;
  color: #04172e;
}

.nav-dropdown {
  width: 100%;
  padding: 12px;
}

.nav-dropdown option {
  padding: 8px;
  background-color: white;
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      selectedTab: "download", // default selected tab
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const inquirySection = this.$el.querySelector(".inquiry");
        inquirySection.style.paddingTop = `${headerHeight}px`;
      }
    },
    handleTabChange(event) {
      const value = event.target.value;
      this.selectedTab = value;
      this.activateTab(value);
    },
    activateTab(tabId) {
      // Update selectedTab and activate the corresponding tab content
      this.selectedTab = tabId;
      document.querySelectorAll(".tab-pane").forEach((tab) => {
        tab.classList.remove("show", "active");
      });
      document
        .getElementById(`v-pills-${tabId}`)
        .classList.add("show", "active");
    },
    getDropdownStyle() {
      // Return the style object based on the selected tab
      return {
        backgroundColor:
          this.selectedTab === "download"
            ? "#FFDC83"
            : this.selectedTab === "parkingLotRegulations"
            ? "#FFDC83"
            : this.selectedTab === "industryRegulations"
            ? "#FFDC83"
            : this.selectedTab === "register"
            ? "#FFDC83"
            : "white",
        color: "#04172E",
      };
    },
  },
};
</script>
