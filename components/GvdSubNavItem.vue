<script setup lang="ts">
const props = defineProps({
  to: String
})

const current = useRoute().path === props.to;
</script>

<template>
  <li class="gvd-subnav__section-item" :class="{'gvd-subnav__section-item--current': current}">
    <NuxtLink :to="to" class="gvd-subnav__link govuk-link govuk-link--no-visited-state govuk-link--no-underline">
      <slot/>
    </NuxtLink>
  </li>
</template>