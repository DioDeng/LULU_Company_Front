<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <section class="h-100 d-flex align-items-start flex-column text-gray-text">
    <!-- 購物車 -->
    <section class="container-fluid py-2">
      <div class="card">
        <div class="card-body bg-gray-card px-0 pb-0">
          <div class="card-title border-bottom px-3 d-flex align-items-center">
            <input class="form-check-input h3 border-dark mb-3" type="checkbox" value="" />
            <h4 class="ms-2 headText">全選 ALL</h4>
          </div>
          <template v-for="item in cartData.carts" :key="item.id">
            <div class="card-text mb-4 px-3">
              <div class="row g-3">
                <div class="col-5">
                  <div class="d-flex align-items-center">
                    <input
                      class="form-check-input h3 border-gray-text me-2"
                      type="checkbox"
                      value=""
                    />
                    <img :src="item.product.image" class="w-100 rounded" alt="" />
                  </div>
                </div>
                <div class="col-7">
                  <h3 class="headText">{{ item.product.title }}</h3>
                  <div class="d-flex justify-content-between">
                    <h4 class="opacity-68">Price:</h4>
                    <h4>NT ${{ this.$toCurrency(item.product.price) }}</h4>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h4 class="opacity-68">Size:</h4>
                    <h4>{{ item.product.size }}</h4>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h4 class="opacity-68">Quantity:</h4>
                    <h4>
                      <i class="bi bi-dash"></i><span class="mx-2">{{ item.quantity }}</span
                      ><i class="bi bi-plus"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <div class="card-footer bg-gray-card">
            <h5 class="">優惠資訊</h5>
            <h4 class="text-secondary">中部地，免運費</h4>
          </div>
        </div>
      </div>
    </section>
    <!-- 結帳去 -->
    <section class="mt-auto sticky-bottom w-100">
      <div class="container-fluid bg-body py-2 ">
        <!-- 如果已經登入就縮起來 -->
        <section class="">
          <div class="mb-1">
            <h6 class="">
              使用會員折扣請
              <router-link to="/login" class="text-secondary">登入</router-link>，非會員可
              <router-link to="/login" class="text-secondary">註冊新會員</router-link
              >，享有100折扣。
            </h6>
          </div>
          <div>
            <h6 class="mb-0">會員享有</h6>
            <ul class="mb-0">
              <li>會員獨享折扣</li>
              <li>註冊會員禮</li>
              <li>每年生日優惠折扣</li>
            </ul>
          </div>
        </section>
        <div class="d-flex justify-content-end mb-1">
          <h5>總計：</h5>
          <h5 class="ms-2">
            $<span class="ms-1 text-danger">{{ this.$toCurrency(cartData.finalTotal) }}</span>
          </h5>
        </div>
        <!-- if 購物車 = 0 button disabled -->
        <button class="btn btn-gray-text w-100 py-2" @click="openModel">結帳去</button>
      </div>
    </section>
  </section>
  <Checkout ref="checkout" />
</template>

<script>
import carts from '@/assets/testDataJson/carts.json';
import Checkout from '@/components/cart/CartModle.vue';

export default {
  data() {
    return {
      cartData: carts,
    };
  },
  components: {
    Checkout,
  },
  methods: {
    openModel() {
      this.$refs.checkout.showOffcan();
    },
  },
};
</script>
