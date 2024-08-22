<template>
  <section id="memberVendor" class="container mt-16">
    <!-- <ul class="d-flex justify-content-center gap-11">
      <li class="text-navy-04 fs-xl4 fw-bold" @click="toggleTab(member)">
        {{ $t("pages.index.member&vendor.member") }}
      </li>
      <li class="text-navy-04 fs-xl4 fw-bold" @click="toggleTab(vendor)">
        {{ $t("pages.index.member&vendor.vendor") }}
      </li>
    </ul> -->
    <nav class="d-flex justify-content-center">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active text-navy04 fs-xl4 fw-bold"
          id="nav-member-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-member"
          type="button"
          role="tab"
          aria-controls="nav-member"
          aria-selected="true"
        >
          {{ $t("pages.index.member&vendor.member") }}
        </button>
        <button
          class="nav-link text-navy04 fs-xl4 fw-bold"
          id="nav-vendor-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-vendor"
          type="button"
          role="tab"
          aria-controls="nav-vendor"
          aria-selected="false"
        >
          {{ $t("pages.index.member&vendor.vendor") }}
        </button>
      </div>
    </nav>
    <div class="tab-content mt-8 mt-md-16" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-member"
        role="tabpanel"
        aria-labelledby="nav-member-tab"
      >
        <ul
          class="row row-cols-lg-3 row-cols-md-3 row-cols-2 gap-3 gap-md-6 justify-content-center"
        >
          <li class="member-container">
            <img src="/index/members/1.svg" alt="member-logo" />
          </li>
          <li class="member-container">
            <img src="/index/members/2.svg" alt="member-logo" />
          </li>
          <li class="member-container">
            <img src="/index/members/3.svg" alt="member-logo" />
          </li>
          <li class="member-container">
            <img src="/index/members/4.svg" alt="member-logo" />
          </li>
          <li class="member-container">
            <img src="/index/members/5.svg" alt="member-logo" />
          </li>
          <li class="member-container">
            <img src="/index/members/6.svg" alt="member-logo" />
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="nav-vendor"
        role="tabpanel"
        aria-labelledby="nav-vendor-tab"
      >
        <ul
          class="row row-cols-lg-3 row-cols-md-3 row-cols-2 gap-3 gap-md-6 justify-content-center"
        >
          <li
            class="vendor-container bg-yellow01 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <p :class="vendorName_fs" class="text-navy05 fw-bold mb-1">
                收費系統
              </p>
              <p :class="vendorNum_fs" class="text-navy03 mb-0">24間廠商</p>
            </div>
          </li>
          <li
            class="vendor-container bg-yellow01 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <p :class="vendorName_fs" class="text-navy05 fw-bold mb-1">
                監控系統
              </p>
              <p :class="vendorNum_fs" class="text-navy03 mb-0">24間廠商</p>
            </div>
          </li>
          <li
            class="vendor-container bg-yellow01 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <p :class="vendorName_fs" class="text-navy05 fw-bold mb-1">
                附屬設施
              </p>
              <p :class="vendorNum_fs" class="text-navy03 mb-0">24間廠商</p>
            </div>
          </li>
          <li
            class="vendor-container bg-yellow01 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <p :class="vendorName_fs" class="text-navy05 fw-bold mb-1">
                資訊服務
              </p>
              <p :class="vendorNum_fs" class="text-navy03 mb-0">24間廠商</p>
            </div>
          </li>
          <li
            class="vendor-container bg-yellow01 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <p :class="vendorName_fs" class="text-navy05 fw-bold mb-1">
                水電及工程
              </p>
              <p :class="vendorNum_fs" class="text-navy03 mb-0">24間廠商</p>
            </div>
          </li>
          <li
            class="vendor-container bg-yellow01 d-flex justify-content-center align-items-center"
          >
            <div class="text-center">
              <p :class="vendorName_fs" class="text-navy05 fw-bold mb-1">
                金融及保險
              </p>
              <p :class="vendorNum_fs" class="text-navy03 mb-0">24間廠商</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style scoped>
.nav-tabs,
.nav-link,
.nav-link.active {
  border: none;
}
.nav-tabs:hover {
  border: none;
}

.nav-link.active {
  border-bottom: 6px solid #133155;
}

.member-container {
  width: 392px;
  height: 240px;
  padding: 60px 98px;
  border: 1px solid #f7f7f7;
  box-shadow: 0px 0px 20px 0px #0000001a;
}
.member-container img {
  max-width: 100%;
  height: 100%;
}

.vendor-container {
  width: 392px;
  height: 240px;
  border-radius: 12px;
}

@media (max-width: 992px) {
  .member-container {
    width: 166px;
    height: 138px;
    padding: 36px 40px;
    border: 1px solid #f7f7f7;
    box-shadow: 0px 0px 20px 0px #0000001a;
  }
  .vendor-container {
    width: 166px;
    height: 138px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    vendorName_fs() {
      return this.windowWidth <= 560 ? "fs-md" : "fs-xl2";
    },
    vendorNum_fs() {
      return this.windowWidth <= 560 ? "fs-sm" : "fs-md";
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
