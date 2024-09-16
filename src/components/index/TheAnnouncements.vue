<template>
  <div class="bg-blue01">
    <section id="announcements" class="container pt-16 pb-20">
      <h2 class="text-navy04 fs-xl6 fw-bold text-center mb-10">
        {{ $t("pages.index.announcements") }}
      </h2>
      <h2 v-if="announcements.length < 1" class="text-center">目前尚無資料</h2>
      <ul>
        <li
          v-for="(item, index) in announcements"
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
      <div class="text-center mt-12">
        <button class="btn btn-navy03 btn-lg" :disabled="announcements.length < 1">
          <router-link to="/announcements">
            查看更多公告資訊
          </router-link>
        </button>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* 文字截斷 */
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* 桌機版維持一行 */

  /* 手機版維持兩行 */
  @media (max-width: 767px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal; /* 手機版允許換行 */
  }
}
</style>
<script>
import { API } from "@/api.js";

export default {
  data() {
    return {
      announcements: [],
    };
  },
  methods: {
    async getAnnouncements() {
      const getAnnouncementsApi = `${API}/report`
      try {
        const response = await this.axios.get(getAnnouncementsApi)
        if (response.data.status) {
          this.announcements = response.data.reports
        }
      } catch (error) {
        console.error("Failed", error);
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
  },
  mounted() {
    this.getAnnouncements();
  },
};
</script>
