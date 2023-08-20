<script setup lang="ts">
import { ref } from 'vue'

const showDynamicTab = ref(false)
</script>

<template>
  <gv-tabs title="Example tabs">
    <gv-tab label="Static tab 1" key="static-tab-1">
      <gv-inset-text>This is static tab 1</gv-inset-text>
    </gv-tab>
    <gv-tab v-if="showDynamicTab" label="Dynamic tab" key="dynamic-tab">
      <gv-inset-text>This is a dynamic tab</gv-inset-text>
    </gv-tab>
    <gv-tab label="Static tab 2" key="static-tab-2">
      <gv-inset-text>This is static tab 2</gv-inset-text>
    </gv-tab>
  </gv-tabs>
  
  <gv-radios v-model="showDynamicTab" legend="Show dynamic tab?" direction="inline" size="small">
    <gv-radio :value="true">Yes</gv-radio>
    <gv-radio :value="false">No</gv-radio>
  </gv-radios>
</template>