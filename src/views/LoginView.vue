<template>
  <section class="pt-2 bg-body">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
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
          已有帳號
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
          註冊帳號
        </button>
      </li>
    </ul>
    <section class="tab-content container-fluid bg-gray-bg pt-5" id="myTabContent">
      <!-- 有帳號 -->
      <div
        class="tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        <Signin />
      </div>
      <!-- 新註冊 -->
      <div
        class="tab-pane fade"
        id="profile-tab-pane"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <Signup />
      </div>
    </section>
  </section>
</template>

<script>
import Signin from '@/components/login/SignInModel.vue';
import Signup from '@/components/login/SignUpModel.vue';

export default {
  components: {
    Signin,
    Signup,
  },
};
</script>
