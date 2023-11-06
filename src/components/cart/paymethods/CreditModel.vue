<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="tab-pane fade show active"
    id="creditCard-tab"
    role="tabpanel"
    aria-labelledby="creditCard"
    tabindex="0"
  >
    <VForm ref="formRef">
      <div class="form-floating mb-3">
        <VField name="卡號" type="number" rules="required" class="form-control bg-body-tertiary" />
        <label for="floatingInput">
          卡號 <i class="fab fa-cc-visa ms-1"></i>
          <i class="fab fa-cc-mastercard ms-1"></i>
          <i class="fab fa-cc-jcb ms-1"></i><ErrorMessage name="卡號" class="text-danger ms-3" />
        </label>
      </div>
      <div class="form-floating mb-3">
        <VField
          name="有效期限"
          type="date"
          rules="required"
          class="form-control bg-body-tertiary"
        />
        <label for="floatingInput">
          有效期限<ErrorMessage name="有效期限" class="text-danger ms-3" />
        </label>
      </div>
      <div class="form-floating mb-3">
        <VField
          name="ccv或安全碼"
          type="number"
          rules="required"
          class="form-control bg-body-tertiary"
        />
        <label for="floatingInput text-info">
          ccv或安全碼<ErrorMessage name="ccv或安全碼" class="text-danger ms-3" />
        </label>
      </div>
      <div class="form-floating mb-3">
        <VField
          name="姓名"
          type="text"
          rules="required"
          class="form-control bg-body-tertiary"
        />
        <label for="floatingInput text-info">
          卡片持有人<ErrorMessage name="姓名" class="text-danger ms-3" />
        </label>
      </div>
    </VForm>
  </div>
</template>
