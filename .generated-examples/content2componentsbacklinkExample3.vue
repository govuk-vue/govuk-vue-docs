<script setup lang="ts">
import { ref } from 'vue'

let previousPageName = ref('dashboard')

function goBack() {
  previousPageName.value = (previousPageName.value === 'dashboard') ? 'case' : 'dashboard'
}
</script>

<template>
  <gv-back-link @click.prevent="goBack" :text="`Go back to ${previousPageName}`" />
</template>