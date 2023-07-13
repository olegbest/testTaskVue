<template>
  <div class="search">
      <input
          :value="props.modelValue"
          class="form-control"
          type="text"
          placeholder="Search..."
          @input="$emit('update:modelValue', $event.target.value)"
      >
      <span class="icon"><img src="@/images/SearchIcon.svg" alt=""></span>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

const props = defineProps({
    modelValue: String
});
</script>

<style scoped>
.search {
    position: relative;
    max-width: 288px;
}
.icon {
    position: absolute;
    top: 0;
    right: 14px;
    z-index: 2;
}

</style>
