<script setup lang="ts">
function handleClick() {
  alert('You clicked the button')
}
</script>

<template>
  <gv-button @click="handleClick">Save and continue</gv-button>
</template>