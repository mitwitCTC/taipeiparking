<template>
  <section id="activities" class="mt-16">
    <h2 class="text-navy04 fs-xl6 fw-bold text-center mb-10">
      {{ $t("pages.index.activities") }}
    </h2>
    <Vue3Marquee :pause-on-hover="true">
      <div class="activity-list d-flex gap-4">
        <div class="activity-item">
          <div class="img-container">
            <img src="/public/index/activities/img01.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第21屆第1次理監事暨會員聯誼</p>
        </div>
        <div class="activity-item">
          <div class="img-container">
            <img src="/public/index/activities/img02.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第21屆第2次理監事暨會員聯誼</p>
        </div>
        <div class="activity-item">
          <div class="img-container">
            <img src="/public/index/activities/img03.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第1屆第3次理監事聯席會議</p>
        </div>
        <div class="activity-item">
          <div class="img-container">
            <img src="/public/index/activities/img04.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第1屆第4次理監事聯席會議</p>
        </div>
        <div class="activity-item me-4">
          <div class="img-container">
            <img src="/public/index/activities/img05.jpg" />
          </div>
          <p class="text-gray13 fw-bold mt-4">第1屆第5次理監事聯席會議</p>
        </div>
      </div>
    </Vue3Marquee>
    <div class="text-center mt-12">
      <button class="btn btn-lg btn-navy03 fw-bold">查看更多活動花絮</button>
    </div>
  </section>
</template>
<style>
.img-container {
  width: 392px;
  height: 392px;
}
.img-container img {
  max-width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
<script></script>
