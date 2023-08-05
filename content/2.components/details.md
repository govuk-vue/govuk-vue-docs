---
layout: component
---

# Details

Make a page easier to scan by letting users reveal more detailed information only if they need it.

See the [GOV.UK Design System documentation on the details component](https://design-system.service.gov.uk/components/details/) for more information on when to use this component.

```vue-html
<gv-details summary="Help with nationality">
  <p class="govuk-body">
    We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot 
    provide your nationality, you’ll have to send copies of identity documents through the post.
  </p>
</gv-details>
```

## Providing the details content

You can either use the `text` prop or the default slot to provide content to show when this component is expanded.
If you use the prop, the content will automatically be wrapped in a `<p class="govuk-body">`, which will apply the
correct paragraph styling. If you use the slot, you'll need to wrap your paragraphs manually.

## Using `v-model` with details

You can bind a boolean value with `v-model` to set and keep track of the open state of the details element.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
</script>

<template>
  <gv-details summary="Help with nationality" v-model="isOpen">
    <p class="govuk-body">
      We need to know your nationality so we can work out which elections you’re entitled to vote in. If you cannot 
      provide your nationality, you’ll have to send copies of identity documents through the post.
    </p>
  </gv-details>
  <gv-inset-text aria-live="polite">
    <p class="govuk-body">Value of v-model: {{isOpen}}</p>
  </gv-inset-text>
</template>
```

::gvd-options{component="Details"}
::
