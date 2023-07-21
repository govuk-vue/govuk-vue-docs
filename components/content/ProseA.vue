<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>

<template>
  <NuxtLink class="govuk-link" :href="href" :target="target">
    <slot />
  </NuxtLink>
</template>