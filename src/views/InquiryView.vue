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
                  @change="handleTabChange, getInquiryData(value)"
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
                  @click="activateTab('download'), getInquiryData('資料下載')"
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
                  @click="activateTab('parkingLotRegulations', getInquiryData('停車場法規'))"
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
                  @click=" activateTab('industryRegulations',getInquiryData('產業法規'))"
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
                  @click="activateTab('register', getInquiryData('登記相關作業'))"
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
                <!-- loading or no data -->
                <h2 v-if="isLoading" class="text-center mb-20">載入中...</h2>
                <h2
                  v-else-if="inquiryData.length == 0"
                  class="text-center mb-20"
                >
                  目前尚無資料
                </h2>
                <ul v-else>
                  <li
                    v-for="(item, index) in inquiryData"
                    :key="index"
                    class="inquiry-item bg-yellow01 mb-4 p-4"
                  >
                    <a :href="item.url" target="_blank" class="link-container">
                      <span
                        class="text-nowrap type-badge text-white bg-navy03 fs-sm fw-bold py-2 px-4 me-6"
                      >
                        {{ item.type }}
                      </span>
                      <span class="text-navy03 fs-md fw-bold">
                        {{ item.name }}
                      </span>
                      <img
                        class="inquiry-icon"
                        src="/icons/download.svg"
                        alt="download"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-parkingLotRegulations"
                role="tabpanel"
                aria-labelledby="v-pills-parkingLotRegulations-tab"
              >
                <!-- loading or no data -->
                <h2 v-if="isLoading" class="text-center mb-20">載入中...</h2>
                <h2
                  v-else-if="inquiryData.length == 0"
                  class="text-center mb-20"
                >
                  目前尚無資料
                </h2>
                <ul v-else>
                  <li
                    v-for="(item, index) in inquiryData"
                    :key="index"
                    class="inquiry-item bg-yellow01 mb-4 p-4"
                  >
                    <a :href="item.url" target="_blank" class="link-container">
                      <span
                        class="text-nowrap type-badge text-white bg-navy03 fs-sm fw-bold py-2 px-4 me-6"
                      >
                        {{ item.type }}
                      </span>
                      <span class="text-navy03 fs-md fw-bold">
                        {{ item.name }}
                      </span>
                      <img
                        class="inquiry-icon"
                        src="/icons/link.svg"
                        alt="download"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-industryRegulations"
                role="tabpanel"
                aria-labelledby="v-pills-industryRegulations-tab"
              >
                <!-- loading or no data -->
                <h2 v-if="isLoading" class="text-center mb-20">載入中...</h2>
                <h2
                  v-else-if="inquiryData.length == 0"
                  class="text-center mb-20"
                >
                  目前尚無資料
                </h2>
                <ul v-else>
                  <li
                    v-for="(item, index) in inquiryData"
                    :key="index"
                    class="inquiry-item bg-yellow01 mb-4 p-4"
                  >
                    <a :href="item.url" target="_blank" class="link-container">
                      <span
                        class="text-nowrap type-badge text-white bg-navy03 fs-sm fw-bold py-2 px-4 me-6"
                      >
                        {{ item.type }}
                      </span>
                      <span class="text-navy03 fs-md fw-bold">
                        {{ item.name }}
                      </span>
                      <img
                        class="inquiry-icon"
                        src="/icons/download.svg"
                        alt="download"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-register"
                role="tabpanel"
                aria-labelledby="v-pills-register-tab"
              >
                <!-- loading or no data -->
                <h2 v-if="isLoading" class="text-center mb-20">載入中...</h2>
                <h2
                  v-else-if="inquiryData.length == 0"
                  class="text-center mb-20"
                >
                  目前尚無資料
                </h2>
                <ul v-else>
                  <li
                    v-for="(item, index) in inquiryData"
                    :key="index"
                    class="inquiry-item bg-yellow01 mb-4 p-4"
                  >
                    <a :href="item.url" target="_blank" class="link-container">
                      <span
                        class="text-nowrap type-badge text-white bg-navy03 fs-sm fw-bold py-2 px-4 me-6"
                      >
                        {{ item.type }}
                      </span>
                      <span class="text-navy03 fs-md fw-bold">
                        {{ item.name }}
                      </span>
                      <img
                        class="inquiry-icon"
                        src="/icons/download.svg"
                        alt="download"
                      />
                    </a>
                  </li>
                </ul>
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

.inquiry-item {
  border-radius: 12px;
}

.link-container {
  display: flex;
  align-items: center;
}

.type-badge {
  border-radius: 8px;
}

.inquiry-icon {
  background: white;
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  margin-left: auto;
}

/* 將序列轉為中文一、二、三 */
.decimal-ul {
  list-style: none; /* Remove the default list style */
  padding: 0; /* Optional: remove default padding */
  counter-reset: custom-counter; /* Initialize a custom counter */
}

.decimal-ul li {
  counter-increment: custom-counter; /* Increment the custom counter */
  position: relative; /* Set position to relative for positioning pseudo-element */
  padding-left: 2em; /* Add some space for the counter text */
}

.decimal-ul li::before {
  content: counter(custom-counter, cjk-ideographic) "、"; /* Use CJK ideographic numbering */
  position: absolute; /* Position pseudo-element */
  left: 0; /* Align to the left */
}

/* 停車場法規開合效果 */
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.collapse-enter-to,
.collapse-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>

<script>
import { API } from "@/api.js";

import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      selectedTab: "download", // default selected tab
      inquiryData: [],
      chapterOneOpen: false,
      chapterTwoOpen: false,
      isLoading: false,
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getInquiryData("資料下載");
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = 98;
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
    async getInquiryData(type) {
      const getInquiryDataApi = `${API}/download?type=${type}`;
      this.isLoading = true;
      try {
        const response = await this.axios.get(getInquiryDataApi);        
        if (response.data.status == true) {
          this.inquiryData = response.data.files;
        } else {
          this.inquiryData = []; // 若 API 回傳狀態為 false，清空 inquiryData
        }
      } catch (error) {
        console.error("Failed", error);
      } finally {
        this.isLoading = false;
      }
    },
    toggleChapter(chapter) {
      if (chapter === 'chapterOne') {
        this.chapterOneOpen = !this.chapterOneOpen;
      } else if (chapter === 'chapterTwo') {
        this.chapterTwoOpen = !this.chapterTwoOpen;
      }
    },
  },
};
</script>
