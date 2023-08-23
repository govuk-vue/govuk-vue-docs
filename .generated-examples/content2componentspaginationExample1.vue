<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
</script>

<template>
  <gv-inset-text aria-live="polite">
    You are on page {{ currentPage }}
  </gv-inset-text>
  <gv-pagination v-model:currentPage="currentPage" :total-pages="3"/>
</template>