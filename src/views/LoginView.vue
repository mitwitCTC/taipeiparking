<template>
  <TheHeader ref="layoutRef"></TheHeader>
  <section id="content" class="container content">
    <div v-if="login_message != ''" class="alert" :class="isLoginSuccess ? 'alert-warning' : 'alert-danger'" role="alert">
    {{login_message}}
    </div>
    <div class="row">
      <div class="col-12 col-md-6 mt-10 mt-md-20">
        <p class="text-navy05 fs-xl5 fw-bold">
          {{ $t("pages.login.title") }}
        </p>
        <VeeForm @submit="submit">
          <div class="row mb-6 mb-md-10">
            <div class="col-12">
              <div class="mb-6 mb-md-8">
                <div class="w-75">
                  <div class="d-flex justify-content-between">
                    <label
                      for="user"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.login.account") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="user" />
                  </div>
                </div>
                <VField
                  v-model="loginData.user"
                  name="user"
                  type="text"
                  class="form-control form-control-sm w-75"
                  id="user"
                  :placeholder="$t('pages.login.account_placeholder')"
                  rules="required"
                />
              </div>
              <div class="w-75">
                <div class="d-flex justify-content-between">
                  <label
                    for="password"
                    class="form-label text-gray15 fs-sm fw-bold"
                  >
                    {{ $t("pages.login.password") }}
                    <span class="text-red02">*</span>
                  </label>
                  <ErrorMessage class="text-red02 fs-sm" name="password" />
                </div>
              </div>
              <VField
                v-model="loginData.password"
                name="password"
                type="password"
                class="form-control form-control-sm w-75"
                id="password"
                autocomplete="on"
                :placeholder="$t('pages.login.password_placeholder')"
                rules="required"
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-navy03 fw-bold w-75 mb-6 mb-md-8"
            :disabled="isLoading"
          >
            {{ isLoading ? "登入中..." : $t("pages.login.login_btn") }}
          </button>
          <p class="text-center w-75">
            {{ $t("pages.login.no_account") }}
            <router-link to="/signup" class="text-navy01">
              {{ $t("pages.login.signup") }}
            </router-link>
          </p>
        </VeeForm>
      </div>
    </div>
  </section>
  <div class="image-container">
    <img
      src="/download_sm_bg.jpg"
      alt="background_img"
      class="img-bg"
    />
  </div>
  <TheFooter v-if="isMobile" />
</template>

<style scoped>
.content {
  margin-top: 106px;
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

.alert {
  width: 25vw;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 2;
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
import { API } from "@/api.js";

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  data() {
    return {
      loginData: {
        user: "",
        password: "",
      },
      isLoading: false,
      isLoginSuccess: null,
      login_message: "",
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
    async submit(values) {
      this.isLoading = true;
      const loginApi = `${API}/person/login`;
      try {
        const response = await this.axios.post(loginApi, values);
        if (response.data.status == true) {
          this.isLoginSuccess = true;
          this.$router.push("/");
        }
        this.login_message = response.data.message;
        setTimeout(() => {
          this.login_message = "";
        }, 3000);
      } catch (error) {
        console.error("Failed:", error);
      } finally {
        this.isLoading = false;
      }
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>
