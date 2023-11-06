<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <!-- v-slot="{ meta }" -->
    <VForm ref="formRef">
      <div class="form-floating mb-3">
        <VField
          name="姓名"
          type="text"
          rules="required"
          class="form-control bg-body-tertiary"
        />
        <label for="floatingInput">
          姓名<ErrorMessage name="姓名" class="text-danger ms-3" />
        </label>
      </div>
      <div class="form-floating mb-3">
        <VField name="電話" type="text" rules="required" class="form-control bg-body-tertiary" />
        <label for="floatingInput">
          電話<ErrorMessage name="電話" class="text-danger ms-3" />
        </label>
      </div>
      <!-- 地址 -->
      <div class="row row-cols-3 g-4 mb-3">
        <!-- city -->
        <div class="col">
          <label for="city" class="form-label h5">城市</label>
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
          <label for="town" class="form-label h5">鄉鎮</label>
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
          <label for="zip" class="form-label h5">郵遞區號</label>
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
      <div class="form-floating mb-3">
        <VField
          name="地址"
          type="text"
          rules="required"
          class="form-control bg-body-tertiary"
        />
        <label for="floatingInput text-info">
          地址<ErrorMessage name="地址" class="text-danger ms-3" />
        </label>
      </div>
    </VForm>
</template>

<script>
import emitter from '@/assets/javascripts/emitter';

export default {
  data() {
    return {
      member: {},
      address: {},
      mapData: [],
      townData: [],
    };
  },
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
