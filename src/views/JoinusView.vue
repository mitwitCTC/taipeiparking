<template>
  <TheLayout>
    <section id="join-us" class="join-us bg-yellow03">
      <div class="container">
        <p class="text-navy05 fs-xl5 fw-bold mb-8 mb-md-16">
          {{ $t("pages.joinUs.title") }}
        </p>
        <div class="d-flex justify-content-between row gap-1">
          <div class="method bg-white p-10 col-12 col-md-5 mb-4">
            <p class="text-navy01 fs-xl3 fw-bold">
              {{ $t("pages.joinUs.method1.title") }}
            </p>
            <p class="text-navy05 fs-xl fw-bold">
              {{ $t("pages.joinUs.method1.subTitle") }}
            </p>
            <hr />
            <p class="text-gray15 fw-bold">
              {{ $t("pages.joinUs.method1.downloadForm") }}
            </p>
            <p class="text-gray15 formatted-text">
              {{ $t("pages.joinUs.method1.attachments") }}
            </p>
            <p class="text-gray15 fw-bold">
              {{ $t("pages.joinUs.method1.payment") }}
            </p>
            <p class="formatted-text">
              {{ $t("pages.joinUs.method1.sendDocuments") }}
            </p>
          </div>
          <div class="method bg-white p-10 col-12 col-md-5 mb-4">
            <p class="text-navy01 fs-xl3 fw-bold">
              {{ $t("pages.joinUs.method2.title") }}
            </p>
            <p class="text-navy05 fs-xl fw-bold">
              {{ $t("pages.joinUs.method2.subTitle") }}
            </p>
            <hr />
            <p class="text-gray15 fw-bold">
              {{ $t("pages.joinUs.method2.address") }}
            </p>
            <p class="text-gray15 formatted-text">
              {{ $t("pages.joinUs.method2.attachments") }}
            </p>
            <p class="text-gray15 fw-bold">
              {{ $t("pages.joinUs.method2.payment") }}
            </p>
            <p class="formatted-text">
              {{ $t("pages.joinUs.method2.sendDocuments") }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <TheDownload></TheDownload>
  </TheLayout>
</template>

<style scoped>
.join-us {
  padding-top: 124px;
  padding-bottom: 117px;
}

.method {
  box-shadow: 0px 0px 10px 0px #0000001a;
  border-radius: 12px;
}

.formatted-text {
  white-space: pre-line; /* 保持換行符 \n 的顯示 */
}

@media (max-width: 800px) {
  .join-us {
    padding-top: 124px;
    padding-bottom: 124px;
  }
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";
import TheDownload from "@/components/index/TheDownload.vue";
export default {
  components: {
    TheLayout,
    TheDownload
  },
};
</script>
