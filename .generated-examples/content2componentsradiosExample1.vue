<script setup lang="ts">
import { ref } from 'vue'

const countries = [
  { name: 'England', phone: '020 7946 0234'},
  { name: 'Scotland', phone: '0141 496 0192'},
  { name: 'Wales', phone: '029 2018 0482'},
  { name: 'Northern Ireland', phone: '028 9649 6912'},
]

const selectedCountry = ref(null)
</script>

<template>
  <gv-radios 
    v-model="selectedCountry"
    legend="Where do you live?" 
    :legend-is-page-heading="true" 
    legend-class="govuk-fieldset__legend--l"
  >
    <gv-radio 
      v-for="country in countries" 
      :key="country.name" 
      :value="country"
    >
      {{ country.name }}
    </gv-radio>
  </gv-radios>
  
  <gv-inset-text v-if="selectedCountry" aria-live="polite">
    The helpline number for {{ selectedCountry.name }} is {{ selectedCountry.phone }}
  </gv-inset-text>
</template>