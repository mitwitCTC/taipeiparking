<template>
  <TheLayout ref="layoutRef">
    <section id="promotions" class="promotions">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold mb-4 mb-md-0">
          {{ $t("pages.promotion.title") }}
        </p>
      </div>
      <div class="container d-flex mt-8 mt-md-10">
        <ul class="row justify-content-around gap-1">
          <li
            v-for="(item, i) in promotions"
            :key="i"
            class="col-12 col-md-5 mb-6"
          >
            <a :href="item.link_url" target="_blank" class="d-block">
              <div class="object-fit-container">
                <img :src="item.preview_url" alt="industryPromotions" />
              </div>
              <div class="d-flex align-items-center">
                <p class="text-navy04 fw-bold mt-5 me-1 me-md-2">
                  {{ item.title }}
                </p>
                <i class="bi bi-box-arrow-up-right text-navy02 fs-xl"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.promotions {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.object-fit-container {
  max-width: 600px;
  aspect-ratio: 600/264;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
}

@media (max-width: 375px) {
  .object-fit-container {
    width: 166px;
    height: 138px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      activeTabIndex: 0, // Track the active tab index
      promotions: [],
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getPromotions();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const promotionsSection = this.$el.querySelector(".promotions");
        promotionsSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    getPromotions() {
      this.promotions = [
        {
          title: "永固便利停車月租繳費新選擇",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/offer/202408/截圖 2024-08-26 凌晨12.03.33.png",
          link_url:
            "http://www.24tps.com.tw/OtherServiceADV/For%20Rent%20Online/rent.htm",
        },
        {
          title: "俥停新北市淡水區停車場--淡水漁人碼頭停車場月租優惠",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/offer/202408/org_f2c568e7299827a1_1536114138000.jpg",
          link_url: "https://www.youparking.com.tw/news-article.php?id=43",
        },
        {
          title: "詮營停車信用卡優惠",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/offer/202408/信用卡懶人包1110207-01-1.png",
          link_url: "https://www.parkinsys.com.tw/news2/",
        },
        {
          title: "2e2",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/offer/202407/00009-1101207265.png",
          link_url: "https://www.youtube.com ",
        },
        {
          title: "YouTubeff",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/offer/202407/00009-1101207265.png",
          link_url: "https://www.ee.ntu.edu.tw",
        },
        {
          title: "fsdafsdfsd ",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/offer/202407/00007-2275314969.png",
          link_url: "https://www.youtube.com ",
        },
        {
          title: "行動支付繳停車費全攻略",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/album/UCardu20210311105272.jpg",
          link_url: "https://www.cardu.com.tw/mpay/detail.php?35760",
        },
        {
          title: "行動支付繳停車費全攻略",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/album/UCardu20210311105272.jpg",
          link_url: "https://www.cardu.com.tw/mpay/detail.php?35760",
        },
        {
          title: "行動支付繳停車費全攻略",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/album/UCardu20210311105272.jpg",
          link_url: "https://www.cardu.com.tw/mpay/detail.php?35760",
        },
        {
          title: "行動支付繳停車費全攻略",
          preview_url:
            "https://t01.mitwit-cre.com.tw/f/test/album/UCardu20210311105272.jpg",
          link_url: "https://www.cardu.com.tw/mpay/detail.php?35760",
        },
      ];
    },
  },
};
</script>
