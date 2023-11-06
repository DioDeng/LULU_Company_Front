<template>
  <!-- 最新事件 -->
  <section class="container-fluid mb-3 pt-2">
    <router-link to="/" class="text-decoration-none">
      <div class="card shadow-sm bg-gray-card border-0">
        <img
          src="https://unevenhub.store/cdn/shop/articles/LINE_ALBUM___230622_23.jpg?v=1693478132&width=1280"
          class="card-img-top"
          alt="..."
        />
        <div class="card-header bg-gray-card">
          <div class="d-flex justify-content-between">
            <h6 class="text-decoration-underline">Event</h6>
            <h6>2023.9.16-10.9</h6>
          </div>
        </div>
        <div class="card-body bg-gray-card">
          <div class="card-text">
            <h4>
              COBIRD Solo Exhibition in<br />
              Nagoya <br />
              EVENT SPACE SOUTH
            </h4>
          </div>
        </div>
      </div></router-link
    >
  </section>
  <!-- 其他事件 -->
  <section class="container-fluid">
    <template v-for="item in news" :key="item">
      <router-link to="/" class="text-decoration-none">
        <div class="card mb-3 border-0 shadow-sm bg-gray-card">
          <div class="row g-0">
            <div class="col-4">
              <img :src="item.image" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-8">
              <div class="card-body py-1 d-flex flex-column justify-content-between h-100">
                <div>
                  <h5 class="card-title mb-2">Card title</h5>
                  <p class="card-text h6 mb-1">This is a wider card with...</p>
                </div>
                <p class="card-text mb-0 h6">
                  <small class="text-body-secondary">觀看完整內容</small>
                </p>
              </div>
            </div>
          </div>
        </div></router-link
      >
    </template>
  </section>
</template>

<style lang="scss" scoped>
.header__backtop {
  height: 34px;
  left: calc(50% - 28px);
  width: 56px;
  letter-spacing: 0;
  line-height: 0px;
  position: absolute;
  text-indent: 0;
  color: transparent;
  display: block;
  font-size: 0;
}
.header__backtop:before {
  background-color: #1a1a1a;
  content: '';
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.header__backtop:after {
  border-color: #1a1a1a;
  border-style: solid;
  border-width: 1px 1px 0 0;
  content: '';
  display: block;
  height: 50px;
  left: calc(50% - 25px);
  pointer-events: none;
  position: absolute;
  top: 18px;
  transform: translate(0) rotate(-45deg);
  width: 50px;
}
.footer__backtop {
  height: 34px;
  left: calc(50% - 28px);
  width: 56px;
  letter-spacing: 0;
  line-height: 0px;
  position: absolute;
  text-indent: 0;
  color: transparent;
  display: block;
  font-size: 0;
}
.footer__backtop:before {
  background-color: #1a1a1a;
  content: '';
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.footer__backtop:after {
  border-color: #1a1a1a;
  border-style: solid;
  border-width: 0 0 1px 1px;
  content: '';
  display: block;
  height: 50px;
  left: calc(50% - 25px);
  pointer-events: none;
  position: absolute;
  top: -36px;
  transform: translate(0) rotate(-45deg);
  width: 50px;
}
</style>

<script>
import data from '@/assets/testData/news.json';

export default {
  data() {
    return {
      news: data,
    };
  },
  methods: {
    test() {
      console.log('oko');
    },
  },
};
</script>
