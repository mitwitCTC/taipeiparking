<template>
  <TheLayout>
    <section id="content" class="container content">
      <div class="d-flex flex-column align-items-center">
        <img
          class="mb-6 mb-md-8"
          src="/icons/icon_success.svg"
          alt="success"
        />
        <p class="text-navy05 fs-xl5 fw-bold mb-md-5">
          {{ $t("pages.signupSuccess.title") }}
        </p>
        <p class="text-navy03 fs-xl mb-md-8">
          {{ $t("pages.signupSuccess.content") }}
        </p>
        <button class="btn btn-navy03 fw-bold">
          {{ $t("pages.signupSuccess.btn_text") }}
        </button>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.content {
  padding-bottom: clamp(170px, 5.16vw + 33.1px, 210px);
  div {
    margin-top: 162px;
  }
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.redirectToHome()
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const headerHeight = 98;
      const contentSection = this.$el.querySelector(".content");
      contentSection.style.marginTop = `${headerHeight}px`;
    },
    redirectToHome() {
      setTimeout(() => {
        this.$router.push("/login");
      }, 1000);
    },
  },
};
</script>
