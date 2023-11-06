<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">#{{tempData.id}}</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body ">
          <div class="card mb-3 border-0 shadow-sm bg-gray-card">
            <div class="card-body">
              <h5 class="card-title">訂單狀態：<span class="text-danger">尚未完成付款</span></h5>
              <p class="card-text">
                請在金融機構的3個工作日內向以下匯款地址匯款。 ー 匯款地址
                三菱UFJ銀行榮町分行(店號:281) 普通賬戶 0321342 劉）安伊本 ー
                商品在確認顧客付款後會給您傳送。 逾期仍未確認付款時，將取消訂單。
                匯款時的手續費由顧客負擔，望您知悉。
              </p>
            </div>
          </div>
          <div class="card border-0 shadow-sm bg-gray-card">
            <div class="card-body">
              <div class="mb-4">
                <h6 class="card-text">聯絡方式:</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">oiuuio@dsfo.com</h6>
              </div>
              <div class="mb-4">
                <h6 class="card-text">配送地址:</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  日本 郵編100-0000<br />請去東京都<br />請給我11<br />請請請<br />352107111
                </h6>
              </div>
              <div class="mb-4">
                <h6 class="card-text">配送方法:</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">免費送貨</h6>
              </div>
              <div class="mb-4">
                <h6 class="card-text">結算方法:</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">銀行轉賬 - ¥144,100</h6>
              </div>
              <div>
                <h6 class="card-text">賬單地址:</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  日本 郵編100-0000 請去東京都 請給我11 請請請 352107111
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import emitter from '@/assets/javascripts/emitter';

export default {
  data() {
    return {
      modal: '',
      tempData: {},
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    emitter.on('payment', (data) => {
      console.log(data);
      this.tempData = data;
      this.showModal();
    });
  },
};
</script>
