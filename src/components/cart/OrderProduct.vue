<!-- eslint-disable max-len -->
<template>
  <h3 class="mb-2 headText">訂單內容：</h3>
  <div class="accordion accordion-flush shadow-sm mb-5" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <div class="d-flex justify-content-between w-100">
            <!-- 產生訂單ＩＤ -->
            <span class="text-gray-text">#177823</span>
            <span class="fw-bold">$8,100</span>
            <span> </span>
          </div>
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <template v-for="item in products" :key="item.title">
            <div class="row mb-3">
              <div class="col-3">
                <div class="border rounded position-relative">
                  <img :src="item.img" alt="" />
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-gray-text opacity-68"
                  >
                    {{ item.num }}
                  </span>
                </div>
              </div>
              <div class="col-5 align-self-center">
                <div class="">
                  <h4 class="mb-1">{{ item.title }}</h4>
                  <p class="text-gray-text opacity-68 mb-0 h6">{{ item.capacity }}</p>
                </div>
              </div>
              <div class="col-4 align-self-center">
                <div class="text-end fw-bold text-nowrap">NT ${{ this.$toCurrency(item.price * item.num) }}</div>
              </div>
            </div>
          </template>
          <div class="d-flex justify-content-between">
            <h5>配送：</h5>
            <h5>$ 0</h5>
          </div>
          <div class="d-flex justify-content-between border-bottom mb-2">
            <h5>折扣：</h5>
            <h5>$ <span class="text-danger">NT -$100</span></h5>
          </div>
          <div class="d-flex justify-content-between">
            <h4>合計：</h4>
            <h4>NT $8,000</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          title: 'LULU牌 R-134a冷媒',
          num: 1,
          img: 'https://cdn.shopify.com/s/files/1/0667/9127/6834/files/13_f7f4dfcc-3d65-4241-857b-86f2155c2be1_128x128.jpg?v=1697876780',
          price: 1200,
          capacity: '12lb',
        },
        {
          title: 'LULU牌 R-134a冷媒',
          num: 1,
          img: 'https://cdn.shopify.com/s/files/1/0667/9127/6834/files/7_d88d3d2e-395e-46a8-8317-36a0a405d48e_128x128.jpg?v=1697965850',
          price: 2100,
          capacity: '18lb',
        },
        {
          title: 'LULU牌 R-470冷媒',
          num: 2,
          img: 'https://cdn.shopify.com/s/files/1/0667/9127/6834/files/11_30c82e3a-3d5d-4bde-aab8-d6c23d5a2f44_128x128.jpg?v=1697979014',
          price: 2400,
          capacity: '24lb',
        },
      ],
    };
  },
};
</script>
