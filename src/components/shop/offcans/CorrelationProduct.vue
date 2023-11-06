<!-- eslint-disable max-len -->
<template>
  <div class="row row-cols-2 g-3">
    <template v-for="item in correlationData" :key="item.title">
      <div class="col">
        <div class="card shadow-sm bg-gray-card border-0">
          <a
            href="#"
            @click.prevent="sendProduct(item.title)"
            class="text-decoration-none text-dark"
          >
            <img :src="item.img" class="card-img-top" alt="..." />
            <div class="card-header h2 bg-gray-card headText">
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
                NT $ <span class="fst-italic">{{ item.price }}</span>
              </h5>
            </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import emitter from '@/assets/javascripts/emitter';

export default {
  data() {
    return {
      correlationData: [
        {
          title: 'R404A',
          img: 'https://chientorn.com/archive/image/product1/images/Frio+R-404A.png',
          price: 850,
        },
        {
          title: 'R507A',
          img: 'https://chientorn.com/archive/image/product1/images/Frio+R-507A.png',
          price: 1850,
        },
        {
          title: 'R410A',
          img: 'https://chientorn.com/archive/image/product1/images/Frio+R-410A.png',
          price: 1250,
        },
        {
          title: 'R407A',
          img: 'https://chientorn.com/archive/image/product1/images/S__194060591.jpg',
          price: 2300,
        },
      ],
    };
  },
  methods: {
    sendProduct(data) {
      emitter.emit('senddata', data);
    },
  },
};
</script>
