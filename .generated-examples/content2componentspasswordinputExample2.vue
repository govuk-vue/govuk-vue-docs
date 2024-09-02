<script setup lang="ts">
import { ref } from 'vue'
const passwordVisible = ref(null)
</script>

<template>
  <gv-password-input label="Password" v-model:password-visible="passwordVisible" />
  <gv-inset-text aria-live="polite">
    Your password is {{ passwordVisible ? '' : 'not ' }}visible
  </gv-inset-text>
</template>