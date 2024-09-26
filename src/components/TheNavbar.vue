<template>
  <nav class="navbar navbar-expand-lg navbar-navy04 bg-navy04 fixed-top">
    <div class="container-fluid">
      <!-- LOGO -->
      <router-link to="/">
        <img src="/logo/sm.svg" class="ms-6 pt-5 pb-7" alt="LOGO" />
      </router-link>

      <!-- Login Button (Visible on Mobile) -->
      <button class="btn btn-sm btn-yellow03 text-navy05 fw-bold ms-auto d-lg-none me-2 mt-2" @click="handleLoginLogout">
        {{ loginInfo ? '會員登出' : '會員登入' }}
      </button>

      <!-- Navbar Toggler -->
      <button
        class="navbar-toggler border-0 text-white"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#navbarNavAltMarkup'"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon border-0">
          <i :class="navbarIcon"></i>
        </span>
      </button>
      <!-- Navbar Links -->
      <div
        class="collapse navbar-collapse navbar-overlay"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="{ name: item.name }"
            class="nav-link text-white"
            :class="{ active: $route.name === item.name }"
            @click="closeNavbar"
          >
            {{ item.meta.title }}
          </router-link>
          <a v-if="loginInfo != null" href="https://t01.mitwit-cre.com.tw/manager" class="mt-md-2">新增場站</a>
        </div>

        <!-- Right Links and Login Button -->
        <div class="navbar-right d-flex align-items-center ms-auto">
          <!-- Social Icons (Hidden on Mobile) -->
          <a href="#" class="d-none d-lg-block me-2">
            <img src="/social/btn_sns_FB.svg" alt="FB logo" />
          </a>
          <a href="#" class="d-none d-lg-block me-2">
            <img src="/social/btn_sns_LINE.svg" alt="LINE logo" />
          </a>

          <!-- Login Button (Visible on Desktop) -->
          <button class="btn btn-sm btn-yellow03 text-navy05 fw-bold ms-4 d-none d-lg-block" @click="handleLoginLogout">
              {{ loginInfo ? '會員登出' : '會員登入' }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { API } from '@/api.js'
import { getCookie, deleteCookie } from '@/cookie.js';

import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "TheNavbar",
  data() {
    return {
      loginInfo: null,
      navItems: [],
      isNavbarOpen: false,
    };
  },
  created() {
    // 檢查 _LOGIN_INFO cookie
    this.loginInfo = this.getLoginInfo();     
  },
  methods: {
    getLoginInfo() {
      return getCookie('_LOGIN_INFO');
    },
    generateNavData() {
      const router = useRouter();
      // 取得所有的 routes 作為 navItems
      const excludedNames = ["home", "faq", "privacy", "member", "vendor", "activities", "pay", "announcement-detail", "login", "signup", "contactSuccess", "signupSuccess", "monthly", "temporary"];
      this.navItems = router.options.routes.filter(
        (item) => !excludedNames.includes(item.name)
      );
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
    async handleLoginLogout() {
      if (this.loginInfo) {
        const logoutApi = `${API}/person/logout`;
        try {
          const response = await this.axios.get(logoutApi);
          if (response.data.status == true) {
            deleteCookie('_LOGIN_INFO');
            this.loginInfo = null;
            this.$router.push("/");
          }
        } catch (error) {
          console.error("Failed:", error);
        }
      } else {
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.generateNavData();
    this.loginInfo = this.getLoginInfo(); 
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.checkLoginInfo();  // 確保在每次進入路由時檢查
    });
  },
  computed: {
    navbarIcon() {
      return this.isNavbarOpen
        ? "bi bi-x-lg text-white fs-xl6"
        : "bi bi-list text-white fs-xl6";
    },
  },
});
</script>

<style scoped>
.navbar-toggler-icon {
  background-image: none;
}

.nav-link {
  color: white !important;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  box-shadow: none;
}
</style>
