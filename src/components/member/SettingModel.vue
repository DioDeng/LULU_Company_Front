<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <Loading :isLoading="isLoading" />
  <div
    class="offcanvas offcanvas-end w-100"
    tabindex="-1"
    aria-labelledby="offcanvasRightLabel"
    ref="settingModle"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn text-body-tertiary"
        aria-label="Close"
        @click="hideOffcan"
      >
        <i class="bi bi-arrow-left h2"></i>
      </button>
      <h4 class="offcanvas-title">我的聯絡資料</h4>
      <button type="button" class="btn text-body-tertiary" aria-label="??">
        <i class="bi bi-question-circle-fill h2"></i>
      </button>
    </div>
    <!-- navbar -->
    <Navtabs :optionList="optionList" />
    <div class="offcanvas-body bg-gray-bg">
      <div class="tab-content" id="nav-tabContent">
        <!-- 個人資訊 -->
        <Profile />
        <!-- 修改密碼 -->
        <Password />
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/layout/LoadingModel.vue';
import Navtabs from '@/components/member/navbar/NavtabsModel.vue';
import Profile from '@/components/member/setting/ProfileModel.vue';
import Password from '@/components/member/setting/PasswordModel.vue';
import { Offcanvas } from 'bootstrap';

export default {
  data() {
    return {
      isLoading: false,
      optionList: [
        { title: '更改聯絡人資訊', target: '#updateProfile-pane' },
        { title: '更改密碼', target: '#updatePassword-pane' },
      ],
      bsOffcanvas: '',
    };
  },
  components: {
    Loading, Navtabs, Profile, Password,
  },
  // watch: {
  //   member() {
  //     this.userData = JSON.parse(JSON.stringify(this.member));
  //   },
  //   // eslint-disable-next-line object-shorthand
  //   'userData.address.city'() {
  //     this.mapData.forEach((item) => {
  //       if (item.name === this.userData.address.city) {
  //         this.townData = item.districts;
  //       }
  //     });
  //   },
  //   // eslint-disable-next-line object-shorthand
  //   'userData.address.town'() {
  //     this.townData.forEach((item) => {
  //       if (item.name === this.userData.address.town) {
  //         this.userData.address.zip = item.zip;
  //       }
  //     });
  //   },
  // },
  methods: {
    showOffcan() {
      this.bsOffcanvas.show();
    },
    hideOffcan() {
      this.bsOffcanvas.hide();
    },
  },
  mounted() {
    this.bsOffcanvas = new Offcanvas(this.$refs.settingModle);
  },
};
</script>
