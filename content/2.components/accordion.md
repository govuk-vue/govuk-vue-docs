---
layout: component
---

# Accordion

The accordion component lets users show and hide sections of related content on a page.

See the [GOV.UK Design System documentation on accordions](https://design-system.service.gov.uk/components/accordion/) for more information on when to use this component.

```vue
<gv-accordion>
  <gv-accordion-section heading="Writing well for the web">
    <p class="govuk-body">This is the content for Writing well for the web.</p>
  </gv-accordion-section>
  <gv-accordion-section heading="Writing well for specialists">
    <p class="govuk-body">This is the content for Writing well for specialists</p>
  </gv-accordion-section>
  <gv-accordion-section heading="Know your audience">
    <p class="govuk-body">This is the content for Know your audience</p>
  </gv-accordion-section>
  <gv-accordion-section heading="How people read">
    <p class="govuk-body">This is the content for How people read</p>
  </gv-accordion-section>
</gv-accordion>
```

## Controlling which sections are open

By default, all sections will be closed. You can bind a boolean value with `v-model:expanded` to set and keep track of the 
open state of the accordion section.

You can also set `:remember-expanded="true"` on the accordion to let the browser remember which sections a user has open. 
The state of each section will be restored next time the accordion is mounted. Each section must have a static `id` for 
this to work, otherwise the wrong sections may be restored. The `id` must also be unique across the (sub)domain your 
service is hosted on.

:gv-warning-text{text="This behaviour is different to the GOV.UK Frontend Nunjucks macros, where rememberExpanded defaults to true. This is because in GOV.UK Vue, id is optional and the expanded state can't be stored reliably if an ID is not provided."}

If a section has `v-model:expanded` set to `true` or `false` and `remember-expanded` is `true`, the value of `v-model:expanded` takes precedence. For example,
if the stored state of a section is open but `v-model:expanded` is `false`, the section will be closed by default.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const sectionAIsOpen = ref(true)
const sectionBIsOpen = ref(false)
const sectionCIsOpen = ref(null)
</script>

<template>
  <gv-accordion>
    <gv-accordion-section heading="Section A - forced open" v-model:expanded="sectionAIsOpen">
      <p class="govuk-body">This section is forced to be open when first loaded.</p>
    </gv-accordion-section>
    <gv-accordion-section heading="Section B - forced closed" v-model:expanded="sectionBIsOpen">
      <p class="govuk-body">This section is forced to be closed when first loaded</p>
    </gv-accordion-section>
    <gv-accordion-section heading="Section C - default state" v-model:expanded="sectionCIsOpen">
      <p class="govuk-body">This section has no forced state, so defaults to closed</p>
    </gv-accordion-section>
  </gv-accordion>
  
  <gv-inset-text aria-live="polite">
    <h2 class="govuk-heading-s">Accordion section v-model states</h2>
    <ul class="govuk-list govuk-list--bullet">
      <li>Section A: {{ sectionAIsOpen }}</li>
      <li>Section B: {{ sectionBIsOpen }}</li>
      <li>Section C: {{ sectionCIsOpen }}</li>
    </ul>
  </gv-inset-text>
</template>
```

::gvd-options{component="Accordion" :showName=true}
::

::gvd-options{component="AccordionSection" :showName=true}
::