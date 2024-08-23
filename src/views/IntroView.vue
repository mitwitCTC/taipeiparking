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
        <section id="chairman" class="mb-9 mb-md-20">
          <div
            class="chairman bg-yellow01 d-flex flex-column align-items-center pt-md-16 pt-8"
          >
            <div class="charman-img mb-4">
              <img src="/intro/chairman.jpg" alt="chairman" />
            </div>
            <p class="text-navy03 fs-xl mb-2 mb-md-4">現任理事長</p>
            <p class="text-navy05 fs-xl5 fw-bold">周理事長明德先生</p>
          </div>
        </section>
        <section id="previous-chairman" class="mb-10 mb-md-20">
          <p class="text-navy03 fs-md-xl3 fs-xl2 fw-bold mb-4">歷屆理事長</p>
          <div class="row">
            <div class="col-md-12 col-lg-3 mb-4 mb-lg-0">
              <ul class="pre-chairman list-unstyled">
                <li>
                  <p class="d-flex gap-3 gap-md-8 text-navy03 fs-md mb-2">
                    <span class="fw-bold">20屆理事長</span>
                    <span>周理事長 明德</span>
                  </p>
                </li>
                <li>
                  <p class="d-flex gap-3 gap-md-8 text-navy03 fs-md mb-2">
                    <span class="fw-bold">21屆理事長</span>
                    <span>周理事長 明德</span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-md-12 col-lg-9">
              <div
                class="pre-chairman-content text-navy03 pt-4 pt-lg-0 ps-lg-4"
              >
                <p class="mb-3">
                  公會在各位理監事們及會務人員盡心盡力共同努力，逐步完成階段性的工作目標，在法規研究、法益維護、會務推廣、會員服務、公共關係及文康活動，安排專業人士演講，拓展大家在各領域上的認識，也提供大家交換事業經營經驗分享的機會。
                </p>
                <p class="mb-3">
                  為業界爭取並解決經營上所遭遇之問題。並參與政府立法、修法，爭取有利於民間投資興建停車場之獎勵條件，增加會務活動資訊佈達，公會亦向相關單位積極爭取停車場管理員工時的問題及修改停車場法，將過去停車費未繳的罰款條文再修改回復。
                </p>
                <p class="mb-0">
                  新選出的理監事團隊，將繼續共同努力，迎接挑戰、爭取福利，讓公會更加茁壯，以更優質的服務，繼續為各位會員效力，拓展停車場業的成長。最後祝福與會的貴賓及會員平安喜樂，一切順心，財源滾滾。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="current-boards" class="mb-10 mb-md-20">
          <p class="text-navy03 fs-md-xl3 fs-xl2 fw-bold mb-4">
            現任理監事名單
          </p>
          <div class="current text-white fw-bold bg-navy03 py-6 ps-6">
            第21屆
          </div>
          <ul class="current-boards-list bg-blue01 p-6 mt-4 text-navy03">
            <li>
              <p class="row">
                <span class="fw-bold col-3 col-md-2">理事長</span>
                <span class="col-6">周理事長 明德</span>
              </p>
            </li>
            <li>
              <p class="row">
                <span class="fw-bold col-3 col-md-2">常務監事</span>
                <span class="col-6">
                  <ul>
                    <li>謝常務監事 永松</li>
                    <li>黃監事 鵬峯</li>
                    <li>呂監事 秉儒</li>
                  </ul>
                </span>
              </p>
            </li>
            <li>
              <p class="row">
                <span class="fw-bold col-3 col-md-2">常務理事</span>
                <span class="col-6">
                  <ul>
                    <li>范常務理事 昌明</li>
                    <li>賴常務理事 柏勳</li>
                  </ul>
                </span>
              </p>
            </li>
            <li>
              <p class="row">
                <span class="fw-bold col-3 col-md-2">理事</span>
                <span class="col-6">
                  <ul>
                    <li>陳理事 君瑋</li>
                    <li>莊理事 景順</li>
                    <li>連理事 維全</li>
                    <li>黃理事 庸孜</li>
                    <li>古理事 昌灝</li>
                    <li>楊理事 俊傑</li>
                    <li>王理事 宥勻</li>
                  </ul>
                </span>
              </p>
            </li>
            <li>
              <p class="row">
                <span class="fw-bold col-3 col-md-2">候補理監事</span>
                <span class="col-6">
                  <ul>
                    <li>林治宏(理事)</li>
                    <li>賀亦璿(理事)</li>
                    <li>周佳穎(理事)</li>
                    <li>吳思寬(監事)</li>
                  </ul>
                </span>
              </p>
            </li>
            <li>
              <p class="row">
                <span class="fw-bold col-3 col-md-2">會務工作人員</span>
                <span class="col-6">
                  <ul>
                    <li>陳理事 君瑋</li>
                    <li>莊理事 景順</li>
                    <li>連理事 維全</li>
                    <li>黃理事 庸孜</li>
                  </ul>
                </span>
              </p>
            </li>
          </ul>
        </section>
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

.chairman {
  border-radius: 20px;
}

.charman-img {
  width: 64px;
  height: 64px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 99px;
  }
}

.pre-chairman-content {
  border-left: 1px solid #d7d7d7;
}

.current,
.current-boards-list {
  border-radius: 12px;
}

@media (max-width: 992px) {
  .banner {
    background-size: 100% 480px;
  }

  .img-container {
    width: 343px;
    height: 212px;
  }

  .pre-chairman-content {
    border-left: none;
    border-top: 1px solid #d7d7d7;
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
