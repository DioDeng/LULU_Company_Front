<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <h3 class="mb-2 headText">配送資訊：</h3>
  <div class="accordion accordion-flush shadow-sm mb-5" id="accordionReceiptInfo">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseaccordion"
          aria-controls="flush-collapseaccordion"
        >
          <div class="d-flex justify-content-between w-100">
            <span class="text-gray-text overflow-x-hidden text-nowrap" style="max-width: 90%"
              >台北市中正區嚕嚕街113號2樓</span
            >
          </div>
        </button>
      </h2>
      <div
        id="flush-collapseaccordion"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="mb-4">
            <h4 class="card-text">聯絡人姓名：</h4>
            <h4 class="card-subtitle mb-2 fw-bold fst-italic">LULU</h4>
          </div>
          <div class="mb-4">
            <h4 class="card-text">聯絡人電話：</h4>
            <h4 class="card-subtitle mb-2 fw-bold fst-italic">0987654321</h4>
          </div>
          <div >
            <h4 class="card-text">配送地址：</h4>
            <h4 class="card-subtitle mb-2 fw-bold fst-italic">
              408770 <br />台中市 南屯區<br />向上路2段199號
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: 'LULU',
        phone: '0987654321',
      },
    };
  },
};
</script>
