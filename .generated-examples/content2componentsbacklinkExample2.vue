<script setup lang="ts">
function handleClick() {
  alert('You clicked the back link')
}
</script>

<template>
  <gv-back-link @click.prevent="handleClick">Back</gv-back-link>
</template>