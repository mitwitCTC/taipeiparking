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
              v-if="item.attach_type == 'text/plain'"
              class="text-gray15 fs-xl2"
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
</style>

<script>
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
    loadData() {
      // console.log("Loading data for ID:", this.id, "and Type:", this.type);
      this.announcement_detail = {
        id: 1,
        type: "最新消息",
        title:
          "2025雙北世界壯年運動會(114/5/17-114/05/30)，即日起調查報名人數，請於本年5/12下午6時前回覆本會",
        date: "2024.12.10",
        content:
          "<p>2025世界壯年運動會(114/5/17-114/05/30)，公會會員報名7折優惠延長至本年6月17日，即日起調查報名人數，請於本年5/12下午6時前回覆本會，以利本會將參加情形回覆停管處。</p><ul><li>1. 詳細內容請至下列網站( https://wmg2025.tw/zh-tw/home/zh-tw ) 查詢。</li><li>2. 公會會員報名7折優惠延長至本年6月17日。</li></li>3.即日起調查欲參加比賽人數，請於本年5/12下午6時前回覆本會。</li><li>4. 公會電話:(02) 2553-5265</li><li>5. 公會電子信箱: taipeiparking54@gmail.com</li></ul>",
        attaches: [
          {
            attach_type: "text/plain",
            attach_name: "apiv1.docx",
            attach_url:
              "https://t01.mitwit-cre.com.tw/f/test/report/202407/40/152315171.docx",
            attach_pre_url: null,
          },
          {
            attach_type: "image/png",
            attach_name: "00009-1101207265.png",
            attach_url:
              "https://t01.mitwit-cre.com.tw/f/test/report/202407/40/211843050.png",
            attach_pre_url:
              "https://t01.mitwit-cre.com.tw/f/test/report/202407/40/211843050_S.jpeg",
          },
        ],
      };
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
};
</script>
