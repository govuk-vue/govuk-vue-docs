<script setup lang="ts">
import { ref } from 'vue'

const pageNumber = ref(2)
</script>

<template>
  <gv-pagination v-model="pageNumber" :total-pages="3"/>
</template>