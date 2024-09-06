<template>
  <TheHeader ref="layoutRef"></TheHeader>
  <section id="content" class="container content">
    <div class="row">
      <div class="col-12 col-md-6 mt-10 mt-md-20">
        <p class="text-navy05 fs-xl5 fw-bold">
          {{ $t("pages.signup.title") }}
        </p>
        <VeeForm @submit="check_textId">
          <div class="row mb-6 mb-md-10">
            <div class="col-12">
              <div class="mb-6 mb-md-8">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="tax_id"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.signup.account") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="tax_id" />
                  </div>
                </div>
                <VField
                  v-model="signupData.tax_id"
                  name="tax_id"
                  type="text"
                  class="form-control form-control-sm w-75"
                  id="tax_id"
                  :placeholder="$t('pages.signup.account_placeholder')"
                  rules="required"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-navy03 fw-bold w-75 mb-6 mb-md-8"
          >
            {{ $t("pages.signup.check_btn") }}
          </button>
          <p class="text-center w-75">
            {{ $t("pages.signup.has_account") }}
            <router-link to="/login" class="text-navy01">
              {{ $t("pages.signup.login") }}
            </router-link>
          </p>
        </VeeForm>
      </div>
    </div>
  </section>
  <div class="image-container">
    <img src="/download_sm_bg.jpg" alt="background_img" class="img-bg" />
  </div>
  <TheFooter v-if="isMobile" />
</template>

<style scoped>
.content {
  margin-top: 106px;
  padding-bottom: clamp(170px, 5.16vw + 33.1px, 200px);
}

input:focus {
  border: 1px solid black;
}

.image-container {
  position: absolute;
  top: 0px;
  right: 0;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
}

.img-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .content {
    margin-left: 15vw;
  }
  .image-container {
    display: none;
  }
}
</style>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  data() {
    return {
      signupData: {
        tax_id: "",
      },
      isMobile: window.innerWidth < 768,
    };
  },
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    check_textId(values) {
      console.log("確認統編", values);
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>
