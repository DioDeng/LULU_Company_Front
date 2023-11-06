<!-- eslint-disable max-len -->
<template>
  <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
    <li class="nav-item w-50" role="presentation">
      <button
        class="nav-link active w-100"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
      >
        推薦
      </button>
    </li>
    <li class="nav-item w-50" role="presentation">
      <button
        class="nav-link w-100"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="false"
      >
        最新
      </button>
    </li>
  </ul>
  <section class="tab-content container-fluid bg-gray-bg pb-3" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabindex="0"
    >
      <div class="row row-cols-2 g-3">
        <template v-for="item in products" :key="item">
          <div class="col">
            <div class="card shadow-sm border-0">
              <a
                href="#"
                @click.prevent="showOffcan(item)"
                class="text-decoration-none text-gray-text"
              >
                <img :src="item.image" class="card-img-top" alt="..." />
                <div
                  class="card-header h2 bg-gray-card headText"
                >
                  {{ item.title }}
                </div>
              <div class="card-body bg-gray-card py-2">
                <h6 class="card-text bodyText">
                  50 ml / 1.7 fl oz <br />
                  eau de parfum
                </h6>
              </div>
              </a>
              <div
                class="card-footer bg-gray-card py-2 d-flex align-items-center justify-content-between bodyText"
              >
                <i class="bi bi-heart btn p-0"></i>
                <h5 class="card-text">
                  NT $ <span class="fst-italic">{{ this.$toCurrency(item.price) }}</span>
                </h5>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabindex="0"
    >
      <div class="row row-cols-2 g-3">
        <template v-for="item in products" :key="item">
          <div class="col">
            <div class="card h-100">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">
                  {{ item.discount }}
                </p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">{{ item.price }}</small>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- product offcanvas Model -->
  <ProductOffcanvas ref="productModel" />
</template>

<script>
import data from '@/assets/testDataJson/products.json';
import ProductOffcanvas from './offcans/ProductOffcanvas.vue';

export default {
  data() {
    return {
      products: data.products, // arr
    };
  },
  components: {
    ProductOffcanvas,
  },
  methods: {
    showOffcan(item) {
      this.$refs.productModel.showOffcan(item);
    },
  },
};
</script>
