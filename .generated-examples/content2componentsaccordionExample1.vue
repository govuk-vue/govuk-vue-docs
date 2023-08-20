<script setup lang="ts">
import { ref } from 'vue'

const sectionAIsOpen = ref(true)
const sectionBIsOpen = ref(false)
const sectionCIsOpen = ref(null)
</script>

<template>
  <gv-accordion>
    <gv-accordion-section heading="Section A - forced open" v-model="sectionAIsOpen">
      <p class="govuk-body">This section is forced to be open when first loaded.</p>
    </gv-accordion-section>
    <gv-accordion-section heading="Section B - forced closed" v-model="sectionBIsOpen">
      <p class="govuk-body">This section is forced to be closed when first loaded</p>
    </gv-accordion-section>
    <gv-accordion-section heading="Section C - default state" v-model="sectionCIsOpen">
      <p class="govuk-body">This section has no forced state, so defaults to closed</p>
    </gv-accordion-section>
  </gv-accordion>
  
  <gv-inset-text aria-live="polite">
    <h2 class="govuk-heading-s">Accordion section v-model states</h2>
    <ul class="govuk-list govuk-list--bullet">
      <li>Section A: {{ sectionAIsOpen }}</li>
      <li>Section B: {{ sectionBIsOpen }}</li>
      <li>Section C: {{ sectionCIsOpen }}</li>
    </ul>
  </gv-inset-text>
</template>