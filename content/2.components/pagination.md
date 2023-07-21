---
layout: component
---

# Pagination

Help users navigate forwards and backwards through a series of pages - for example, search results.

See the [GOV.UK Design System documentation on pagination](https://design-system.service.gov.uk/components/pagination/) for
more information on when to use this component.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const pageNumber = ref(2)
</script>

<template>
  <gv-pagination v-model="pageNumber" :total-pages="3"/>
</template>
```
