<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="offcanvas offcanvas-end w-100"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
    ref="productModle"
  >
    <div class="offcanvas-header py-1">
      <button type="button" class="btn text-body-tertiary" aria-label="Close" @click="hideOffcan">
        <i class="bi bi-arrow-left h2"></i>
      </button>
      <h4 class="offcanvas-title">{{ place }}</h4>
      <button type="button" class="btn text-body-tertiary" aria-label="??">
        <i class="bi bi-question-circle-fill h2"></i>
      </button>
    </div>
    <div class="offcanvas-body bg-gray-bg text-gray-text">
      <!-- 產品多圖 + breadcrumb 導覽 -->
      <section class="border-bottom border-2 mb-2">
        <ProductSwiper class="mb-2" />
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb mb-2 headText">
            <li class="breadcrumb-item">
              <router-link to="/shop" class="text-gray-text" @click="hideOffcan">商品</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="#" class="text-gray-text">冷氣</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="#" class="text-gray-text">冷媒</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">R-134a</li>
          </ol>
        </nav>
      </section>
      <!-- 產品標題 + 規格 -->
      <section class="border-bottom border-2 py-2 mb-2">
        <h3 class="headText">產品規格：</h3>
        <!-- 選項 -->
        <section class="row row-cols-3 g-2 text-nowrap bodyText">
          <div class="position-relative d-inline-block col">
            <span class="border border-2 border-danger text-danger h4 p-1 soldOut rounded d-none"
              >售完</span
            >
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option5"
              autocomplete="off"
              checked
            />
            <label class="btn" for="option5"
              >8lb<br />NT$ <span class="text-danger fst-italic">330</span> 元</label
            >
          </div>
          <div class="position-relative d-inline-block col">
            <span class="border border-2 border-danger text-danger h4 p-1 soldOut rounded d-none"
              >售完</span
            >
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option6"
              autocomplete="off"
            />
            <label class="btn" for="option6"
              >12lb<br />NT$ <span class="text-danger fst-italic">530</span> 元</label
            >
          </div>
          <div class="position-relative d-inline-block col">
            <span class="border border-2 border-danger text-danger h4 p-1 soldOut rounded"
              >售完</span
            >
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option7"
              autocomplete="off"
              disabled
            />
            <label class="btn" for="option7"
              >20lb<br />NT$ <span class="text-danger fst-italic">730</span> 元</label
            >
          </div>
          <div class="position-relative d-inline-block col">
            <span class="border border-2 border-danger text-danger h4 p-1 soldOut rounded d-none"
              >售完</span
            >
            <input
              type="radio"
              class="btn-check"
              name="options-base"
              id="option8"
              autocomplete="off"
            />
            <label class="btn" for="option8"
              >32lb<br />NT$ <span class="text-danger fst-italic">930</span> 元</label
            >
          </div>
        </section>
      </section>
      <!-- 產品說明 -->
      <section class="border-bottom border-2 py-2 mb-2">
        <h3 class="mb-2 headText">商品簡述：</h3>
        <div class="px-3">
          <p>
            R-134a是為家用，商業和工業製冷系統以及空調系統，液體製冷系統和熱泵設計的氫氟烴（HFC）。
          </p>
          <p>
            R-134a用於大型冷水機，汽車空調和農業製造商。
            如果遵循轉換程序，則可以在現有系統中代替R-12。
          </p>
          <p>
            R-134a is a hydrofluorocarbon (HFC) designed for use in household, commercial and
            industrial refrigeration systems as well as air conditioning systems, liquid
            refrigeration systems and heat pumps.
          </p>
        </div>
      </section>
      <!-- 運送說明 -->
      <section class="border-bottom border-2 py-2 mb-2">
        <h3 class="mb-2 headText">運送說明：</h3>
        <div class="px-3">
          <div class="row mb-3 border-bottom border-gray-border border-1">
            <div class="col-1"><i class="bi bi-clock-history h3"></i></div>
            <div class="col-11">
              <p class="mb-1 h4">竹北、新竹、苗栗、台中快速到貨</p>
              <p class="text-danger fw-lighter">限當日12:00前完成訂購，以及非偏遠山區</p>
            </div>
          </div>
          <div class="row">
            <div class="col-1"><i class="bi bi-truck h3"></i></div>
            <div class="col-11">
              <p class="mb-1 h4">可宅配：台灣本島</p>
              <p class="text-danger fw-lighter">外島請標註，將有專人為您服務</p>
            </div>
          </div>
        </div>
      </section>
      <!-- 相關產品 -->
      <section class="py-2">
        <h3 class="mb-2 headText">相關產品：</h3>
        <CorrelationProduct />
      </section>
    </div>
    <!-- 底部 -->
    <div class="offcanvas-header py-1">
      <router-link to="/cart">
        <button type="button" class="btn text-body-tertiary position-relative" @click="hideOffcan">
          <i class="bi bi-cart h2"></i>
          <span
            class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
            style="top: 25%"
          >
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button></router-link
      >
      <button type="button" class="btn btn-gray-text">加入購物車</button>
      <button type="button" class="btn text-body-tertiary">
        <i class="bi bi-heart h2"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.soldOut {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
}
</style>

<script>
import emitter from '@/assets/javascripts/emitter';
import { Offcanvas } from 'bootstrap';
import CorrelationProduct from './CorrelationProduct.vue';
import ProductSwiper from './ProductSwiper.vue';

export default {
  data() {
    return {
      bsOffcanvas: '',
      productData: '',
      place: '',
    };
  },
  components: {
    CorrelationProduct,
    ProductSwiper,
  },
  methods: {
    showOffcan(item) {
      this.bsOffcanvas.show();
      this.productData = item;
    },
    hideOffcan() {
      this.bsOffcanvas.hide();
    },
    toggleStatus(e) {
      e.target.parentElement.classList.toggle('toggleActive');
    },
  },
  mounted() {
    this.bsOffcanvas = new Offcanvas(this.$refs.productModle);
    emitter.on('senddata', (data) => {
      this.place = data;
    });
  },
};
</script>
