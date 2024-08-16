<template>
  <nav class="bg-navy04 d-flex align-items-center align-content-center">
    <div class="nav-left">
      <router-link to="/">
        <img src="/logo/sm.png" class="ms-6 pt-5 pb-7" alt="LOGO" />
      </router-link>
    </div>
    <ul class="d-flex pt-5 pb-7 mb-0 gap-8 navbar-links">
      <li v-for="(item, index) in navItems" :key="index" class="mobile-none">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </li>
    </ul>
    <div class="navbar-right ms-auto d-flex my-5 gap-2">
      <a href="#"><img class="mobile-none" src="/social/btn_sns_FB.png" alt="FB logo" /></a>
      <a href="#"><img class="mobile-none" src="/social/btn_sns_LINE.png" alt="LINE logo" /></a>
    </div>
    <button class="btn btn-sm btn-yellow03 text-navy05 fw-bold ms-4 me-10">
      會員登入
    </button>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "TheNavbar",
  data() {
    return {
      navItems: [],
    };
  },
  methods: {
    generateNavData() {
      const router = useRouter();
      // 取得所有的 routes 作為 navItems
      const excludedNames = ["home", "faq", "privacy"];
      this.navItems = router.options.routes.filter(
        (item) => !excludedNames.includes(item.name)
      );
    },
  },
  mounted() {
    this.generateNavData();
  },
});
</script>

<style scoped>
.md-none {
  display: none;
}

@media (max-width: 800px) {
  .mobile-none {
    display: none;
  }
}
</style>
