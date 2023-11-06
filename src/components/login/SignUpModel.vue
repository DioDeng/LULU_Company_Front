<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <VForm ref="formRef" v-slot="{ meta }" @submit="signUp">
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
    <div class="form-floating mb-3">
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
    <div class="form-floating mb-3">
      <VField
        name="confirmPassword"
        type="password"
        rules="required"
        class="form-control bg-body-tertiary"
      />
      <label for="floatingInput">
        Confirm Password<ErrorMessage
          name="confirmPassword"
          class="text-danger ms-3"
        />
      </label>
    </div>
    <!-- 電話 -->
    <div class="form-floating mb-5">
      <VField
        name="phone"
        type="number"
        rules="required"
        class="form-control bg-body-tertiary"
      />
      <label for="floatingInput">
        Phone<ErrorMessage name="phone" class="text-danger ms-3" />
      </label>
    </div>
    <div class="d-flex flex-column align-items-center mb-4">
      <button
        type="submit"
        class="btn btn-outline-dark w-50 mb-4"
        :disabled="!meta.valid"
      >
        註冊
      </button>
    </div>
  </VForm>
</template>

<script>
export default {
  data() {
    return {
      user: '',
    };
  },
  methods: {
    signUp(e) {
      const api = `${process.env.VUE_APP_API}/member/signUp`;
      this.$http.post(api, e).then((res) => {
        console.log(res.data);
        const expries = new Date(Date.now() + 1000 * 60 * 30).toGMTString();
        document.cookie = `LULU-Frozen=${res.data.user.token}; expires=${expries}; path=/`;
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
