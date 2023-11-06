<template>
  <swiper :pagination="pagination" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=""
    /></swiper-slide>
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=""
    /></swiper-slide>
  </swiper>
</template>

<style lang="scss">
// Import Swiper styles
@import 'swiper/css';
@import 'swiper/css/pagination';
@import 'swiper/css/navigation';
@import '@/assets/stylesheets/swipers/productSwiper';
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        // eslint-disable-next-line func-names, object-shorthand
        renderBullet: function (index, className) {
          // eslint-disable-next-line prefer-template
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      modules: [Pagination, Navigation],
    };
  },
};
</script>
