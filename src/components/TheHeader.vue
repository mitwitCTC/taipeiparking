<template>
  <TheNavbar></TheNavbar>
  <TheBanner></TheBanner>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheBanner from '@/components/TheBanner.vue'
export default {
  name: "TheHeader",
  components: {
    TheNavbar,
    TheBanner
  }
};
</script>

<style>

</style>
