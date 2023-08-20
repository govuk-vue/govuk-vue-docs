<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-error-summary 
    title="Some sections are missing information" 
    :disable-auto-focus="true"
  >
    <gv-error-link :component="NuxtLink" to="/example-page">
      Enter your contact details
    </gv-error-link>
  </gv-error-summary>
</template>