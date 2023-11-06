<template>
  <section class="container-fluid">
    <ul class="loop">
      <li>
        <span> THE F2E THE F2E THE F2E THE F2E </span><span> THE F2E THE F2E THE F2E THE F2E </span>
      </li>
    </ul>
    <div class="input-group input-group-sm mb-2 fw-lighter">
      <button
        class="btn btn-outline-gray-text dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ALL
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item text-gary-text" href="#">冷媒</a></li>
        <li><a class="dropdown-item text-gary-text" href="#">銅管</a></li>
        <li><a class="dropdown-item text-gary-text" href="#">冷氣相關</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item text-gary-text" href="#">洗衣機</a></li>
        <li><a class="dropdown-item text-gary-text" href="#">冰箱</a></li>
        <li><a class="dropdown-item text-gary-text" href="#">其他家電</a></li>
      </ul>
      <input
        type="text"
        class="form-control border-gray-text"
        aria-label="Text input with dropdown button"
      />
      <button class="btn btn-outline-gray-text" type="button">
        <i class="bi bi-search"></i>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.loop {
  display: inline-block;
  font-family: 'Dela Gothic One';
  font-size: 3rem;
  color: transparent;
  white-space: nowrap; /*文字必須設為nowrap，否則文字會自動換行*/
  -webkit-text-stroke: 1px black;
  margin: -0.3rem;
}
.loop > span {
  display: inline-block;
}
</style>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from 'gsap';

export default {
  mounted() {
    gsap.to('.loop', {
      xPercent: '-50',
      ease: 'none',
      duration: 13,
      repeat: -1,
    });
  },
};
</script>
