<template>
  <section class="container-fluid pt-2">
    <Loading :isLoading="isLoading" />
    <!-- 個人資料 -->
    <div class="card mb-3 border-0 shadow-sm bg-gray-card">
      <div>
        <img src="https://anitar.dev/get/r" class="img-fluid rounded-start" alt="Anitar" />
      </div>
      <div>
        <div class="card-body">
          <h5 class="card-title">{{ member.userName }}</h5>
          <div class="card-text">
            <!-- email -->
            <div class="row mb-2">
              <div class="col-3">Email:</div>
              <div class="col-9">{{ member.email }}</div>
            </div>
            <!-- phone -->
            <div class="row mb-2">
              <div class="col-3">Phone:</div>
              <div class="col-9">{{ member.phone }}</div>
            </div>
            <!-- birth -->
            <div class="row mb-2">
              <div class="col-3">Birth:</div>
              <div class="col-9">{{ member.birth }}</div>
            </div>
            <!-- address -->
            <div class="row">
              <div class="col-3">Address:</div>
              <div class="col-9">
                {{ address.zip }} {{ address.city }} {{ address.town }} {{ address.street }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- menuList -->
    <div class="row row-cols-2 row-cols-md-2 g-4">
      <div clas="col">
        <button type="button" class="btn btn-outline-gray-text w-100">
          <i class="bi bi-bookmark-heart me-2"></i>收藏
        </button>
      </div>
      <div clas="col">
        <button type="button" class="btn btn-outline-gray-text w-100">
          <i class="bi bi-ticket me-2"></i>優惠卷
        </button>
      </div>
      <div clas="col">
        <button type="button" class="btn btn-outline-gray-text w-100" @click="openModel('order')">
          <i class="bi bi-file-earmark-text me-2"></i>訂單
        </button>
      </div>
      <div clas="col">
        <button type="button" class="btn btn-outline-gray-text w-100">
          <i class="bi bi-chat-left-text me-2"></i>訊息
        </button>
      </div>
      <div clas="col">
        <button type="button" class="btn btn-outline-gray-text w-100" @click="openModel('setting')">
          <i class="bi bi-gear me-2"></i>設定
        </button>
      </div>
      <div clas="col">
        <button type="button" class="btn btn-outline-gray-text w-100" @click="signOut">
          <i class="bi bi-box-arrow-right me-2"></i>登出
        </button>
      </div>
    </div>
  </section>
  <!-- menu 頁面 -->
  <Order ref="order" />
  <Setting ref="setting" />
</template>

<script>
import emitter from '@/assets/javascripts/emitter';
import Loading from '@/components/layout/LoadingModel.vue';
import Order from '@/components/member/OrderModel.vue';
import Setting from '@/components/member/SettingModel.vue';

export default {
  data() {
    return {
      isLoading: false,
      member: {},
      address: {},
    };
  },
  components: {
    Order,
    Setting,
    Loading,
  },
  methods: {
    getMember() {
      this.isLoading = true;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)LULU-Frozen\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
      const api = `${process.env.VUE_APP_API}/member/profile`;
      this.$http
        .get(api)
        .then((res) => {
          this.member = res.data.data;
          this.address = this.member.address;
          emitter.emit('getMember', this.member);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.$router.push('/login');
        });
    },
    openModel(ref) {
      this.$refs[ref].showOffcan();
    },
    signOut() {
      document.cookie = 'LULU-Frozen=""';
      // res.clearCookie("LULU-Frozen")
      this.getMember();
    },
  },
  mounted() {
    this.getMember();
  },
};
</script>
