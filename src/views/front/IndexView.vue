<template>
  <!-- 最新消息 -->
  <News />
  <!-- 社群＆聯絡方式 -->
  <Contact />
  <!-- 關於我們 -->
  <About />
  <!-- 政策 -->
  <Policy />
</template>

<script>
import News from '@/components/index/NewsModel.vue';
import Contact from '@/components/index/ContactModel.vue';
import About from '@/components/index/AboutModel.vue';
import Policy from '@/components/index/PolicyModel.vue';

export default {
  components: {
    News,
    Contact,
    About,
    Policy,
  },
};
</script>
