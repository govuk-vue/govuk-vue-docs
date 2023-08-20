<script setup lang="ts">
function handleClick(destination: String) {
  alert(`You clicked the breadcrumb to ${destination}`)
}
</script>

<template>
  <gv-breadcrumbs>
    <gv-breadcrumb-item @click.prevent="handleClick('Dashboard')">Dashboard</gv-breadcrumb-item>
    <gv-breadcrumb-item @click.prevent="handleClick('Reports')">Reports</gv-breadcrumb-item>
    <gv-breadcrumb-item>Processing times</gv-breadcrumb-item>
  </gv-breadcrumbs>
</template>