<template>
  <div class="bg-monthly">
    <div class="container">
      <div class="row">
        <section class="col-12 col-md-4 col-xl-4">
          <div
            class="d-flex flex-column align-items-center align-items-xl-start"
          >
            <h2 class="text-navy05 fs-xl6 fw-bold">
              {{ $t("pages.index.monthly.title") }}
            </h2>
            <p class="text-navy03 fs-xl mt-6 mb-12">
              {{ $t("pages.index.monthly.des") }}
            </p>
            <button class="btn btn-navy03 btn-xl">
              <router-link to="/monthly">
                {{ $t("pages.index.monthly.btn-text") }}
              </router-link>
            </button>
          </div>
        </section>
        <section class="col-12 col-md-8 col-xl-8 mt-8 mt-xl-0">
          <ul class="row gap-4 d-flex justify-content-center">
            <li
              class="monthly-space bg-white px-5 justify-content-between mb-2"
              v-for="(item, index) in displayedMonthlySpaces"
              :key="index"
            >
              <span class="text-gray13 fs-xl fw-bold">{{ item.region }}</span>
              <span>
                <span class="text-navy03 fs-xl3 fw-bold">
                  {{ item.spaces }}
                </span>
                <span>個車位</span>
              </span>
            </li>
          </ul>
        </section>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-monthly {
  background: linear-gradient(180deg, #fff4d6 0%, #fffcf6 100%);
  padding: 120px 0;
}

.monthly-space {
  box-shadow: 0px 0px 10px 0px #0000001a;
  width: 20vw;
  aspect-ratio: 392/88;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  .monthly-space {
    width: 90vw;
  }
}
</style>
<script>
export default {
  data() {
    return {
      monthlySpaces: [],
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    getMonthlySpaces() {
      this.monthlySpaces = [
        {
          id: 1,
          region: "大安區",
          spaces: 111,
        },
        {
          id: 2,
          region: "信義區",
          spaces: 415,
        },
        {
          id: 3,
          region: "松山區",
          spaces: 533,
        },
        {
          id: 4,
          region: "北投區",
          spaces: 233,
        },
        {
          id: 5,
          region: "內湖區",
          spaces: 129,
        },
        {
          id: 6,
          region: "南港區",
          spaces: 281,
        },
        {
          id: 7,
          region: "文山區",
          spaces: 213,
        },
        {
          id: 8,
          region: "中正區",
          spaces: 81,
        },
      ];
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.getMonthlySpaces();
    window.addEventListener("resize", this.updateWindowWidth);
  },
  computed: {
    // Computed property to determine displayed monthly spaces number based on window width
    displayedMonthlySpaces() {
      return this.windowWidth >= 769
        ? this.monthlySpaces // Show all 8 items if window width is equal or greater than 768px
        : this.monthlySpaces.slice(0, 4); // Show only first 4 items if window width is smaller than 768px
    },
  },
  beforeUnmount() {
    // Remove event listener before component is destroyed to prevent memory leaks
    window.removeEventListener("resize", this.updateWindowWidth);
  },
};
</script>
