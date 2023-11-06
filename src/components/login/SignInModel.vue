<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <VForm ref="formRef" v-slot="{ meta }" @submit="signIn">
    <div class="form-floating mb-3">
      <VField
        name="email"
        type="email"
        rules="required|email"
        class="form-control bg-body-tertiary"
      />
      <label for="floatingInput">
        Email address<ErrorMessage name="email" class="text-danger ms-3" />
      </label>
    </div>
    <div class="form-floating mb-5">
      <VField
        name="password"
        type="password"
        rules="required"
        class="form-control bg-body-tertiary"
      />
      <label for="floatingInput">
        Password<ErrorMessage name="password" class="text-danger ms-3" />
      </label>
    </div>
    <div class="d-flex flex-column align-items-center mb-4">
      <button
        type="submit"
        class="btn btn-outline-dark w-50 mb-4"
        :disabled="!meta.valid"
      >
        登入
      </button>
      <a href="#" class="text-dark">忘記密碼</a>
    </div>
  </VForm>
  <!-- 其他登入方式 -->
  <div class="d-flex flex-column align-items-center">
    <button class="btn btn-secondary w-50 mb-3 d-flex">
      <i class="bi bi-google"></i
      ><span class="text-center w-100">使用 Google 登入</span>
    </button>
    <button class="btn btn-primary w-50 mb-3 d-flex">
      <i class="bi bi-facebook"></i
      ><span class="text-center w-100">使用 Facebook 登入</span>
    </button>
    <button class="btn btn-success w-50 d-flex">
      <i class="bi bi-line"></i
      ><span class="text-center w-100">使用 Line 登入</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    signIn(e) {
      const api = `${process.env.VUE_APP_API}/member/signIn`;
      this.$http
        .post(api, e)
        .then((res) => {
          const expries = new Date(Date.now() + 1000 * 60 * 30).toGMTString();
          document.cookie = `LULU-Frozen=${res.data.user.token}; expires=${expries}; path=/`;
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
