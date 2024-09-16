<template>
  <TheLayout ref="layoutRef">
    <section id="faq" class="faq">
      <div class="bg-yellow03 py-md-12 py-6 tab-bg">
        <p class="container text-navy05 fs-xl5 fw-bold mb-4 mb-md-0">
          {{ $t("pages.faq.title") }}
        </p>
      </div>
      <div
        class="container"
        v-for="(item, itemIndex) in faqData"
        :key="itemIndex"
      >
        <h3 class="text-navy03 fs-xl3 fw-bold mt-4 mb-2">
          {{ item.type }} ({{ item.count }})
        </h3>
        <div class="accordion" :id="'accordionPanelsStayOpen' + itemIndex">
          <div
            class="accordion-item"
            v-for="(question, questionIndex) in item.questions"
            :key="questionIndex"
          >
            <h2
              class="accordion-header"
              :id="'panelsStayOpen-heading' + itemIndex + '-' + questionIndex"
            >
              <button
                class="accordion-button text-navy05 fs-xl fw-bold px-0"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="
                  '#panelsStayOpen-collapse' + itemIndex + '-' + questionIndex
                "
                aria-expanded="true"
                :aria-controls="
                  'panelsStayOpen-collapse' + itemIndex + '-' + questionIndex
                "
              >
                {{ question.question }}
              </button>
            </h2>
            <div
              :id="'panelsStayOpen-collapse' + itemIndex + '-' + questionIndex"
              class="accordion-collapse collapse show"
              aria-labelledby="'panelsStayOpen-heading' + itemIndex + '-' + questionIndex"
            >
              <div class="accordion-body text-gray15 fs-md">
                {{ question.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TheLayout>
</template>

<style scoped>
.faq {
  padding-bottom: clamp(80px, 5.16vw + 33.1px, 160px);
}

.accordion-item {
  border: none;
  border-bottom: 1px solid #d7d7d7;
}

.accordion-button:not(.collapsed) {
  background-color: transparent;
}
</style>

<script>
import TheLayout from "@/components/TheLayout.vue";

export default {
  data() {
    return {
      faqData: [],
    };
  },
  components: {
    TheLayout,
  },
  mounted() {
    this.adjustPaddingTop();
    window.addEventListener("resize", this.adjustPaddingTop);
    this.getFaq();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustPaddingTop);
  },
  methods: {
    adjustPaddingTop() {
      const layout = this.$refs.layoutRef;
      if (layout && layout.$refs.headerRef) {
        const headerHeight = 98;
        const faqSection = this.$el.querySelector(".faq");
        faqSection.style.paddingTop = `${headerHeight}px`;
      }
    },
    getFaq() {
      this.faqData = [
        {
          type: "合作相關",
          questions: [
            {
              question: "如何加入公會？",
              answer: "A：如何加入公會？",
            },
            {
              question: "加入公會的好處有什麼？",
              answer: "A：加入公會的好處有什麼？",
            },
            {
              question: "公會都在做什麼？",
              answer: "A：公會都在做什麼？",
            },
            {
              question: "我想認識其他廠商可以透過公會轉介嗎？",
              answer: "A：我想認識其他廠商可以透過公會轉介嗎？",
            },
            {
              question: "成為公會夥伴後，還可以和其他非公會會員業者合作嗎？",
              answer: "A：成為公會夥伴後，還可以和其他非公會會員業者合作嗎？",
            },
          ],
          count: 5,
        },
        {
          type: "費用相關",
          questions: [
            {
              question: "如何加入公會？",
              answer: "A：如何加入公會？",
            },
            {
              question: "加入公會的好處有什麼？",
              answer: "A：加入公會的好處有什麼？",
            },
            {
              question: "公會都在做什麼？",
              answer: "A：公會都在做什麼？",
            },
            {
              question: "我想認識其他廠商可以透過公會轉介嗎？",
              answer: "A：我想認識其他廠商可以透過公會轉介嗎？",
            },
            {
              question: "成為公會夥伴後，還可以和其他非公會會員業者合作嗎？",
              answer: "A：成為公會夥伴後，還可以和其他非公會會員業者合作嗎？",
            },
          ],
          count: 5,
        },
        {
          type: "維護相關",
          questions: [
            {
              question: "如何加入公會？",
              answer: "A：如何加入公會？",
            },
            {
              question: "加入公會的好處有什麼？",
              answer: "A：加入公會的好處有什麼？",
            },
            {
              question: "公會都在做什麼？",
              answer: "A：公會都在做什麼？",
            },
            {
              question: "我想認識其他廠商可以透過公會轉介嗎？",
              answer: "A：我想認識其他廠商可以透過公會轉介嗎？",
            },
            {
              question: "成為公會夥伴後，還可以和其他非公會會員業者合作嗎？",
              answer: "A：成為公會夥伴後，還可以和其他非公會會員業者合作嗎？",
            },
          ],
          count: 5,
        },
      ];
    },
  },
};
</script>
