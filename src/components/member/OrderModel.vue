<template>
  <div
    class="offcanvas offcanvas-end w-100"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
    ref="orderModle"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn text-body-tertiary"
        aria-label="Close"
        @click="hideOffcan"
      >
        <i class="bi bi-arrow-left h2"></i>
      </button>
      <h4 class="offcanvas-title">我的訂單</h4>
      <button type="button" class="btn text-body-tertiary" aria-label="??">
        <i class="bi bi-question-circle-fill h2"></i>
      </button>
    </div>
    <!-- navbar -->
        <Navtabs :optionList="optionList" />
    <div class="offcanvas-body px-0  bg-gray-bg">
      <!-- 付款、處理、收穫、完成、取消 -->
      <div class="tab-content" id="nav-tabContent">
        <Payment />
        <Process />
        <Waiting />
        <Finish />
        <Cancle />
      </div>
    </div>
  </div>
</template>

<script>
import { Offcanvas } from 'bootstrap';
import Navtabs from '@/components/member/navbar/NavtabsModel.vue';
import Payment from '@/components/member/order/PaymentModel.vue';
import Process from '@/components/member/order/ProcessModel.vue';
import Waiting from '@/components/member/order/WaitingModel.vue';
import Finish from '@/components/member/order/FinishModel.vue';
import Cancle from '@/components/member/order/CancelModel.vue';

export default {
  data() {
    return {
      bsOffcanvas: '',
      optionList: [
        { title: '待付款', target: '#payment-pane' },
        { title: '處理中', target: '#process-pane' },
        { title: '待收貨', target: '#waiting-pane' },
        { title: '已完成', target: '#finish-pane' },
        { title: '已取消', target: '#cancle-pane' },
      ],
    };
  },
  components: {
    Navtabs,
    Payment,
    Process,
    Waiting,
    Finish,
    Cancle,
  },
  methods: {
    showOffcan() {
      this.bsOffcanvas.show();
    },
    hideOffcan() {
      this.bsOffcanvas.hide();
    },
  },
  mounted() {
    this.bsOffcanvas = new Offcanvas(this.$refs.orderModle);
  },
};
</script>
