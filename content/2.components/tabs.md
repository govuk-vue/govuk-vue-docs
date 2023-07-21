---
layout: component
---

# Tabs

The tabs component lets users navigate between related sections of content, displaying one section at a time.

See the [GOV.UK Design System documentation on tabs](https://design-system.service.gov.uk/components/tabs/) for
more information on when to use this component.

```vue
<gv-tabs title="Cases opened">
  <gv-tab label="Past day">
    <h2 class="govuk-heading-l">Past day</h2>
    <gv-inset-text>No cases opened in the past day</gv-inset-text>
  </gv-tab>
  <gv-tab label="Past week">
    <h2 class="govuk-heading-l">Past week</h2>
    <gv-inset-text>No cases opened in the past week</gv-inset-text>
  </gv-tab>
</gv-tabs>
```

## Adding and removing tabs

If you dynamically change which tabs are shown, you must set a `key` on each tab to ensure the content of each tab is
shown in the correct order on smaller screens (where the tabs disappear and the content of every tab is shown at once).

If the currently selected tab is removed, the first tab in the list will become selected.

```vue
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
```

::gvd-options{component="Tabs" :showName=true}
::

<!-- Workaround - vue-docgen currently can't get the default slot from GvTabs because it's not an HTML template -->
<prose-h3>Slots</prose-h3>

<gv-table>
  <gv-table-head>
    <gv-table-row>
      <gv-table-header>Name</gv-table-header>
      <gv-table-header>Description</gv-table-header>
    </gv-table-row>
  </gv-table-head>
  <gv-table-body>
    <gv-table-row>
      <gv-table-cell>default</gv-table-cell>
      <gv-table-cell>
        A list of <prose-code-inline>gv-tab</prose-code-inline>s
      </gv-table-cell>
    </gv-table-row>
  </gv-table-body>
</gv-table>

::gvd-options{component="Tab" :showName=true :showSlots=false}
::

<prose-h3>Slots</prose-h3>

<gv-table>
  <gv-table-head>
    <gv-table-row>
      <gv-table-header>Name</gv-table-header>
      <gv-table-header>Description</gv-table-header>
    </gv-table-row>
  </gv-table-head>
  <gv-table-body>
    <gv-table-row>
      <gv-table-cell>label</gv-table-cell>
      <gv-table-cell>
        The text label of the tab. If content is provided in this slot, the <prose-code-inline>label</prose-code-inline> prop will be ignored.
      </gv-table-cell>
    </gv-table-row>
    <gv-table-row>
      <gv-table-cell>default</gv-table-cell>
      <gv-table-cell>
        The content of the tab panel.
      </gv-table-cell>
    </gv-table-row>
  </gv-table-body>
</gv-table>