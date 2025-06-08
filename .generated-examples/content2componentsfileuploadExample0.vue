<script setup lang="ts">
  import { ref } from 'vue'
  const files = ref(null)
</script>
<template>
  <gv-file-upload label="Upload a file" v-model="files"/>
</template>