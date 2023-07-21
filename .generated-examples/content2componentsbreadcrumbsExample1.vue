<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-breadcrumbs>
    <gv-breadcrumb-item :component="NuxtLink" to="/example-page">Dashboard</gv-breadcrumb-item>
    <gv-breadcrumb-item :component="NuxtLink" to="/example-page">Reports</gv-breadcrumb-item>
    <gv-breadcrumb-item>Processing times</gv-breadcrumb-item>
  </gv-breadcrumbs>
</template>