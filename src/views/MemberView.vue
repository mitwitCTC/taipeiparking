<template>
  <TheLayout ref="layoutRef">
    <section id="member" class="member">
      <div class="bg-yellow03 text-navy05 fs-xl5 fw-bold py-md-12 py-6">
        <p class="container">
          {{ $t("pages.member.title") }}
        </p>
      </div>
      <div class="container mt-4 mt-md-16">
        <div class="row">
          <div
            v-for="(member, index) in members"
            :key="index"
            class="col-md-6 col-lg-4 col-xl-3 mb-4"
          >
            <div
              class="h-100 d-flex flex-column justify-content-center align-items-center"
            >
              <div>
                <div class="img-container">
                  <img :src="member.preview_url" :alt="member.name" />
                </div>
                <p class="text-navy03 text-start fw-bold mt-2 mt-md-4">
                  {{ member.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.member {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.img-container {
  width: clamp(166px, 7.85vw + 66.2px, 288px);
  height: clamp(138px, 6.58vw + 53.4px, 240px);
  padding: clamp(36px, 1.55vw + 24.1px, 60px) clamp(40px, 2.06vw + 24.3px, 72px);
  box-shadow: 0px 0px 20px 0px #0000001a;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 375px) {
  .img-container {
    width: 166px;
    height: 138px;
    padding: 36px 40px;
  }
}

@media (min-width: 1920px) {
  .img-container {
    width: 288px;
    height: 240px;
    padding: 60px 72px;
  }
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      members: [],
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getMembers();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      // Access the layout and header refs correctly
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const memberSection = this.$el.querySelector(".member");
        memberSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    getMembers() {
      this.members = [
        {
          name: "TIMES 停車",
          preview_url: "/index/members/1.svg",
        },
        {
          name: "City Parking 城市商旅",
          preview_url: "/index/members/2.svg",
        },
        {
          name: "嘟嘟房",
          preview_url: "/index/members/3.svg",
        },
        {
          name: "uTagGo",
          preview_url: "/index/members/4.svg",
        },
        {
          name: "應安 168 停車",
          preview_url: "/index/members/5.svg",
        },
        {
          name: "JSP正好停",
          preview_url: "/index/members/6.svg",
        },
      ];
    },
  },
};
</script>
