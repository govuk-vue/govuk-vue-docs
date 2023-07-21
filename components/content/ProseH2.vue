<template>
  <h2 :id="id" class="govuk-heading-l">
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>