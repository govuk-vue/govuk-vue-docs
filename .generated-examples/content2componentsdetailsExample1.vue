<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
</script>

<template>
  <gv-details summary="Help with nationality" v-model="isOpen">
    <p class="govuk-body">
      We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot 
      provide your nationality, you’ll have to send copies of identity documents through the post.
    </p>
  </gv-details>
  <gv-inset-text aria-live="polite">
    <p class="govuk-body">Value of v-model: {{isOpen}}</p>
  </gv-inset-text>
</template>