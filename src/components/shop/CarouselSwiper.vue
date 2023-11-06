<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :slidesPerView="1.5"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    class="mySwiper"
  >
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <swiper-slide><img src="https://3.bp.blogspot.com/-GCRwg01rCtE/V_sXreCYGOI/AAAAAAAApOo/R4WTsVrHN-wBPenCcPYifUQ2GNyyJR4WQCLcB/s640/1.png" alt=""></swiper-slide>
    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
</template>

<style lang="scss">
// Import Swiper styles
@import 'swiper/css';

@import 'swiper/css/pagination';
@import 'swiper/css/navigation';
@import '@/assets/stylesheets/swipers/carouseSwiper';

</style>

<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay],
    };
  },
};
</script>
