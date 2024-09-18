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
                        class="type-badge text-white bg-navy03 fs-sm fw-bold py-2 px-4 me-6"
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
                <div v-else>
                  {{ inquiryData }}
                </div>
                <!-- 停車場法規 第一章 -->
                <!-- <section class="mb-10">
                  <div class="text-white fw-bold bg-navy03 py-6 ps-6 rounded-3">
                    <span class="d-flex justify-content-between align-items-center px-3" @click="toggleChapter('chapterOne')">
                      <span>第一章 總則</span>
                      <img class="bg-white p-2 rounded-circle" :src="chapterOneOpen ? '/icons/triangle.svg' : '/icons/upsidedown_triangle.svg'" alt="toggle-icon">
                    </span>
                  </div>
                  <transition name="collapse">
                    <ul v-if="chapterOneOpen" class="bg-blue01 p-6 mt-4 text-navy03 rounded-3">
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第1條</span>
                          <span class="col-6 col-md-8">
                            為加強停車場之規劃、設置、經營、管理及獎助，以增進交通流暢，改善交通秩序，特制定本法。本法未規定者，適用其他法律之規定。
                          </span>
                        </p>
                      </li>
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第2條</span>
                          <span class="col-6 col-md-8">
                            本法所用名詞定義如左：<br />
                            <ul class="decimal-ul">
                              <li>停車場：指依法令設置供車輛停放之場所。</li>
                              <li>
                                路邊停車場：指以道路部分路面劃設，供公眾停放車輛之場所。
                              </li>
                              <li>
                                路外停車場：指在道路之路面外，以平面式、立體式、機械式或塔臺式等所設，供停放車輛之場所。
                              </li>
                              <li>
                                都市計畫停車場：指依都市計畫法令所劃設公共停車場用地興闢後，供作公眾停放車輛之場所。
                              </li>
                              <li>
                                建築附設停車空間：指建築物依建築法令規定，應附設專供車輛停放之空間。
                              </li>
                              <li>
                                停車場經營業：指經主管機關發給停車場登記證，經營路外公共停車場之事業。
                              </li>
                            </ul>
                          </span>
                        </p>
                      </li>
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第3條</span>
                          <span class="col-6 col-md-8">
                            本法所稱主管機關︰在中央為交通部；在直轄市為直轄市政府；在縣(市) 為縣 (市) 政府。
                          </span>
                        </p>
                      </li>
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第4條</span>
                          <span class="col-6 col-md-8">
                            地方主管機關為籌措停車場興建、營運資金及獎助民營路外公共停車場，以提升其經營服務水準，得由左列各款籌措專款，依有關規定設置停車場作業基金：
                            <ul class="decimal-ul">
                              <li>地方政府之一般財源。</li>
                              <li>上級政府補助。</li>
                              <li>汽車燃料使用費部分收入。</li>
                              <li>交通違規停車罰鍰收入。</li>
                              <li>路邊及公有路外公共停車場之停車費收入。</li>
                              <li>違規停車之移置費及保管費收入。</li>
                              <li>民間機構繳交之權利金及租金收入。</li>
                              <li>依建築法第一百零二條之一規定，建築物附設停車空間繳納代金收入。</li>
                              <li>公有停車場經營附屬事業收入。</li>
                              <li>基金之孳息收入。</li>
                              <li>其他收入。</li>
                            </ul>
                            <span>
                              前項停車場作業基金，得設置基金管理委員會，辦理其收支保管及運用事項；其收支保管及運用辦法，由地方主管機關定之。
                            </span>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </transition>
                </section> -->
                <!-- 停車場法規 第二章 -->
                <!-- <section class="mb-10">
                  <div class="text-white fw-bold bg-navy03 py-6 ps-6 rounded-3">
                    <span class="d-flex justify-content-between align-items-center px-3" @click="toggleChapter('chapterTwo')">
                      <span>第二章 路邊停車場</span>
                      <img class="bg-white p-2 rounded-circle" :src="chapterTwoOpen ? '/icons/triangle.svg' : '/icons/upsidedown_triangle.svg'" alt="toggle-icon">
                    </span>
                  </div>
                  <transition name="collapse">
                    <ul v-if="chapterTwoOpen" class="bg-blue01 p-6 mt-4 text-navy03 rounded-3">
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第12條</span>
                          <span class="col-6 col-md-8">
                            地方主管機關為因應停車之需要，得視道路交通狀況，設置路邊停車場，並得向使用者收取停車費。<br />
                            依前項設置之路邊停車場，應隨路外停車場之增設或道路交通之密集狀況予以檢討廢止或在交通尖峰時段限制停車，以維道路原有之功能。
                          </span>
                        </p>
                      </li>
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第13條</span>
                          <span class="col-6 col-md-8">
                            地方主管機關應於路邊停車場開放使用前，將設置地點、停車種類、收費時間、收費方式、費率及其他規定事項公告週知。變更及廢止時，亦同。
                          </span>
                        </p>
                      </li>
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第14條</span>
                          <span class="col-6 col-md-8">
                            路邊停車場之費率，應依第三十一條規定定之；其停車費得以計時或計次方式收取，並得視地區交通狀況，採累進方式收費或限制停車時間。
                          </span>
                        </p>
                      </li>
                      <li>
                        <p class="row">
                          <span class="fw-bold col-3 col-md-2">第15條</span>
                          <span class="col-6 col-md-8">
                            地方主管機關為整頓交通及停車秩序，維護住宅區公共安全，得以標示禁止停車或劃設停車位等方式全面整理卷道。
                          </span>
                        </p>
                      </li>
                    </ul>
                  </transition>
                </section> -->
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
                        class="type-badge text-white bg-navy03 fs-sm fw-bold py-2 px-4 me-6"
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
                        class="type-badge text-white bg-navy03 fs-sm fw-bold py-2 px-4 me-6"
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
