<script setup lang="ts">
import { ref } from 'vue'
const eventName = ref('')
</script>

<template>
  <gv-input label="What is the name of the event?" v-model="eventName" />
  <gv-inset-text v-if="eventName" aria-live="polite">
    '{{ eventName }}' will be printed on the poster for your event.
  </gv-inset-text>
</template>