<script setup lang="ts">
import { ref } from 'vue'

const termsAccepted = ref('No')
</script>

<template>
  <gv-checkbox v-model="termsAccepted" true-value="Yes" false-value="No">I accept the terms and conditions</gv-checkbox>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{termsAccepted}}
  </gv-inset-text>
</template>