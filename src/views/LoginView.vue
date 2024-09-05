<template>
  <TheHeader ref="layoutRef"></TheHeader>
  <section id="content" class="container content">
    <div class="row">
      <div class="col-12 col-md-6 mt-10 mt-md-20">
        <p class="text-navy05 fs-xl5 fw-bold">
          {{ $t("pages.login.title") }}
        </p>
        <VeeForm @submit="submit">
          <div class="row mb-6 mb-md-10">
            <div class="col-12">
              <div class="mb-6 mb-md-8">
                <label for="user" class="form-label text-gray15 fs-sm fw-bold">
                  {{ $t("pages.login.account") }}
                </label>
                <VField
                  v-model="loginData.user"
                  name="user"
                  type="text"
                  class="form-control form-control-sm w-75"
                  id="user"
                  :placeholder="$t('pages.login.account_placeholder')"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="form-label text-gray15 fs-sm fw-bold"
                >
                  {{ $t("pages.login.password") }}
                </label>
                <VField
                  v-model="loginData.password"
                  name="password"
                  type="password"
                  class="form-control form-control-sm w-75"
                  id="password"
                  autocomplete="on"
                  :placeholder="$t('pages.login.password_placeholder')"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-navy03 fw-bold w-75 mb-6 mb-md-8"
          >
            {{ $t("pages.login.login_btn") }}
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
</template>

<style scoped>
.content {
  margin-top: 106px;
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

export default {
  data() {
    return {
      loginData: {
        user: "",
        password: "",
      },
    };
  },
  components: {
    TheHeader,
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    submit(values) {
      console.log("submit", values);
    },
  },
};
</script>
