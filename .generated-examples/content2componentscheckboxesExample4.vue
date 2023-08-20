<script setup lang="ts">
import { ref } from 'vue'

const countries = ref([])
</script>

<template>
  <gv-checkboxes
    v-model="countries"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--l"
  >
    <template #legend>Will you be travelling to any of these countries?</template>
    <template #hint>Select all that apply.</template>
    <gv-checkbox value="france">France</gv-checkbox>
    <gv-checkbox value="portugal">Portugal</gv-checkbox>
    <gv-checkbox value="spain">Spain</gv-checkbox>
    <gv-checkbox value="none" :exclusive="true" divider="or">
      No, I will not be travelling to any of these countries
    </gv-checkbox>
  </gv-checkboxes>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{countries}}
  </gv-inset-text>
</template>