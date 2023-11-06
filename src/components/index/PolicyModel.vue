<template>
  <section class="p-3">
    <div class="accordion">
      <div class="mb-4">
        <div
          class="componySet"
          @click="toggleStatus"
          @keydown="bar"
          id="panelsStayOpen-headingOne"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
        >
          <h5 class="">COMPANY</h5>
          <span></span>
          <span></span>
        </div>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body px-0">
            <div class="text-success p-4">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="componySet"
          @click="toggleStatus"
          @keydown="bar"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
        >
          <h5 class="">PRIVACY POLICY</h5>
          <span></span>
          <span></span>
        </div>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body px-0">
            <div class="privacySet text-success p-4">
              <h5 class="mb-4">隱私政策</h5>
              <!-- 1 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">一、使用目的</h6>
                <p class="">
                  本公司處理的個人信息將僅用於為客戶提供更好的產品和服務、提供有用的信息以及其他合法目的，包括以下目的。
                </p>
                <p>
                  (1)
                  我們會將您的姓名、地址、電話號碼和電子郵件地址用於以下目的。
                </p>
                <ul>
                  <li>用於運送購買的產品、獎品、活動產品和免費樣品。</li>
                  <li>
                    通過電子郵件、DM
                    或其他方式提供各種信息，對客戶對產品和我們服務的詢問進行適當的回應和指導。
                  </li>
                  <li>
                    以我們的產品開發、業務發展、我們的產品和服務的質量改進以及我們的服務改進為目的的研究和分析營銷。
                  </li>
                  <li>應聘者的個人信息 用於有關就業的各種溝通。</li>
                  <li>員工的個人信息用於人事/勞務管理等。</li>
                </ul>
                <p>
                  (2) 分析獲取的瀏覽歷史、購買歷史等信息，並將其用於以下目的。
                </p>
                <ul>
                  <li>根據愛好和品味展示與產品和服務相關的廣告。</li>
                  <li>
                    根據電子郵件，愛好和品味了解我們公司和我們集團的服務信息。
                  </li>
                </ul>
              </div>
              <!-- 2 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">二、個人信息的收集</h6>
                <p>我們在以下時間收集您的個人信息。</p>
                <ul>
                  <li>
                    購買產品或服務、進行諮詢或諮詢或使用本集團提供的其他服務時。
                  </li>
                  <li>回答訊息、問卷調查、採訪等時。</li>
                  <li>申請或參加集團贊助的各種項目、活動或活動時。</li>
                </ul>
                <p>■ 本公司獲取的個人信息項目</p>
                <ul>
                  <li>姓名，出生日期，電話號碼，電子郵件地址，地址。</li>
                  <li>
                    您的計算機連接互聯網時使用的信息，通過移動終端訪問合同終端信息。
                  </li>
                </ul>
              </div>
              <!-- 3 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">三、Cookie</h6>
                <p class="mb-0">
                  Cookie 是一種將用戶的網站瀏覽歷史保存在用戶計算機上的機制。
                  但是，它是每個瀏覽器的標識，不包括識別用戶個人信息的信息
                  （如姓名、出生日期、電話號碼、電子郵件地址、地址等信息）。
                </p>
                <p>
                  用戶可以通過禁用cookies來拒絕收集，因此請檢查您的瀏覽器設置。
                </p>
              </div>
              <!-- 4 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">四、訪問分析</h6>
                <p class="mb-2">
                  我們可能會使用“谷歌分析”工具來分析客戶對我們網站的使用狀態。
                </p>
                <p class="mb-0">■ 工具提供商</p>
                <p>Google</p>
                <p class="mb-0">■ 獲取信息</p>
                <p>本網站的使用狀態（訪問狀態、流量、路徑等）</p>
                <p class="mb-0">■ 使用目的</p>
                <p>提高便利性和網站</p>
                <p class="mb-0">■ 谷歌還將獲取和使用我們網站的使用狀態。</p>
                <p>詳情請查看以下網址。</p>
                <ul>
                  <li>
                    <a
                      href="https://marketingplatform.google.com/about/analytics/terms/tw/"
                      class="text-danger"
                      >Google分析服務條款</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://policies.google.com/technologies?hl=zh-TW"
                      class="text-danger"
                      >Google使用從使用Google服務的網站和應用程序收集的信息</a
                    >
                  </li>
                </ul>
                <p>以下網站也提供有關 Google Analytics 的信息：</p>
                <ul>
                  <li>
                    <a
                      href="https://policies.google.com/privacy?hl=zh-TW"
                      class="text-danger"
                      >Google隱私政策</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://support.google.com/analytics/answer/6004245"
                      class="text-danger"
                      >關於Google分析的詳細信息</a
                    >
                  </li>
                </ul>
                <p class="mb-0">
                  該服務使用 cookie
                  來收集流量服務。交通數據是匿名收集的，不能識別個人身份。如果您想拒絕
                  Google Analytics 使用 cookie，您可以選擇退出 Google Analytics
                  提供的網站。
                </p>
              </div>
              <!-- 5 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">五、個人信息的管理和共享使用</h6>
                <p>
                  通過適當方式從客戶那裡收集的個人信息將由LULU集團集中管理和共享。
                  我們將重視對個人信息的洩露、丟失、破壞、篡改和未經授權訪問等行為的預防措施，並將繼續採取適當的安全措施來改善運營。
                </p>
                <p class="mb-0">■ 共享項目：</p>
                <p>
                  姓名、地址、電話號碼、電子郵件地址、出生年月日、性別、通過cookie收集的網站瀏覽歷史、LULU集團運營的網站上的購買歷史、查詢內容等。
                </p>
                <p class="mb-0">■ 共同用戶範圍</p>
                <p>LULU集團及其他組成本集團的國內公司</p>
                <p class="mb-0">■ 使用目的</p>
                <p>如 1 所述。</p>
                <p class="mb-0">■ 共享使用管理經理</p>
                <p>個人信息管理經理：呼嚕鏟屎官</p>
              </div>
              <!-- 6 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">六、個人信息的適當管理</h6>
                <p>
                  我們將及時更新您的個人信息，並採取預防和糾正措施，防止您的個人信息遭到未經授權的訪問、丟失、破壞、篡改和洩露。
                </p>
              </div>
              <!-- 7 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">七、向第三方提供的限制</h6>
                <p>
                  除非有特殊情況，我們不會在未經您同意的情況下向外包公司和業務合作夥伴以外的第三方披露或提供您的個人信息。
                </p>
              </div>
              <!-- 8 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">八、遵守委託合同</h6>
                <p>
                  在委託合同中，委託人委託的個人信息將在合同範圍內得到妥善管理和使用。
                </p>
              </div>
              <!-- 9 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">九、承包商管理</h6>
                <p>
                  當我們將個人信息的處理外包時，我們將與外包商簽訂合同，以防止其洩露或重新提供，我們將對其進行適當的管理。
                </p>
              </div>
              <!-- 10 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">十、個人信息等的確認和更正</h6>
                <p>
                  如果客戶希望確認、更正或暫停使用個人信息，我們將在客戶服務中心的合理範圍內迅速作出回應。
                </p>
              </div>
              <!-- 11 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">十一、管理制度</h6>
                <p>
                  為了加強全公司的個人信息保護工作，我們將任命個人信息負責人，並不斷對員工進行教育和啟蒙。
                </p>
              </div>
              <!-- 12 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">十二、法律合規</h6>
                <p>
                  在處理個人信息時，我們將遵守有關個人信息保護的相關法律法規和內部規則，並將不斷審查和完善本政策的內容。
                </p>
              </div>
              <!-- 13 -->
              <div class="mb-5">
                <h6 class="fw-bolder mb-0">十三、修訂</h6>
                <p class="mb-0">
                  我們自行決定更改此政策。但是，如果個人信息保護法等法律法規規定了修改所需的程序，則應根據相關法律法規進行修改。
                </p>
                <p>
                  此外，當我們更改本政策時，我們將通過以下方式通知客戶本政策更改後的實施時間和內容。
                </p>
                <ul>
                  <li>在我們的網站上發布。</li>
                  <li>通知客戶。</li>
                  <li>其他適當的方法。</li>
                </ul>
              </div>
              <!-- 14 -->
              <div class="">
                <h6 class="fw-bolder mb-0">十四、聯繫我們</h6>
                <p class="mb-0">有關客戶個人信息的查詢，LULU集團相關事業客戶</p>
                <p class="mb-0">服務中心 0968-911-231</p>
                <p class="mb-0">
                  接待時間：9:00 ~
                  17:00（不包括週末和節假日以及我們指定的節假日）
                </p>
                <p>代表董事呼嚕獸</p>
                <p class="mb-0">修訂日期</p>
                <p>修訂日期：2022 年 7 月 1 日</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.componySet {
  cursor: pointer;
  position: relative;
}
.componySet span:nth-child(2) {
  position: absolute;
  width: 16px;
  height: 2px;
  top: 50%;
  right: 0;
  background: #1a1a1a;
  transform: translateY(-50%);
}
.componySet span:nth-child(3) {
  position: absolute;
  width: 16px;
  height: 2px;
  transition: 0.5s;
  top: 50%;
  right: 0;
  background: #1a1a1a;
  transform: translateY(-50%) rotate(90deg);
}
.toggleActive span:nth-child(3) {
  transform: translateY(-50%) rotate(0deg);
}
.privacySet {
  background: #f4ecd9;
  overflow-y: scroll;
  height: 66vw;
}
</style>

<script>
export default {
  methods: {
    toggleStatus(e) {
      e.target.parentElement.classList.toggle('toggleActive');
    },
  },
};
</script>
