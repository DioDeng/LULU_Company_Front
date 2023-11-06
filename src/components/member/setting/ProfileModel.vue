<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="tab-pane container-fluid fade show active"
    id="updateProfile-pane"
    role="tabpanel"
    aria-labelledby="home-tab"
    tabindex="0"
  >
    <!-- 姓名 -->
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >聯絡人姓名</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="xxxxx"
        v-model="member.userName"
      />
    </div>
    <!-- 電話 -->
    <div class="mb-3">
      <label for="formControlPhone" class="form-label">聯絡人電話</label>
      <input
        type="number"
        class="form-control"
        id="formControlPhone"
        placeholder="09xxxxxx"
        disabled
        v-model="member.phone"
      />
    </div>
    <!-- 生日 -->
    <div class="mb-3">
      <label for="formControlBirth" class="form-label">聯絡人生日</label>
      <VueDatePicker
        id="formControlBirth"
        format="yyyy-MM-dd"
        placeholder="birth"
        :flow="flow"
        :enable-time-picker="false"
        :max-date="new Date()"
        v-model="member.birth"
      >
      </VueDatePicker>
    </div>
    <!-- 地址 -->
    <div class="row row-cols-3 g-4 mb-3">
      <!-- city -->
      <div class="col">
        <label for="city" class="form-label">城市</label>
        <select
          class="form-select"
          id="city"
          aria-label="Default select example"
          v-model="address.city"
        >
          <template v-for="item in mapData" :key="item._id">
            <option :value="item.name">{{ item.name }}</option>
          </template>
        </select>
      </div>
      <!-- town -->
      <div class="col">
        <label for="town" class="form-label">鄉鎮</label>
        <select
          class="form-select col"
          id="town"
          aria-label="Default select example"
          v-model="address.town"
        >
          <template v-for="item in townData" :key="item.zip">
            <option :value="item.name">{{ item.name }}</option>
          </template>
        </select>
      </div>
      <!-- zip -->
      <div class="col">
        <label for="zip" class="form-label">郵遞區號</label>
        <input
          type="text"
          class="form-control"
          id="zip"
          placeholder="000"
          disabled
          v-model="address.zip"
        />
      </div>
    </div>
    <div class="mb-5">
      <label for="exampleFormControlStreet" class="form-label">街道</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlStreet"
        placeholder="xxxxx"
        v-model="address.street"
      />
    </div>
    <button class="btn btn-dark w-100" @click="updateProfile">更新</button>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import VueDatePicker from '@vuepic/vue-datepicker';
import emitter from '@/assets/javascripts/emitter';

export default {
  data() {
    return {
      member: {},
      address: {},
      mapData: [],
      townData: [],
      flow: ['year', 'month', 'calender'],
    };
  },
  components: { VueDatePicker },
  watch: {
    // eslint-disable-next-line object-shorthand
    'address.city'() {
      this.mapData.forEach((item) => {
        if (item.name === this.address.city) {
          this.townData = item.districts;
        }
      });
    },
  },
  methods: {
    getMap() {
      const api = `${process.env.VUE_APP_API}/map/mapData`;
      this.$http
        .get(api)
        .then((res) => {
          this.mapData = res.data.data;
          this.mapData.forEach((item) => {
            if (item.name === this.address.city) {
              this.townData = item.districts;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProfile() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/member/updateProfile`;
      this.$http
        .patch(api, this.member)
        .then((res) => {
          console.log(res);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    emitter.on('getMember', (data) => {
      this.member = JSON.parse(JSON.stringify(data));
      this.address = this.member.address;
    });
  },
  mounted() {
    this.getMap();
  },
};
</script>
