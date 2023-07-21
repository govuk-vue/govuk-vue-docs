<script setup lang="ts">
defineProps({
  heading: String
})
</script>

<template>
  <h3 v-if="heading" class="gvd-subnav__theme">{{heading}}</h3>
  <ul class="gvd-subnav__section">
    <slot/>
  </ul>
</template>