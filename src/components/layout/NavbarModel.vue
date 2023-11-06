<template>
  <section class="container-fluid bg-body">
    <ul
      class="list-unstyled d-flex justify-content-between align-items-center pt-2"
    >
      <template v-for="item in ref" :key="item.name">
        <li>
          <router-link :to="`/${item.href}`" class="h2"
            ><i
              class="bi"
              :class="[
                this.$route.path.split('/')[1] !== item.href ? item.name : item.name+'-fill',
                { 'text-body-tertiary': this.$route.path.split('/')[1] !== item.href },
              ]"
            ></i
          ></router-link>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testqq: true,
      ref: [
        { name: 'bi-house', href: '' }, // 選寫一隻function 取得/前面字母
        { name: 'bi-heart', href: 'login' },
        { name: 'bi-shop bi-shop', href: 'shop' },
        { name: 'bi-cart', href: 'cart' },
        { name: 'bi-person-vcard', href: 'member' },
      ],
    };
  },
  mounted() {
    console.log(this.$route.path.split('/')[1]);
  },
};
</script>
