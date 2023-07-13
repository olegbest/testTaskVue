<template>
  <div class="card card-body d-flex align-items-center justify-content-center">
      {{ props.message }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    message: String
})

</script>

<style scoped>
.card {
    border-style: dashed;
    border-width: 3px;
}
</style>