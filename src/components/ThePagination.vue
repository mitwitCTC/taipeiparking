<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a
          class="page-link"
          href="#"
          @click.prevent="changePage(currentPage - 1)"
          :tabindex="currentPage === 1 ? -1 : 0"
          :aria-disabled="currentPage === 1"
        >
          <i class="bi bi-chevron-left"></i>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a
          class="page-link"
          href="#"
          @click.prevent="changePage(currentPage + 1)"
          :tabindex="currentPage === totalPages ? -1 : 0"
          :aria-disabled="currentPage === totalPages"
        >
          <i class="bi bi-chevron-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("page-changed", page);
      }
    },
  },
};
</script>

<style scoped>
.page-item{
    margin: 0 8px;
}
.active .page-link {
  border-radius: 50%;
}
</style>
