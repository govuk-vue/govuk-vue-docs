<script setup lang="ts">
import { ref } from 'vue'
const eventName = ref('')
</script>

<template>
  <gv-input v-model="eventName" :label-is-page-heading="true" label-class="govuk-label--l">
    <template #label>
      What is the name of the event?
    </template>
    <template #hint>
      This will be printed on the poster
    </template>
  </gv-input>
  <gv-inset-text v-if="eventName" aria-live="polite">
    '{{ eventName }}' will be printed on the poster for your event.
  </gv-inset-text>
</template>