<template>
  <TheLayout ref="layoutRef">
    <section id="announcement-detail" class="announcement-detail">
      <div class="container mt-6 mt-md-10">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-gray11">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/announcements" class="text-gray11"
                >公告資訊</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link to="/announcements" class="text-gray11">
                {{ type }}
              </router-link>
            </li>
            <li
              class="breadcrumb-item active text-truncate"
              aria-current="page"
            >
              {{ announcement_detail.title }}
            </li>
          </ol>
        </nav>
        <p class="text-navy05 fw-bold fs-md mb-1 mb-md-3">
          {{ announcement_detail.date }}
        </p>
        <p class="text-navy03 fs-xl5 fw-bold mb-4 mb-md-5">
          {{ announcement_detail.title }}
        </p>
        <p class="badge" :class="getTypeBadge(announcement_detail.type)">
          {{ announcement_detail.type }}
        </p>
        <div v-if="announcement_detail.attaches">
          <p class="text-gray15 fs-md" v-html="announcement_detail.content"></p>
          <div
            v-for="(item, index) in announcement_detail.attaches"
            :key="index"
          >
            <a
              target="_blank"
              v-if="!item.attach_pre_url"
              class="text-gray15 fs-xl2 custom-underline"
              :href="item.attach_url"
              >{{ item.attach_name }}
            </a>
            <a :href="item.attach_url">
              <img
                v-if="item.attach_pre_url"
                :src="item.attach_pre_url"
                :alt="item.attach_name"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scpped>
.announcement-detail {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
  margin-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}
.custom-underline {
    text-decoration: underline;
    text-decoration-color: #133155;
    text-decoration-thickness: 2px;
}
</style>

<script>
import { API } from "@/api.js";

import TheLayout from "@/components/TheLayout.vue";

export default {
  name: "AnnouncementsDetailView",
  props: ["type", "id"],
  data() {
    return {
      announcement_detail: {},
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.loadData();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        // const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const announcement_detailSection = this.$el.querySelector(
          ".announcement-detail"
        );
        announcement_detailSection.style.paddingTop = `98px`;
      }
    },
    async loadData() {
      const getAnnouncementsDetailApi = `${API}/report/${this.id}`;      
      try {
        const response = await this.axios.get(getAnnouncementsDetailApi);
        if (response.data.status == true) {
          this.announcement_detail = response.data;
        }
      } catch (error) {
        console.error("Failed", error);
      }},
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
};
</script>
