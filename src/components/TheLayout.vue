<!-- Layout.vue -->
<template>
  <div>
    <TheHeader />
    <main>
      <slot></slot>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
