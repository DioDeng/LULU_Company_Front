<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/role-has-required-aria-props -->
<!-- eslint-disable max-len -->
<template>
  <section class="container pt-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex">
        <select
          class="form-select"
          aria-label="Large select example"
        >
          <option selected>顯示全部</option>
          <option value="1">啟用</option>
          <option value="2">不啟用</option>
        </select>
        <select
          class="form-select"
          aria-label="Large select example"
        >
          <option selected>顯示全部</option>
          <option value="1">冷氣</option>
          <option value="2">電子零件</option>
        </select>
      </div>
      <button class="btn btn-secondary" @click="openModal">新增<i class="bi bi-plus"></i></button>
    </div>
    <!-- 列表 -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">產品</th>
          <th scope="col" class="d-flex justify-content-between">
            規格<span>庫存</span>
          </th>
          <th scope="col">狀態</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in productList" :key="item">
          <tr>
            <th>
              <h6>{{ item.title }}</h6>
              <h6 class="text-secondary">{{ item.category }}</h6>
            </th>
            <td>
              <template v-for="product in item.type" :key="product">
                <section
                  class="border-bottom border-light border-3 mb-2 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6>{{ product.size }}</h6>
                    <h6 class="text-secondary">
                      $ {{ this.$toCurrency(product.price) }}
                    </h6>
                  </div>
                  <h6>{{ product.stock }}</h6>
                </section>
              </template>
            </td>
            <td>
              <div class="form-check form-switch mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  :checked="item.isEnable"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault"
                  >啟用</label
                >
              </div>
              <button class="btn btn-outline-secondary w-100">編輯</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <EditAddModal ref="modal" />
  </section>
</template>

<style lang="scss" scoped>
.form-select-true {
  background-color: #7ed321;
}
.form-select-false {
  background-color: #757575;
}
.form-select-color {
  color: aliceblue;
}
</style>

<script>
import product from '@/assets/testData/productAdmin.json';
import EditAddModal from '@/components/dash/EditAddModel.vue';

export default {
  data() {
    return {
      productList: product,
    };
  },
  components: {
    EditAddModal,
  },
  methods: {
    openModal() {
      this.$refs.modal.modalShow();
    },
  },
};
</script>
