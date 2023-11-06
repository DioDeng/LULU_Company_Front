<template>
    <Navbar class="position-sticky" style="top:0"/>
      <router-view />
</template>

<script>
import Navbar from '@/components/layout/DashNavbarModel.vue';

export default {
  components: {
    Navbar,
  },
  mounted() {
  },
};
</script>
