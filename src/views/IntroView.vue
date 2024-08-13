<template>
  <TheNavbar></TheNavbar>
  <div class="container">
    <p>{{ $t("components.header.intro") }}</p>
    <p>建置中...</p>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>
