<template>
  <section id="memberVendor" class="container mt-16">
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
        <h2 v-if="isLoading" class="text-center mb-20">載入中...</h2>
        <ul v-else
          class="row row-cols-lg-3 row-cols-md-3 row-cols-2 gap-3 gap-md-6 justify-content-center"
        >
          <li v-for="(item, index) in members" class="member-container" :key="index">
            <a :href='item.link_url' target="_blank" rel="noopener noreferrer">
              <img :src='item.preview_url || defaultImgUrl' :alt="item.name" @error="handleImageError($event)">
            </a>
          </li>
        </ul>
        <div class="text-center mt-12">
          <button class="btn btn-navy03 btn-lg text-xl2 fw-bold">
            <router-link to="/member">{{ $t("pages.index.member&vendor.member_btn") }}</router-link>
          </button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-vendor"
        role="tabpanel"
        aria-labelledby="nav-vendor-tab"
      >
        <h2 v-if="isLoading" class="text-center mb-20">
          載入中...
        </h2>
        <ul v-else
          class="row row-cols-lg-3 row-cols-md-3 row-cols-2 gap-3 gap-md-6 justify-content-center"
        >
          <li v-for="(item, index) in vendorTypes" :key="index" class="vendor-container bg-yellow01 d-flex justify-content-center align-items-center">
            <div class="text-center">
              <p :class="vendorName_fs" class="text-navy05 fw-bold mb-1">
                {{ item.type}}
              </p>
              <p :class="vendorNum_fs" class="text-navy03 mb-0">{{ item.count }}間廠商</p>
            </div>
          </li>
        </ul>
        <div class="text-center mt-12">
          <button class="btn btn-navy03 btn-lg text-xl2 fw-bold">
            <router-link to="/vendor">
              {{ $t("pages.index.member&vendor.vendor_btn") }}
            </router-link>
          </button>
        </div>
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
  width: clamp(166px, 8vw + 66.2px, 392px);
  height: clamp(138px, 6.58vw + 53.4px, 240px);
  padding: clamp(40px, 1.55vw + 24.1px, 60px) clamp(32px, 2.06vw + 24.3px, 98px);
  box-shadow: 0px 0px 20px 0px #0000001a;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 392/240;
  border: 1px solid #f7f7f7;
  box-shadow: 0px 0px 20px 0px #0000001a;
}
img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}

.vendor-container {
  width: 20vw;
  aspect-ratio: 392/240;
  border-radius: 12px;
}

@media (max-width: 992px) {
  .vendor-container {
    width: 44vw;
    aspect-ratio: 166/138;
  }
}
</style>
<script>
import { API } from "@/api.js";
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      isLoading: false,
      members: [],
      vendorTypes: [],
      defaultImgUrl: '/default.svg'
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
  mounted() {
    this.getMembers()
    this.getVendorTypes()
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
    async getMembers() {
      this.isLoading = true;
      const getMembersApi = `${API}/member`;
      try {
        const response = await this.axios.get(getMembersApi);
        if (response.data.status == true) {
          this.members = response.data.members;
        }
      } catch (error) {
        console.error("Failed", error);
      } finally {
        this.isLoading = false;
      }
    },
    async getVendorTypes() {
      this.isLoading = true;
      const getVendorsApi = `${API}/vendor`;
      try {
        const response = await this.axios.get(getVendorsApi);
        if (response.data.status == true) {
          this.vendorTypes = response.data.vendorTypes;
        }
      } catch (error) {
        console.error("Failed", error);
      } finally {
        this.isLoading = false;
      }
    },
    handleImageError(event) {
      event.target.src = "/default.svg"; // 預設圖片的路徑
    },
  },
};
</script>
