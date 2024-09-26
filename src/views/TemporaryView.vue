<template>
    <TheNavbar ref="layoutRef"></TheNavbar>
      <section id="content" class="content">
          <div class="temp">
              <div class="d-flex justify-content-center align-items-center">
              <p class="text-navy05  p-5 fs-xl8 text-center">建置中...</p>
            </div>
        </div>
    </section>
  </template>
  
  <style scoped>  
  .temp {
    width: 100%;
    height: 100vh;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  
  @media (min-width: 768px) {
    .temp {
      background-image: url('/temp/Parking_OneTime@1920px.png');
    }
  }
  
  @media (max-width: 767px) {
    .temp {
      background-image: url('/temp/Parking_OneTime@375px.png');
    }
  }
  </style>
  
  <script>
  import TheNavbar from "@/components/TheNavbar.vue";
  
  export default {
    components: {
        TheNavbar,
    },
    mounted() {
      this.adjustPaddingTop();
      window.addEventListener("resize", this.adjustPaddingTop);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.adjustPaddingTop);
    },
    methods: {
      adjustPaddingTop() {
        const layout = this.$refs.layoutRef;
        if (layout && layout.$refs.headerRef) {
          const headerHeight = layout.$refs.headerRef.offsetHeight || 98;
          const contentSection = this.$el.querySelector(".content");
          contentSection.style.paddingTop = `${headerHeight}px`;
        }
      },
    },
  };
  </script>
  