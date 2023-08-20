<script setup lang="ts">
import { ref } from 'vue'

const text = ref('A frontend developer designs, builds and improves website software that meets user needs. You will design software which meets user needs and creates meaningful interactions and relationships with users. You will have an understanding of the three fundamental frontend technologies (HTML, CSS and JavaScript). You will create code that is open by default and easy for others to reuse.')
</script>

<template>
  <gv-character-count
    v-model="text"
    label="Enter a job description"
    :label-is-page-heading="true"
    label-class="govuk-label--l"
    :max-chars="350"
    error-message="Job description must be 350 characters or less"
  />
</template>