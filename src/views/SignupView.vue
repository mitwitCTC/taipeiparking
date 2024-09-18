<template>
  <TheHeader ref="layoutRef"></TheHeader>
  <section id="content" class="container content">
    <div class="row">
      <div class="col-12 col-md-6 mt-10 mt-md-20">
        <p class="text-navy05 fs-xl5 fw-bold">
          {{ $t("pages.signup.title") }}
        </p>
        <!-- 驗證會員統編的註冊表單 -->
        <VeeForm v-if="!checked" @submit="check_textId">
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
                    <span class="text-red02 fs-sm" v-if="check_message">
                      {{ check_message }}
                    </span>
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
            :disabled="loading"
          >
            {{
              loading
                ? $t("pages.signup.loading_btn")
                : $t("pages.signup.check_btn")
            }}
          </button>
          <p class="text-center w-75">
            {{ $t("pages.signup.has_account") }}
            <router-link to="/login" class="text-navy01">
              {{ $t("pages.signup.login") }}
            </router-link>
          </p>
        </VeeForm>
        <!-- 通過會員統編驗證後的註冊表單 -->
        <VeeForm v-else @submit="signup">
          <div class="row">
            <div class="col-12">
              <div class="mb-6">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="tax_id"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.signup.account") }}
                    </label>
                  </div>
                </div>
                <div class="input-group w-75">
                  <VField
                    v-model="signupData.tax_id"
                    name="tax_id"
                    type="text"
                    class="form-control form-control-sm w-75"
                    id="tax_id"
                    disabled
                  />
                  <i class="bi bi-check-circle-fill fs-xl check-icon"></i>
                </div>
              </div>
              <div class="mb-6">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="password"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.signup.password") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="password" />
                  </div>
                </div>
                <VField
                  v-model="signupData.password"
                  name="password"
                  type="password"
                  class="form-control form-control-sm w-75"
                  id="password"
                  autocomplete="on"
                  :placeholder="$t('pages.signup.password_placeholder')"
                  rules="required|min:6"
                />
              </div>
              <div class="mb-6">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="name"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.signup.name") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="name" />
                  </div>
                </div>
                <VField
                  v-model="signupData.name"
                  name="name"
                  type="text"
                  class="form-control form-control-sm w-75"
                  id="name"
                  autocomplete="on"
                  :placeholder="$t('pages.signup.name_placeholder')"
                  rules="required"
                />
              </div>
              <div class="mb-6">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="contact"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.signup.contact") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="contact" />
                  </div>
                </div>
                <VField
                  v-model="signupData.contact"
                  name="contact"
                  type="text"
                  class="form-control form-control-sm w-75"
                  id="contact"
                  autocomplete="on"
                  :placeholder="$t('pages.signup.contact_placeholder')"
                  rules="required"
                />
              </div>
              <div class="mb-6">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="phone"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.signup.phone") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="phone" />
                  </div>
                </div>
                <VField
                  v-model="signupData.phone"
                  name="phone"
                  type="text"
                  class="form-control form-control-sm w-75"
                  id="phone"
                  autocomplete="on"
                  :placeholder="$t('pages.signup.phone_placeholder')"
                  rules="required|phone"
                />
              </div>
              <div class="mb-6">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="email"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.signup.email") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="email" />
                  </div>
                </div>
                <VField
                  v-model="signupData.email"
                  name="email"
                  type="mail"
                  class="form-control form-control-sm w-75"
                  id="email"
                  autocomplete="on"
                  :placeholder="$t('pages.signup.email_placeholder')"
                  rules="required|email"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-navy03 fw-bold w-75"
            :disabled="loading"
          >
            {{
              loading
                ? $t("pages.signup.loading_btn")
                : $t("pages.signup.signup_btn")
            }}
          </button>
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
  margin-top: 4vh;
  padding-bottom: 0;
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

.input-group {
  position: relative;
}

.check-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #26c818;
  pointer-events: none; /* 禁止圖示干擾輸入 */
}

@media (max-width: 768px) {
  .content {
    margin-top: 10vh;
    margin-left: 15vw;
    padding-bottom: clamp(160px, 5.16vw + 33.1px, 200px);
  }
  .image-container {
    display: none;
  }
}
</style>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { API } from "@/api.js";

export default {
  data() {
    return {
      signupData: {
        tax_id: "",
        password: "",
        name: "",
        contact: "",
        phone: "",
        email: "",
      },
      loading: false,
      check_message: "",
      checked: false,
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
    async check_textId(values) {
      this.loading = true;
      this.checked = false;
      const check_textIdAPI = `${API}/sign_in/check`;
      try {
        const response = await this.axios.post(check_textIdAPI, values);
        if (response.data.status == true) {
          this.checked = true;
        }
        this.loading = false;
        this.check_message = response.data.message;
      } catch (error) {
        console.error("Failed to check:", error);
      }
    },
    async signup(values) {
      this.loading = true;
      const signupApi =  `${API}/sign_in/send`;
      try {
        const response = await this.axios.post(signupApi, values)
        if (response.data.status == true) {
          this.$router.push("/signupSuccess");
        }
      } catch (error) {
        console.error("Failed:", error);
      } finally {
        this.loading = false;
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>
