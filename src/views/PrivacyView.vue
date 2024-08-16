<template>
  <TheLayout>
    <div class="container">
      <p>{{ $t("components.footer.privacy") }}</p>
      <p>建置中...</p>
    </div>
  </TheLayout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  components: {
    TheLayout,
  },
};
</script>
