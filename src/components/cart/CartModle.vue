<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <div
    class="offcanvas offcanvas-end w-100"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
    ref="CheckoutModle"
  >
    <div class="offcanvas-header py-1">
      <button type="button" class="btn text-body-tertiary" aria-label="Close" @click="hideOffcan">
        <i class="bi bi-arrow-left h2"></i>
      </button>
      <h4 class="offcanvas-title">結帳頁面</h4>
      <button type="button" class="btn text-body-tertiary" aria-label="??">
        <i class="bi bi-question-circle-fill h2"></i>
      </button>
    </div>
    <!-- 時間線 -->
    <div class="position-relative mx-5 my-4">
      <div
        class="progress"
        role="progressbar"
        aria-label="Progress"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
        style="height: 2px"
      >
        <div class="progress-bar bg-gray-text" :style="{ width: timeline + '%' }"></div>
      </div>
      <template v-for="(item, index) in timelineList" :key="index">
        <button
          type="button"
          class="position-absolute top-0 translate-middle btn btn-sm rounded-pill"
          :class="[item.position, item.status ? 'btn-gray-text' : 'btn-gray-bg']"
          style="width: 2rem; height: 2rem"
          @click="returnBtn(index, item.timeline)"
          :disabled="!item.progress"
        >
          {{ index + 1 }}
        </button>
      </template>
    </div>
    <!-- body -->
    <div class="offcanvas-body bg-gray-bg">
      <!-- 步驟 1 折扣碼 -->
      <section :class="{ 'd-none': modelStatus !== 1 }">
        <OrderProduct />
        <ReceiptInfo />
      </section>
      <!-- 步驟 2 填寫地址 -->
      <section :class="{ 'd-none': modelStatus !== 2 }">
        <OrderProduct />
        <ReceiptFinsh />
        <PaymentModel />
      </section>
      <!-- 步驟3 付款 -->
      <section :class="{ 'd-none': modelStatus !== 3 }">
        <Complete />
      </section>
    </div>
    <div class="container-sm py-2">
      <template v-for="(item, index) in timelineList" :key="index">
        <button
          class="btn btn-gray-text w-100 py-2"
          :class="{ 'd-none': modelStatus !== index + 1 }"
          @click="nextStep(index, item.timeline)"
        >
          {{ item.btn }}
        </button>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .btn:disabled, .btn.disabled, fieldset:disabled .btn {
    opacity:1;
  }
</style>

<script>
import { Offcanvas } from 'bootstrap';
import OrderProduct from './OrderProduct.vue';
import ReceiptInfo from './ReceiptInfoModel.vue';
import ReceiptFinsh from './ReceiptInfoFinsh.vue';
import PaymentModel from './PaymentModel.vue';
import Complete from './CompleteModel.vue';

export default {
  data() {
    return {
      bsOffcanvas: '',
      timeline: 25,
      modelStatus: 1,
      timelineList: [
        {
          status: true,
          position: 'start-0',
          progress: true,
          timeline: 25,
          btn: '付款方式',
        },
        {
          status: false,
          position: 'start-50',
          progress: false,
          timeline: 75,
          btn: '結帳',
        },
        {
          status: false,
          position: 'start-100',
          progress: false,
          timeline: 100,
          btn: '繼續購物',
        },
      ],
    };
  },
  components: {
    OrderProduct,
    ReceiptInfo,
    ReceiptFinsh,
    PaymentModel,
    Complete,
  },
  methods: {
    showOffcan() {
      this.bsOffcanvas.show();
    },
    hideOffcan() {
      this.bsOffcanvas.hide();
    },
    returnBtn(index, data) {
      this.modelStatus = index + 1;
      this.timeline = data;
      this.timelineList.forEach((item) => {
        if (this.timeline < item.timeline) {
          // eslint-disable-next-line no-param-reassign
          item.progress = false;
          // eslint-disable-next-line no-param-reassign
          item.status = false;
        }
      });
    },
    nextStep(index, timeline) {
      this.modelStatus = index + 2;
      this.timeline = timeline + 50;
      this.timelineList.forEach((item) => {
        if (this.timeline >= item.timeline) {
          // eslint-disable-next-line no-param-reassign
          item.progress = true;
          // eslint-disable-next-line no-param-reassign
          item.status = true;
        }
        if (this.timeline > 100) {
          // eslint-disable-next-line no-param-reassign
          item.progress = false;
        }
      });
    },
  },
  mounted() {
    this.bsOffcanvas = new Offcanvas(this.$refs.CheckoutModle);
  },
};
</script>
