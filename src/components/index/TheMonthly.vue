<template>
  <div class="bg-monthly">
    <img class="parking-car" src="@/assets/img/car.png" alt="car.png" />
    <div class="container">
      <div class="row">
        <section class="parking-dec col-12 col-md-4">
          <h2 class="text-navy05 fs-xl6 mb-6 fw-bold">
            {{ $t("pages.index.monthly.title") }}
          </h2>
          <img
            class="parking-car mobile"
            src="@/assets/img/car.png"
            alt="car.png"
          />
          <p class="text-navy03 fs-xl mb-12">
            {{ $t("pages.index.monthly.des") }}
          </p>
          <button
            class="btn btn-navy03 btn-xl"
            @click="$router.push('/monthly')"
          >
            {{ $t("pages.index.monthly.btn-text") }}
          </button>
        </section>

        <section class="col-12 col-md-8">
          <ul class="parking-space">
            <li
              v-for="(item, index) in displayedMonthlySpaces"
              :key="index"
              class="monthly-space"
            >
              <span class="text-gray13 fs-xl fw-bold">{{ item.region }}</span
              ><span
                ><strong class="text-navy03 fs-xl3 fw-bold">{{
                  item.spaces
                }}</strong>
                個車位</span
              >
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-monthly {
  position: relative;
  background: linear-gradient(180deg, #fff4d6 0%, #fffcf6 100%);
  padding: 120px 0;
}

.monthly-space {
  box-shadow: 0px 0px 10px 0px #0000001a;
  padding: 30px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
}

.parking-space {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.parking-car {
  height: 330px;
  position: absolute;
  top: 180px;
  left: 0px;
  z-index: 0;
  transform: translateX(-50%);
}

.parking-car.mobile {
  display: none;
}

@media (max-width: 768px) {
  .parking-car {
    display: none;
  }

  .parking-car.mobile {
    height: 150px;
    position: relative;
    top: unset;
    left: unset;
    display: block;
    transform: unset;
    margin: auto auto 24px;
  }

  .parking-dec {
    margin-bottom: 32px;
    text-align: center;
  }
  .parking-space {
    grid-template-columns: repeat(1, 1fr);
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
