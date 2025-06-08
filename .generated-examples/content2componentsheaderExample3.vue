<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-header :rebrand="true" service-name="Service name">
    <template #navigation>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page" :active="true">
        Navigation item 1
      </gv-header-navigation-item>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page">
        Navigation item 2
      </gv-header-navigation-item>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page">
        Navigation item 3
      </gv-header-navigation-item>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page">
        Navigation item 4
      </gv-header-navigation-item>
    </template>
  </gv-header>
</template>