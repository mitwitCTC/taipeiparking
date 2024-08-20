<template>
  <div class="footer bg-yellow01 py-13 px-18">
    <div class="container d-flex">
      <p class="text-navy04 fw-bolder fs-lg me-20">
        台北市停車場<br />商業同業公會
      </p>
      <ul class="d-flex">
        <li>
          <router-link class="text-navy03 me-6" to="intro">{{
            $t("components.footer.intro")
          }}</router-link>
        </li>
        <li>
          <router-link class="text-navy03 me-6" to="joinUs">{{
            $t("components.footer.joinUs")
          }}</router-link>
        </li>
        <li>
          <router-link class="text-navy03 me-6" to="faq">{{
            $t("components.footer.faq")
          }}</router-link>
        </li>
        <li>
          <router-link class="text-navy03 me-6" to="contactUs">{{
            $t("components.footer.contactUs")
          }}</router-link>
        </li>
        <li>
          <router-link class="text-navy03 me-6" to="privacy">{{
            $t("components.footer.privacy")
          }}</router-link>
        </li>
      </ul>
      <p class="text-navy03 fs-sm ms-xl-auto text-nowrap" style="">Copyright &copy; {{ year }} TaipeiParking.com</p>
    </div>
  </div>
</template>
<style scoped>
.container{
  align-items: center;
}

@media (max-width: 1199px) {
  .container {
    /* align-items: start; */
    flex-direction: column; /* 垂直排列 */
    align-items: flex-start; /* 內容靠左對齊 */
  }

  .container p:first-child {
    margin-bottom: 20px; /* 與 ul 之間增加間距 */
    margin-right: 0; /* 移除右邊距 */
  }

  .container ul {
    flex-direction: column; /* ul 內的 li 垂直排列 */
    padding-left: 0; /* 移除內邊距 */
    margin-bottom: 20px; /* 與 copyright 之間增加間距 */
  }

  .container ul li {
    margin-bottom: 10px; /* li 之間的間距 */
  }

  .container p:last-child {
    margin-left: 0; /* 移除左邊距 */
  }
}
</style>
<script>
export default {
  data() {
    return {
      year: null,
    };
  },
  methods: {
    getThisYear() {
      this.year = new Date().getFullYear();
    },
  },
  mounted() {
    this.getThisYear();
  },
};
</script>
