<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
  
const length = computed(() => {
  return `${password.value.length} character${password.value.length > 1 ? 's' : ''}` 
})  
</script>

<template>
  <gv-password-input label="Password" v-model="password">
    <template #hint>
      Must be at least 10 characters
    </template>
  </gv-password-input>
  <gv-inset-text v-if="password" aria-live="polite">
    Your password is {{ length }} long
  </gv-inset-text>
</template>