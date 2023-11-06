<template>
  <div class="tab-pane fade" id="bank-tab" role="tabpanel" aria-labelledby="bank" tabindex="0">
    <div class="card pt-4 bg-gray-card border-0">
      <!-- 寫一隻api 產生出相對金額 qr code -->
      <img
        src="@/assets/images/qr_bank.svg"
        class="card-img-top rounded mx-auto"
        style="width: 150px; height: 150px"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">使用QRcode或是手動匯款</h5>
            <p class="cart-text">三菱UFJ銀行 榮町分店(店編號:281) 普通賬戶 0321342 劉）安伊文 ー</p>
            <p class="cart-text">匯款地址等資訊，可以透過訂單確認郵件的“顯示訂單”按鈕進行確認。
          請在金融機構的3個工作日內匯款。 如果過了期限還不能確認付款的話，會取消訂單。
          確認顧客的匯款後會傳送商品。 匯款時的手續費由顧客負擔，望您知悉。</p>
      </div>
    </div>
  </div>
</template>
