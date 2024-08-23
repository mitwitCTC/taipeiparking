<template>
  <TheLayout>
    <section id="intro" class="intro">
      <div class="banner-intro">
        <div class="bannerText text-center">
          <h2 :class="banner_fs" class="text-yellow04 fw-bold">
            {{ $t("pages.intro.title") }}
          </h2>
        </div>
      </div>
      <div class="container intro-content">
        <section id="basic-info">
          <p class="text-navy03" :class="intro_content_fs">
            台北市於民國四十年十一月，成立腳踏車保管業聯誼會，也是台灣地區最初的同業組織，業者營業許可證概由警察局核發，各公私機構、公共娛樂場所並分別設置腳踏車保管場，停車場地也包括路外與路旁，市民騎車外出，習慣將車交付保管，秩序井然，民國五十年政府規定業者（包括其他行業）許可證統由縣市政府核發，此時業者籌組同業公會並於民國五十四年十二月三十日經台灣省政府社會處核定正式成立「台北市車輛保管商業同業公會」。
          </p>
          <p class="text-navy03 mb-4 mb-md-8" :class="intro_content_fs">
            台北市車輛保管商業同業公會首任理事長為李萬生先生，並先後改選鍾中培、黃福民二人繼任。歷任理監事均合作無間，為績優商業團體之一。
            科學進步神速，生活水準隨著提高，經濟繁榮，汽車數量逐年遽增，停車場相對也增加，停車需求，停車位缺乏，車輛管理突增困難，因此台北市政府於民國七十七年，成立交通局停車管理處，進行開發路邊路外公有收費停車場，並定位為停車場業之主管機關，業者並配合將原有汽機車保管場變更登記為停車場。
          </p>
          <div class="justify-content-center row gap-10 mb-4 mb-md-8">
            <div class="img-container col-12 col-lg-6 col-md-6">
              <img src="/intro/intro1.jpg" alt="intro-img" />
            </div>
            <div class="img-container col-12 col-lg-6 col-md-6">
              <img src="/intro/intro2.jpg" alt="intro-img" />
            </div>
          </div>
          <p class="text-navy03" :class="intro_content_fs">
            民國八十三年十月十五日本會第十一屆第三次大會通過提案擬將「台北市車輛保管商業同業公會」改制並進行籌劃，歷時經年，迄至民國八十四年十一月二十一日始申請改制為「台北市停車場商業同業公會」，此經濟部、內政部分別以函發布，商業團體分業標準所列「車輛保管商業」修正為「停車場商業」。
          </p>
          <p class="text-navy03" :class="intro_content_fs">
            民國八十四年十二月十二日經台北市政府社會局正式核定成為中華民國第一個成立的停車場商業同業公會，也是全台灣省唯一合法經營停車場業者的共同組織之公會，而使原車輛保管商業同業公會走入歷史。
          </p>
          <p class="text-navy03 mb-4 mb-md-8" :class="intro_content_fs">
            本會改制迄今，現有會員117家，會員代表195人，理、監事十四位，每年定期召開會員大會，理、監事會議每三個月各召開一次，臨時會議視必要時隨時召開之。改制後的公會，由於業務特性迥異，在會務推動上更趨複雜與繁重，唯有遠見的領導團隊，方能將本會帶進更完善的境界，本會自第二十屆理、監事改選後陣容堅強並由周明德出任理事長，周理事長積極參與政府機關法規修訂，提供政府機關政策性建言，為會員解決困擾，以及與爭取福利均不遺餘力，期盼未來公會能站在公益的角色，引導政府將過去扮演「領導者」和「管理者」的角色轉變為民間所期待的「支援者」和「服務者」的角色，那將是本會會員的福氣，也是全民的期待。
          </p>
        </section>
          </div>
      </div>
      <TheDownload></TheDownload>
    </section>
  </TheLayout>
</template>

<style scoped>
.banner-intro {
  width: 100%;
  background: url("/img_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: 100% 576px; */
}
.bannerText {
  padding-top: 176px !important;
  padding-bottom: 102px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.intro-content {
  padding-top: 48px;
  padding-bottom: 160px;
}

.img-container {
  width: 600px;
  height: 372px;
  border-radius: 24px;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 800px) {
  .banner {
    background-size: 100% 480px;
  }

  .img-container {
    width: 343px;
    height: 212px;
  }
}
</style>
<script>
import TheLayout from "@/components/TheLayout.vue";
import TheDownload from "@/components/index/TheDownload.vue";

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  components: {
    TheLayout,
    TheDownload,
  },
  computed: {
    banner_fs() {
      return this.windowWidth <= 560 ? "fs-xl4" : "fs-xl7";
    },
    intro_content_fs() {
      return this.windowWidth <= 560 ? "fs-md" : "fs-xl";
    },
  },
  created() {
    window.addEventListener("resize", this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
