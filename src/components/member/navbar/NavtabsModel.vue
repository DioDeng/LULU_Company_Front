<template>
  <div class="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
    <template v-for="item in optionList" :key="item.target">
        <button
      class="nav-link px-0 w-100"
      :class="{ active: item.title=== optionList[0].title}"
      data-bs-toggle="tab"
      :data-bs-target="item.target"
      type="button"
      role="tab"
      aria-controls="nav-home"
      aria-selected="true"
    >
      {{item.title}}
    </button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['optionList'],
};
</script>
