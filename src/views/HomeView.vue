<template>
  <div
    class="position-fixed bottom-0 top-0 d-flex flex-column w-100"
    style="max-width:100%"
  >
    <Header />
    <div class="flex-grow-1 overflow-y-auto bg-gray-bg">
      <router-view />
    </div>
    <Navbar />
  </div>
  <PaymentModal />
</template>

<script>
import Header from '@/components/layout/HeaderModel.vue';
import Navbar from '@/components/layout/NavbarModel.vue';
// 某些原因要把modal元件註冊在最外層
import PaymentModal from '@/components/layout/ModalModel.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Navbar,
    PaymentModal,
  },
};
</script>
