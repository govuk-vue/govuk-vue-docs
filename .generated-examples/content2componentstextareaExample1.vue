<script setup lang="ts">
import { ref } from 'vue'
const bindingExampleData = ref('')

function handleKeyDown() {
  alert('You pressed the down key')
}
</script>

<template>
  <gv-textarea 
    label="Type or press the down arrow key in this textarea" 
    v-model="bindingExampleData" 
    @keydown.down="handleKeyDown"/>
  <gv-inset-text v-if="bindingExampleData" aria-live="polite">
    You typed {{bindingExampleData}}.
  </gv-inset-text>
</template>