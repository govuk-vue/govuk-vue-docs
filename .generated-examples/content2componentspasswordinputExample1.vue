<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
</script>

<template>
  <gv-password-input label="Password" v-model="password" />
  <gv-inset-text v-if="password" aria-live="polite">
    Your password is {{password}}
  </gv-inset-text>
</template>