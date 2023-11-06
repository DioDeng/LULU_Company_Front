<template>
  <!-- 等待頁面 -->
  <div
    class="tab-pane container-fluid fade show active"
    id="waiting-pane"
    role="tabpanel"
    aria-labelledby="home-tab"
    tabindex="0"
  >
    <div class="row row-cols-1 g-4">
      <template v-for="(item, index) in paymentData" :key="index">
        <div class="col">
          <div class="card h-100 border shadow-sm">
            <div class="card-header bg-gray-card d-flex justify-content-between">
              <div>#{{ item.id }}等等</div>
              <div><span class="opacity-68">Total：</span>NT ${{ item.total }}</div>
            </div>
            <div class="card-body bg-gray-card">
              <template v-for="(item, index) in item.products" :key="index">
                <div class="card-text mb-4">
                  <div class="row g-3">
                    <div class="col-4">
                      <div class="d-flex align-items-center">
                        <img src="https://fakeimg.pl/10" class="w-100 rounded" alt="" />
                      </div>
                    </div>
                    <div class="col-7">
                      <h3 class="headText">{{ item.title }}</h3>
                      <div class="d-flex justify-content-between">
                        <h4 class="opacity-68">Price:</h4>
                        <h4>NT ${{ this.$toCurrency(item.price) }}</h4>
                      </div>
                      <div class="d-flex justify-content-between">
                        <h4 class="opacity-68">Size:</h4>
                        <h4>{{ item.category }}</h4>
                      </div>
                      <div class="d-flex justify-content-between">
                        <h4 class="opacity-68">Quantity:</h4>
                        <h4>
                          <span class="mx-2">{{ item.num }}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <div class="card-footer bg-gray-card d-flex justify-content-between align-items-center">
              <div><span class="opacity-68">付款方式：</span>{{ item.method }}</div>
              <button class="btn btn-outline-gray-text" @click="paymentModal(item)">
                查看詳情
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import data from '@/assets/testData/payment.json';
import emitter from '@/assets/javascripts/emitter';

export default {
  data() {
    return {
      paymentData: data,
    };
  },
  methods: {
    paymentModal(e) {
      emitter.emit('payment', e);
    },
  },
};
</script>
