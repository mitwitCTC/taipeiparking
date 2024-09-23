<template>
  <TheLayout ref="layoutRef">
    <section id="announcements" class="announcements">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold mb-4 mb-md-0">
          {{ $t("pages.announcements.title") }}
        </p>
        <nav class="nav-container container overflow-x-auto">
          <div
            class="nav nav-tabs d-flex flex-nowrap"
            id="nav-tab"
            role="tablist"
          >
            <button
              v-for="(item, index) in announcementsTypes"
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
              @click="fetchAnnouncementsData(item.type, index)"
            >
              {{ item.type }}
            </button>
          </div>
        </nav>
      </div>
      <div class="tab-content container mt-4" id="nav-tabContent">
        <div
          v-for="(item, index) in announcementsTypes"
          :key="index"
          class="tab-pane fade"
          :class="{ 'show active': index === activeTabIndex }"
          :id="'nav-' + index"
          role="tabpanel"
          :aria-labelledby="'nav-' + index + '-tab'"
        >
          <!-- loading or no data -->
          <h2 v-if="loading" class="text-center mb-20">載入中...</h2>
          <h2
            v-else-if="announcementsData.length === 0"
            class="text-center mb-20"
          >
            目前尚無資料
          </h2>
          <ul v-else>
            <li
              v-for="(item, index) in paginatedAnnouncements"
              :key="index"
              class="announcement pt-10 pb-8 border-bottom"
              @click="goDetail(item.type, item.id)"
            >
              <p class="text-navy05 fw-bold fs-xl mb-5">{{ item.date }}</p>
              <div class="d-flex align-items-center gap-4">
                <span class="badge" :class="getTypeBadge(item.type)">
                  {{ item.type }}
                </span>
                <p class="text-navy03 fw-bold mb-0 text-truncate">
                  {{ item.title }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <ThePagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-changed="handlePageChange"
          />
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.announcements {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.tab-bg {
  position: relative;
}

.nav-container {
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

.nav-container::-webkit-scrollbar {
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
</style>

<script>
import { API } from "@/api.js";

import TheLayout from "@/components/TheLayout.vue";
import ThePagination from "@/components/ThePagination.vue";

export default {
  data() {
    return {
      announcementsTypes: null,
      activeTabIndex: 0, // Track the active tab index
      announcementsType: "",
      announcementsData: [],
      loading: false,
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
      return Math.ceil(this.announcementsData.length / this.itemsPerPage);
    },
    paginatedAnnouncements() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.announcementsData.slice(start, end);
    },
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getAnnouncementsTypes();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = 98;
        const announcementsSection = this.$el.querySelector(".announcements");
        announcementsSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    getAnnouncementsTypes() {
      this.announcementsTypes = [
        {
          type: "最新消息",
        },
        {
          type: "活動訊息",
        },
        {
          type: "會議訊息",
        },
        {
          type: "招標資訊",
        },
      ];
      // Fetch data for the first tab by default
      this.fetchAnnouncementsData(this.announcementsTypes[0].type, 0);
    },
    async fetchAnnouncementsData(type, index) {
      this.activeTabIndex = index; // Set the active tab index
      const fetchAnnouncementsDataApi = `${API}/report?type=${type}`;
      this.loading = true;
      try {
        const response = await this.axios.get(fetchAnnouncementsDataApi);
        if (response.data.status == true) {
          const reports = response.data.reports;
          // 檢查是否有公告資訊
          if (reports.length > 0) {
            this.announcementsType = reports[0].type;
            this.announcementsData = reports;
          } else {
            this.announcementsData = []; // 若無資料，清空 announcementsData
          }
        } else {
          this.announcementsData = []; // 若 API 回傳狀態為 false，清空 announcementsData
        }
      } catch (error) {
        console.error("Failed", error);
      } finally {
        this.loading = false;
      }
    },
    getTypeBadge(type) {
      switch (type) {
        case "最新消息":
          return "bg-navy03";
        case "活動訊息":
          return "bg-orange02";
        case "招標資訊":
          return "bg-green02";
        case "會議訊息":
          return "bg-black";
        default:
          return "";
      }
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    goDetail(type, id) {
      this.$router.push({ name: "announcement-detail", params: { id, type } });
    },
  },
};
</script>
