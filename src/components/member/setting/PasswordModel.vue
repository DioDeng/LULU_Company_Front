<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="tab-pane container-fluid fade"
    id="updatePassword-pane"
    role="tabpanel"
    aria-labelledby="home-tab"
    tabindex="0"
  >
    <VForm ref="formRef" @submit="updatePassword">
      <div class="mb-3">
        <label for="Password" class="form-label">
          新密碼<ErrorMessage name="password" class="text-danger ms-3" />
        </label>
        <VField
          name="password"
          type="password"
          rules="required"
          class="form-control bg-body-tertiary"
        />
      </div>
      <div class="mb-5">
        <label for="confPassword" class="form-label">
          確認密碼<ErrorMessage name="confirmPassword" class="text-danger ms-3" />
        </label>
        <VField
          name="confirmPassword"
          type="password"
          rules="required"
          class="form-control bg-body-tertiary"
        />
      </div>
      <button class="btn btn-dark w-100">更新密碼</button>
    </VForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordData: {},
    };
  },
  methods: {
    updatePassword(data) {
      console.log(data);
      const api = `${process.env.VUE_APP_API}/member/updatePassword`;
      this.$http.patch(api, data)
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
