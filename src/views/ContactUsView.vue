<template>
  <TheLayout ref="layoutRef">
    <section id="faq" class="faq">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold mb-4 mb-md-0">
          {{ $t("pages.contactUs.title") }}
        </p>
      </div>
      <div class="container mt-6 mt-md-14">
        <div class="row">
          <div class="text-navy03 fs-xl col-12 col-md-3">
            請詳細填寫您的洽詢事項，我們將盡快回覆您
          </div>
          <div class="col-12 col-md-9">
            <VeeForm @submit="submit">
              <div class="row mb-6 mb-md-10">
                <div class="col-12 col-md-6">
                  <div>
                    <label
                      for="company_name"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.contactUs.company_name") }}
                    </label>
                    <VField
                      v-model="contact.company_name"
                      name="company_name"
                      type="text"
                      class="form-control form-control-sm"
                      id="company_name"
                      placeholder="eg. XXX 停車公司"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div>
                    <div class="d-flex justify-content-between">
                      <label
                        for="contact_name"
                        class="form-label text-gray15 fs-sm fw-bold"
                      >
                        {{ $t("pages.contactUs.contact_name") }}
                        <span class="text-red02">*</span>
                      </label>
                      <ErrorMessage
                        class="text-red02 fs-sm"
                        name="contact_name"
                      />
                    </div>
                    <VField
                      v-model="contact.contact_name"
                      name="contact_name"
                      type="text"
                      class="form-control form-control-sm"
                      id="contact_name"
                      placeholder="e.g. 王大明經理"
                      rules="required"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-6 mb-md-10">
                <div class="col-12 col-md-6">
                  <div class="d-flex justify-content-between">
                    <label
                      for="company_phone"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.contactUs.company_phone") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage
                      class="text-red02 fs-sm"
                      name="company_phone"
                    />
                  </div>
                  <VField
                    v-model="contact.company_phone"
                    name="company_phone"
                    type="text"
                    class="form-control form-control-sm"
                    id="company_phone"
                    placeholder="e.g. 02-88889999"
                    rules="required|phone"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <div class="d-flex justify-content-between">
                    <label
                      for="contact_phone"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.contactUs.contact_phone") }}
                    </label>
                  </div>
                  <VField
                    v-model="contact.contact_phone"
                    name="contact_phone"
                    type="text"
                    class="form-control form-control-sm"
                    id="contact_phone"
                    placeholder="e.g. 0911222333"
                  />
                </div>
              </div>
              <div class="row mb-6 mb-md-10">
                <div class="col-12 col-md-6">
                  <label for="fax" class="form-label text-gray15 fs-sm fw-bold">
                    {{ $t("pages.contactUs.fax") }}
                  </label>
                  <VField
                    v-model="contact.fax"
                    name="fax"
                    type="text"
                    class="form-control form-control-sm"
                    id="fax"
                    placeholder="e.g. 29996666"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <div class="d-flex justify-content-between">
                    <label
                      for="email"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.contactUs.email") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="email" />
                  </div>
                  <VField
                    v-model="contact.email"
                    name="email"
                    type="text"
                    class="form-control form-control-sm"
                    id="email"
                    placeholder="e.g. david@company.com"
                    rules="required|email"
                  />
                </div>
              </div>
              <div class="row mb-6 mb-md-10">
                <div class="col-12">
                  <div class="d-flex justify-content-between">
                    <label
                      for="inquiry"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.contactUs.inquiry") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="inquiry" />
                  </div>
                  <VField
                    v-model="contact.inquiry"
                    name="inquiry"
                    as="textarea"
                    type="text"
                    class="form-control form-control-sm"
                    id="inquiry"
                    placeholder="e.g. 請問加入公會對我經營的停車場有什麼助益？"
                    rules="required"
                  />
                </div>
              </div>
              <div class="row mb-6 mb-md-10">
                <div class="col-7">
                  <div class="d-flex justify-content-between">
                    <label
                      for="captcha"
                      class="form-label text-gray15 fs-sm fw-bold"
                    >
                      {{ $t("pages.contactUs.captcha") }}
                      <span class="text-red02">*</span>
                    </label>
                    <ErrorMessage class="text-red02 fs-sm" name="captcha" />
                  </div>
                  <VField
                    v-model="contact.captcha"
                    name="captcha"
                    type="text"
                    class="form-control form-control-sm"
                    id="captcha"
                    rules="required"
                  />
                </div>
                <div class="col-3 mt-5">
                  <div v-html="captcha" @click="fetchCaptcha"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button type="submit" class="btn btn-navy03 w-100">
                    {{ $t("pages.contactUs.submit") }}
                  </button>
                </div>
              </div>
            </VeeForm>
          </div>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.faq {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

input:focus {
  border: 1px solid black;
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";
import { API } from "@/api.js";

export default {
  data() {
    return {
      contact: {
        company_name: "",
        company_phone: "",
        contact_name: "",
        contact_phone: "",
        fax: "",
        email: "",
        inquiry: "",
        captcha: "",
      },
      captcha: "",
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.fetchCaptcha();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = layout.$refs.headerRef.$el.offsetHeight;
        const faqSection = this.$el.querySelector(".faq");
        faqSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    async fetchCaptcha() {
      const fetchCaptchaApi = `${API}/support/captcha`;
      try {
        const response = await this.axios.get(fetchCaptchaApi);
        this.captcha = response.data;
      } catch (error) {
        console.error("Failed to fetch captcha:", error);
      }
    },
    async submit(values) {
      console.log(values);
    },
  },
};
</script>
