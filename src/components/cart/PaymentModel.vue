<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section class="mb-5">
    <h3 class="mb-2 headText">付款方式：</h3>
    <!-- 付款方式選擇 -->
    <div class="nav nav-tabs pb-2" ref="paymentTab" role="tablist">
      <div class="row row-cols-4 g-1">
        <template v-for="item in paymentMethod" :key="item.title">
          <div class="col">
            <input
              type="radio"
              class="btn-check"
              :class="{ active: item.title === paymentMethod[0].title }"
              name="options-payment"
              :id="item.id"
              autocomplete="off"
              data-bs-toggle="tab"
              :data-bs-target="item.target"
              :checked="item.title === paymentMethod[0].title"
            />
            <label class="btn text-nowrap" :for="item.id">{{ item.title }}</label>
          </div>
        </template>
      </div>
    </div>
    <div class="tab-content pt-2">
      <!-- 信用卡 -->
      <Credit />
      <Cash />
      <LinePay />
      <Bank />
    </div>
  </section>
  <section>
    <h3 class="mb-2 headText">帳單地址：</h3>
    <div class="nav nav-tabs pb-2" ref="billAddressTab" role="tablist">
      <div class="row row-cols-2 g-1">
        <div class="col">
          <input
            type="radio"
            class="btn-check active"
            name="options-bill-address"
            id="same-address-tab"
            autocomplete="off"
            data-bs-toggle="tab"
            data-bs-target="#same-address"
            checked
          />
          <label class="btn text-nowrap" for="same-address-tab">和配送地址相同</label>
        </div>
        <div class="col">
          <input
            type="radio"
            class="btn-check"
            name="options-bill-address"
            id="different-address-tab"
            data-bs-toggle="tab"
            data-bs-target="#different-address"
            autocomplete="off"
          />
          <label class="btn text-nowrap" for="different-address-tab">使用不同的帳單地址</label>
        </div>
      </div>
    </div>
    <div class="tab-content pt-2">
        <div
          class="tab-pane fade show active"
          id="same-address"
          role="tabpanel"
          aria-labelledby="same-address-tab"
          tabindex="0"
        >
        </div>
        <div
          class="tab-pane fade"
          id="different-address"
          role="tabpanel"
          aria-labelledby="different-address-tab"
          tabindex="0"
        >
          <BillAddress />
        </div>
      </div>
  </section>
</template>

<script>
import { Tab } from 'bootstrap';
import Credit from './paymethods/CreditModel.vue';
import Cash from './paymethods/CashModel.vue';
import LinePay from './paymethods/LinepayModel.vue';
import Bank from './paymethods/BankModel.vue';
import BillAddress from './paymethods/BillAddressModel.vue';

export default {
  data() {
    return {
      paymentTab: '',
      billAddressTab: '',
      paymentMethod: [
        {
          title: '信用卡',
          id: 'creditCard',
          target: '#creditCard-tab',
        },
        {
          title: '貨到付款',
          id: 'cash',
          target: '#cash-tab',
        },
        {
          title: 'Line Pay',
          id: 'linePay',
          target: '#linePay-tab',
        },
        {
          title: '銀行轉帳',
          id: 'bank',
          target: '#bank-tab',
        },
      ],
    };
  },
  components: {
    Credit,
    Cash,
    LinePay,
    Bank,
    BillAddress,
  },
  mounted() {
    this.paymentTab = new Tab(this.$refs.paymentTab);
    this.billAddressTab = new Tab(this.$refs.billAddressTab);
  },
};
</script>
