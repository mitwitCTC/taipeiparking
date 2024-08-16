<template>
  <div class="bg-blue01">
    <section id="announcements" class="container pt-16 pb-20">
      <h2 class="text-navy04 fs-xl6 fw-bold text-center mb-10">
        {{ $t("pages.index.announcements") }}
      </h2>
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
        <router-link to="/announcements">
          <button class="btn btn-navy03 btn-lg">查看更多公告資訊</button>
        </router-link>
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
export default {
  data() {
    return {
      announcements: [],
    };
  },
  methods: {
    getAnnouncements() {
      this.announcements = [
        {
          id: 1,
          type: "最新消息",
          title:
            "2025雙北世界壯年運動會(114/5/17-114/05/30)，即日起調查報名人數，請於本年5/12下午6時前回覆本會",
          date: "2024.12.10",
        },
        {
          id: 2,
          type: "活動訊息",
          title:
            "轉知內政部消防署建築物附屬停車空間電動車輛充電使用安全指引」及總說明、逐點說明各1份,自即日生效。",
          date: "2024.12.10",
        },
        {
          id: 3,
          type: "招標資訊",
          title:
            "為達成本市2050淨零減碳目標，請本會各業者踴躍向本府產業發展局申請「臺北市服務業汰換節能設備補助」，節省機構（事業）用電量一案，請查照。",
          date: "2024.12.10",
        },
        {
          id: 4,
          type: "最新消息",
          title:
            "為達成本市2050淨零減碳目標，請本會各業者踴躍向本府產業發展局申請「臺北市服務業汰換節能設備補助」，節省機構（事業）用電量一案，請查照。",
          date: "2024.12.10",
        },
        {
          id: 5,
          type: "會議訊息",
          title:
            "本會第21屆第1次會員大會謹訂於111年9月30日假典華大直店3樓金枝玉葉廳舉行，請撥冗參加，並請線上填寫大會回條，詳如內文",
          date: "2024.12.10",
        },
      ];
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
