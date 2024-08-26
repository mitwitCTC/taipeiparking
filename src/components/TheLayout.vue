<!-- Layout.vue -->
<template>
  <div>
    <TheHeader ref="headerRef"/>
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
