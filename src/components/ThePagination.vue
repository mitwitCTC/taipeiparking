<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <!-- 上一頁按鈕 -->
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

      <!-- 第一頁 -->
      <li class="page-item" :class="{ active: 1 === currentPage }">
        <a class="page-link" href="#" @click.prevent="changePage(1)">1</a>
      </li>

      <!-- 第二頁到第五頁或省略號 -->
      <template v-if="showLeftEllipsis">
        <li class="page-item disabled">
          <span class="page-link">...</span>
        </li>
      </template>

      <li
        v-for="page in middlePages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">
          {{ page }}
        </a>
      </li>

      <!-- 省略號或第六頁到倒數第二頁 -->
      <template v-if="showRightEllipsis">
        <li class="page-item disabled">
          <span class="page-link">...</span>
        </li>
      </template>

      <!-- 最後一頁 -->
      <li
        class="page-item"
        v-if="totalPages > 1"
        :class="{ active: totalPages === currentPage }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(totalPages)">
          {{ totalPages }}
        </a>
      </li>

      <!-- 下一頁按鈕 -->
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
  computed: {
    // 中間頁碼邏輯
    middlePages() {
      if (this.totalPages <= 7) {
        // 總頁數少於等於7時，顯示所有頁碼
        return Array.from({ length: this.totalPages - 2 }, (_, i) => i + 2);
      } else if (this.currentPage <= 4) {
        // 當前頁面在前四頁時，顯示1到5頁
        return [2, 3, 4, 5];
      } else if (this.currentPage >= this.totalPages - 3) {
        // 當前頁面在倒數四頁時，顯示總頁數-4到總頁數-1
        return [this.totalPages - 4, this.totalPages - 3, this.totalPages - 2, this.totalPages - 1];
      } else {
        // 其他情況下顯示當前頁碼的前一頁，當前頁碼，當前頁碼的後一頁
        return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
      }
    },
    // 是否顯示左側省略號
    showLeftEllipsis() {
      return this.totalPages > 7 && this.currentPage > 4;
    },
    // 是否顯示右側省略號
    showRightEllipsis() {
      return this.totalPages > 7 && this.currentPage < this.totalPages - 3;
    }
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
.page-item {
  margin: 0 8px;
}

.page-link {
  border-radius: 50%;
  transition: all 0.3s ease;
}

.page-item.active .page-link,
.page-link:focus,
.page-link:hover {
  border-radius: 50%;
}

/* 禁用省略號的樣式，移除背景色和邊框 */
.page-item.disabled .page-link {
  background-color: transparent;
  border: none;
}
</style>
