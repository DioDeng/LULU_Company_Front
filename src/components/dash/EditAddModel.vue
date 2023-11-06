<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="modal"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="editAdd"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark" data-bs-theme="dark">
          <h1 class="modal-title fs-5 text-light">新增產品</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row row-cols-1 row-cols-md-2 g-2 g-lg-3">
            <div class="col border-bottom border-3 pb-2 border-dark">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">產品名稱</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">類型</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <!-- 下方 -->
              <div class="row g-2 mb-2">
                <div class="col">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="8kg"
                      value="8kg"
                    />
                    <label for="floatingInputGrid">Size</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="price"
                      value="$999"
                    />
                    <label for="floatingInputGrid">Price</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="999"
                      value="19"
                    />
                    <label for="floatingInputGrid">庫存</label>
                  </div>
                </div>
              </div>
              <div class="row g-2 mb-2">
                <div class="col">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="xxxkg"
                      value="16kg"
                    />
                    <label for="floatingInputGrid">Size</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="price"
                      value="$1,500"
                    />
                    <label for="floatingInputGrid">Price</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="999"
                      value="22"
                    />
                    <label for="floatingInputGrid">庫存</label>
                  </div>
                </div>
              </div>
              <button class="btn btn-dark w-100">新增規格<i class="bi bi-plus"></i></button>
            </div>
            <div class="col">
              <div class="row mb-3">
                <div class="col">
                  <img src="https://dummyimage.com/150x150/000/fff" alt="" />
                </div>
                <div class="col">
                  <img src="https://dummyimage.com/150x150/b33/fff" alt="" />
                </div>
                <div class="col">
                  <img src="https://dummyimage.com/150x150/c8c8c8/fff" alt="" />
                </div>
              </div>
              <button class="btn btn-secondary w-100">
                <i class="bi bi-image"></i>
                上傳圖片
                <i class="bi bi-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">新增產品</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      modal: '',
    };
  },
  methods: {
    modalShow() {
      this.modal.show();
    },
    modalHide() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.editAdd);
    this.modalShow();
  },
};
</script>
