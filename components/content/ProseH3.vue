<template>
  <h3 :id="id" class="govuk-heading-m">
    <slot />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>