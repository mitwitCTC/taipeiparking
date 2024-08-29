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
          <ul>
            <li
              v-for="(item, index) in paginatedAnnouncements"
              :key="index"
              class="announcement pt-10 pb-8 border-bottom"
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
  left: 10vw;
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
import TheLayout from "@/components/TheLayout.vue";
import ThePagination from "@/components/ThePagination.vue";

export default {
  data() {
    return {
      announcementsTypes: null,
      activeTabIndex: 0, // Track the active tab index
      announcementsType: "",
      announcementsData: [],
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
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
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
    fetchAnnouncementsData(type, index) {
      this.activeTabIndex = index; // Set the active tab index
      if (type == "最新消息") {
        this.announcementsType = "最新消息";
        this.announcementsData = [
          {
            id: 1,
            type: "最新消息",
            title:
              "2025雙北世界壯年運動會，即日起調查報名人數，請於本年5/12下午6時前回覆本會",
            date: "2024.12.10",
          },
          {
            id: 2,
            type: "最新消息",
            title:
              "內政部消防署「建築物附屬停車空間電動車輛充電使用安全指引」.第3點修正規定1份,自即日生效,請會員週知",
            date: "2024.12.05",
          },
          {
            id: 3,
            type: "最新消息",
            title:
              "為達成本市2050淨零減碳目標，請本會各業者踴躍向本府產業發展局申請「臺北市服務業汰換節能設備補助」，節省機構（事業）用電量一案，請查照",
            date: "2024.12.01",
          },
          {
            id: 4,
            type: "最新消息",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.21",
          },
          {
            id: 5,
            type: "最新消息",
            title: "國立台北商業大學附設空中進修學院113年6月1日起網路報名",
            date: "2024.11.18",
          },
          {
            id: 6,
            type: "最新消息",
            title:
              "2025雙北世界壯年運動會，即日起調查報名人數，請於本年5/12下午6時前回覆本會",
            date: "2024.12.10",
          },
          {
            id: 7,
            type: "最新消息",
            title:
              "內政部消防署「建築物附屬停車空間電動車輛充電使用安全指引」.第3點修正規定1份,自即日生效,請會員週知",
            date: "2024.12.05",
          },
          {
            id: 8,
            type: "最新消息",
            title:
              "為達成本市2050淨零減碳目標，請本會各業者踴躍向本府產業發展局申請「臺北市服務業汰換節能設備補助」，節省機構（事業）用電量一案，請查照",
            date: "2024.12.01",
          },
          {
            id: 9,
            type: "最新消息",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.21",
          },
          {
            id: 10,
            type: "最新消息",
            title: "國立台北商業大學附設空中進修學院113年6月1日起網路報名",
            date: "2024.11.18",
          },
        ];
      } else if (type == "活動訊息") {
        this.announcementsType = "活動訊息";
        this.announcementsData = [
          {
            id: 11,
            type: "活動訊息",
            title:
              "2025雙北世界壯年運動會，即日起調查報名人數，請於本年5/12下午6時前回覆本會",
            date: "2024.12.10",
          },
          {
            id: 12,
            type: "活動訊息",
            title:
              "內政部消防署「建築物附屬停車空間電動車輛充電使用安全指引」.第3點修正規定1份,自即日生效,請會員週知",
            date: "2024.12.05",
          },
          {
            id: 13,
            type: "活動訊息",
            title:
              "為達成本市2050淨零減碳目標，請本會各業者踴躍向本府產業發展局申請「臺北市服務業汰換節能設備補助」，節省機構（事業）用電量一案，請查照",
            date: "2024.12.01",
          },
          {
            id: 14,
            type: "活動訊息",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.21",
          },
          {
            id: 15,
            type: "活動訊息",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.18",
          },
        ];
      } else if (type == "會議訊息") {
        this.announcementsType = "會議訊息";
        this.announcementsData = [
          {
            id: 16,
            type: "會議訊息",
            title:
              "2025雙北世界壯年運動會，即日起調查報名人數，請於本年5/12下午6時前回覆本會",
            date: "2024.12.10",
          },
          {
            id: 17,
            type: "會議訊息",
            title:
              "內政部消防署「建築物附屬停車空間電動車輛充電使用安全指引」.第3點修正規定1份,自即日生效,請會員週知",
            date: "2024.12.05",
          },
          {
            id: 18,
            type: "會議訊息",
            title:
              "為達成本市2050淨零減碳目標，請本會各業者踴躍向本府產業發展局申請「臺北市服務業汰換節能設備補助」，節省機構（事業）用電量一案，請查照",
            date: "2024.12.01",
          },
          {
            id: 19,
            type: "會議訊息",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.21",
          },
          {
            id: 20,
            type: "會議訊息",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.18",
          },
        ];
      } else if (type == "招標資訊") {
        this.announcementsType = "招標資訊";
        this.announcementsData = [
          {
            id: 21,
            type: "招標資訊",
            title:
              "2025雙北世界壯年運動會，即日起調查報名人數，請於本年5/12下午6時前回覆本會",
            date: "2024.12.10",
          },
          {
            id: 22,
            type: "招標資訊",
            title:
              "內政部消防署「建築物附屬停車空間電動車輛充電使用安全指引」.第3點修正規定1份,自即日生效,請會員週知",
            date: "2024.12.05",
          },
          {
            id: 23,
            type: "招標資訊",
            title:
              "為達成本市2050淨零減碳目標，請本會各業者踴躍向本府產業發展局申請「臺北市服務業汰換節能設備補助」，節省機構（事業）用電量一案，請查照",
            date: "2024.12.01",
          },
          {
            id: 24,
            type: "招標資訊",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.21",
          },
          {
            id: 25,
            type: "招標資訊",
            title:
              "2024台北際防火防災應用展專題演講訂於4月26日下午1:35-2:05假南港展覽館1樓1300會議室舉行",
            date: "2024.11.18",
          },
        ];
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
      console.log(this.currentPage);
    },
  },
};
</script>
