<!-- eslint-disable max-len -->
<template>
  <section class="container-fluid">
    <ul class="list-unstyled d-flex justify-content-between">
      <template v-for="item in navbarList" :key="item.title">
        <li>
          <router-link
            class="d-flex flex-column align-items-center text-decoration-none text-gray-text fw-bolder"
            to="/"
            ><img class="mb-1" width="30" height="30" :src="item.icon" :alt="item.alt" />{{
              item.title
            }}</router-link
          >
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      navbarList: [
        {
          title: '冷媒',
          category: '冷媒',
          icon: 'https://img.icons8.com/external-others-iconmarket/64/external-barrel-sustainable-energy-others-iconmarket-4.png',
          alt: 'external-barrel-sustainable-energy-others-iconmarket-4',
        },
        {
          title: '銅管',
          category: '銅管',
          icon: 'https://img.icons8.com/wired/64/water-pipe.png',
          alt: 'water-pipe',
        },
        {
          title: '冰箱',
          category: '冰箱',
          icon: 'https://img.icons8.com/ios/50/fridge.png',
          alt: 'fridge',
        },
        {
          title: '洗衣機',
          category: '洗衣機',
          icon: 'https://img.icons8.com/ios/50/washing-machine.png',
          alt: 'washing-machine',
        },
      ],
    };
  },
};
</script>
