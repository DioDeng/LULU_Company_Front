<template>
  <section class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col" class="d-none">訂單ID</th>
          <th scope="col">顧客</th>
          <th scope="col">產品列表</th>
          <th scope="col">總金額</th>
          <th scope="col" class="d-none">結帳日期</th>
          <th scope="col" class="d-none">完成日期</th>
          <th scope="col">地址</th>
          <th scope="col" class="d-none d-sm-block">狀態</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in orderList" :key="item">
          <tr :class="{'text-decoration-line-through': item.status === 'done'}">
            <th class="d-none">{{ item.orderId }}</th>
            <td>
                <div class="mb-3">
                    {{ item.username }}<br />{{ item.phone }}
                </div>
              <select
                class="form-select form-select-lg form-select-color d-sm-none"
                :class="`form-select-${item.status}`"
                style="width: 6em"
                aria-label="Large select example"
                :value="item.status"
              >
                <option value="paid">付款</option>
                <option value="shopping">交易中</option>
                <option value="done">完成</option>
                <option value="unpaid">未付款</option>
              </select>
            </td>
            <!-- 訂單列表 -->
            <td class="pe-sm-5">
              <template v-for="product in item.products" :key="product">
                <div class="border-bottom border-light border-2 mb-2">
                  <h6>{{ product.title }}</h6>
                  <div class="d-flex justify-content-between">
                    <h6 class="text-secondary">${{$toCurrency(product.price)}}</h6>
                    <h6>X{{ product.unit }}</h6>
                  </div>
                </div>
              </template>
            </td>
            <td>${{ $toCurrency(item.total) }}</td>
            <td class="d-none">
              {{ item.addDate.date }}<br />{{ item.addDate.time }}
            </td>
            <!-- 完成交貨日期 -->
            <td class="d-none">
              {{ item.checkoutDate.date }}<br />{{ item.checkoutDate.time }}
            </td>
            <td>{{ item.address }}</td>
            <!-- 狀態 -->
            <td>
              <select
                class="form-select form-select-lg mb-3 form-select-color d-none d-sm-block"
                :class="`form-select-${item.status}`"
                style="width: 6em"
                aria-label="Large select example"
                :value="item.status"
              >
                <option value="paid">付款</option>
                <option value="shopping">交易中</option>
                <option value="done">完成</option>
                <option value="unpaid">未付款</option>
              </select>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss" scoped>
.form-select-paid {
  background-color: #7ed321;
}
.form-select-shopping {
  background-color: #f5a623;
}
.form-select-done {
  background-color: #4a90e2;
}
.form-select-unpaid {
  background-color: #757575;
}
.form-select-color {
  color: aliceblue;
}
</style>

<script>
import order from '@/assets/testData/orderAdmin.json';

export default {
  data() {
    return {
      orderList: order,
    };
  },
};
</script>
