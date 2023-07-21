<script setup lang="ts">
import { ref } from 'vue'

const wasteTypes = ref([])
</script>

<template>
  <gv-checkboxes
    v-model="wasteTypes"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--l"
  >
    <template #legend>Which types of waste do you transport?</template>
    <template #hint>Select all that apply.</template>
    <gv-checkbox label="Waste from animal carcasses" value="animal"/>
    <gv-checkbox label="Waste from mines or quarries" value="mines"/>
    <gv-checkbox label="Farm or agricultural waste" value="farm"/>
  </gv-checkboxes>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{wasteTypes}} 
  </gv-inset-text>
</template>