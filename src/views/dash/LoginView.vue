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
</template>

<script>
export default {
  methods: {
    signIn(e) {
      const api = `${process.env.VUE_APP_API}/admin/signIn`;
      this.$http
        .post(api, e)
        .then((res) => {
          const expries = new Date(Date.now() + 1000 * 60 * 60 * 30).toGMTString();
          document.cookie = `LULU-Frozen-Admin=${res.data.user.token}; expires=${expries}; path=/`;
          this.$router.push('/dashboard/products');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
