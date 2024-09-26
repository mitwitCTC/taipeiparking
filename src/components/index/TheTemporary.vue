<template>
  <section id="temporary">
    <div class="temporay-bg-container text-center align-content-center">
      <router-link to="/temporary">
        <button class="btn btn-navy03 btn-go-temporary text-xl fw-bold">
          {{ $t("pages.index.temporary.btn-text") }}
        </button>
      </router-link>
      <!-- <img src="/index/temporary.png" class="temporay-bg" alt="temporay-bg" /> -->
    </div>
  </section>
</template>

<style scoped>
.temporay-bg-container {
  background-image: url("/index/temporary.png");
  width: 100%;
  height: 952px;
}

.btn-go-temporary {
  padding: 24px 120px;
}

@media (max-width: 560px) {
  .temporay-bg-container {
    height: 720px;
  }
  .btn-go-temporary {
    padding: 12px 48px;
  }
}

@media (max-width: 360px) {
  .temporay-bg-container {
    height: 640px;
  }
}
</style>
