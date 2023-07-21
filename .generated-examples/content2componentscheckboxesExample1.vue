<script setup lang="ts">
import { ref } from 'vue'

const countries = ref([])
const englandVisited = ref(false)
</script>

<template>
  <gv-checkboxes
    v-model="countries"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--l"
  >
    <template #legend>Which countries have you visited?</template>
    <template #hint>Select all that apply.</template>
    <gv-checkbox value="england" v-model="englandVisited">England</gv-checkbox>
    <gv-checkbox value="scotland">Scotland</gv-checkbox>
    <gv-checkbox value="wales">Wales</gv-checkbox>
    <gv-checkbox value="northernireland">Northern Ireland</gv-checkbox>
  </gv-checkboxes>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{countries}}<br/>
    Has visited England: {{englandVisited}}
  </gv-inset-text>
</template>