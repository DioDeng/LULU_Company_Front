<!-- eslint-disable max-len -->
<template>
  <section class="bg-body">
    <!-- swiper -->
    <Carousel class="mb-4" />
    <!-- Category List -->
    <Navbar class="mb-4" />
    <!-- products -->
    <Products />
  </section>
</template>

<script>
import Carousel from '@/components/shop/CarouselSwiper.vue';
import Navbar from '@/components/shop/NavbarModel.vue';
import Products from '@/components/shop/ProductsModel.vue';

export default {
  components: {
    Carousel,
    Navbar,
    Products,
  },
  setup() {
    return {};
  },
};
</script>
