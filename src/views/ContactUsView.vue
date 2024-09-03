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
            <div class="row mb-6 mb-md-10">
              <div class="col-12 col-md-6">
                <div>
                  <label
                    for="company_name"
                    class="form-label text-gray15 fs-sm fw-bold"
                  >
                    {{ $t("pages.contactUs.company_name") }}
                  </label>
                  <input
                    v-model="contact.company_name"
                    type="text"
                    class="form-control form-control-sm"
                    id="company_name"
                    placeholder="eg. XXX 停車公司"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div>
                  <label
                    for="company_name"
                    class="form-label text-gray15 fs-sm fw-bold"
                  >
                    {{ $t("pages.contactUs.contact_name") }}
                  </label>
                  <input
                    v-model="contact.contact_name"
                    type="text"
                    class="form-control form-control-sm"
                    id="contact_name"
                    placeholder="e.g. 王大明經理"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="mb-6 mb-md-10">
                  <label
                    for="company_phone"
                    class="form-label text-gray15 fs-sm fw-bold"
                  >
                    {{ $t("pages.contactUs.company_phone") }}
                  </label>
                  <input
                    v-model="contact.company_phone"
                    type="text"
                    class="form-control form-control-sm"
                    id="company_phone"
                    placeholder="e.g. (02)88889999"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-6 mb-md-10">
                  <label
                    for="contact_phone"
                    class="form-label text-gray15 fs-sm fw-bold"
                  >
                    {{ $t("pages.contactUs.contact_phone") }}
                  </label>
                  <input
                    v-model="contact.contact_phone"
                    type="text"
                    class="form-control form-control-sm"
                    id="contact_phone"
                    placeholder="e.g. 0911222333"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="mb-6 mb-md-10">
                  <label for="fax" class="form-label text-gray15 fs-sm fw-bold">
                    {{ $t("pages.contactUs.fax") }}
                  </label>
                  <input
                    v-model="contact.fax"
                    type="text"
                    class="form-control form-control-sm"
                    id="fax"
                    placeholder="e.g. 29996666"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="mb-6 mb-md-10">
                  <label
                    for="email"
                    class="form-label text-gray15 fs-sm fw-bold"
                  >
                    {{ $t("pages.contactUs.email") }}
                  </label>
                  <input
                    v-model="contact.email"
                    type="text"
                    class="form-control form-control-sm"
                    id="email"
                    placeholder="e.g. david@company.com"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label
                  for="inquiry"
                  class="form-label text-gray15 fs-sm fw-bold"
                >
                  {{ $t("pages.contactUs.inquiry") }}
                </label>
                <textarea
                  v-model="contact.inquiry"
                  type="text"
                  class="form-control form-control-sm"
                  id="inquiry"
                  placeholder="e.g. 請問加入公會對我經營的停車場有什麼助益？"
                />
              </div>
            </div>
            <div class="row mb-6 mb-md-10">
              <div class="col-7">
                <label for="fax" class="form-label text-gray15 fs-sm fw-bold">
                  {{ $t("pages.contactUs.captcha") }}
                </label>
                <input
                  v-model="contact.captcha"
                  type="text"
                  class="form-control form-control-sm"
                  id="captcha"
                />
              </div>
              <div class="col-3 mt-5">
                <div v-html="captcha" @click="fetchCaptcha"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button class="btn btn-navy03 w-100" @click="sumbit">
                  {{ $t("pages.contactUs.submit") }}
                </button>
              </div>
            </div>
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
import apiClient from "@/api";

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
      try {
        const response = await apiClient.get("/support/captcha");
        this.captcha = response.data;
      } catch (error) {
        console.error("Failed to fetch captcha:", error);
      }
    },
    async sumbit(){
      console.log("聯絡表單內容",this.contact);
    }
  },
};
</script>
