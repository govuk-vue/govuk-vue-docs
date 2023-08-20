---
layout: component
---

# Select

The select component allows users to choose an option from a list.

See the [GOV.UK Design System documentation on selects](https://design-system.service.gov.uk/components/select/)
for more information on when to use this component.

```vue
<gv-select label="Sort by">
  <gv-select-option value="published">
    Recently published
  </gv-select-option>
  <gv-select-option value="updated">
    Recently updated
  </gv-select-option>
  <gv-select-option value="views">
    Most views
  </gv-select-option>
  <gv-select-option value="comments">
    Most comments
  </gv-select-option>  
</gv-select>
```

## Binding with `v-model` and using events

The select component supports the same `v-model` binding behaviour as `<select>`.

Each option needs a `value`. The value of `v-model` will be set to the `value` of the selected option.

`value`s can be simple types, like strings or numbers, or more complex objects.

You can also attach event listeners and they'll be bound to the underlying `<select>`.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const sortOptions = [
  { label: 'Price, high to low', property: 'price', direction: 'descending' },
  { label: 'Price, low to high', property: 'price', direction: 'ascending' },
]

const selectedSort = ref(null)

function handleChange() {
  alert('You changed the sort value')
}
</script>

<template>
  <gv-select 
    v-model="selectedSort"
    label="Sort by"
    @change="handleChange"
  >
    <gv-select-option 
      v-for="sortOption in sortOptions" 
      :key="sortOptions.label" 
      :value="sortOption"
    >
      {{ sortOption.label }}
    </gv-select-option>
  </gv-select>
  
  <gv-inset-text v-if="selectedSort" aria-live="polite">
    Sorting by {{ selectedSort.label.toLowerCase() }}
  </gv-inset-text>
</template>
```

## Select with hint

You can add a hint using the `hint` prop or slot.

```vue
<gv-select
  label="Choose location"
  hint="This can be different to where you went before"
 >
  <gv-select-option value="eastmidlands">East Midlands</gv-select-option>
  <gv-select-option value="eastofengland">East of England</gv-select-option>
  <gv-select-option value="london">London</gv-select-option>
  <gv-select-option value="northeast">North East</gv-select-option>
  <gv-select-option value="northwest">North West</gv-select-option>
  <gv-select-option value="southeast">South East</gv-select-option>
  <gv-select-option value="southwest">South West</gv-select-option>
  <gv-select-option value="westmidlands">West Midlands</gv-select-option>
  <gv-select-option value="yorkshire">Yorkshire and the Humber</gv-select-option>
</gv-select>
```

## Error messages

Use the `error-message` prop or slot to show an error message if the user has not selected an option for a mandatory select.

```vue
<gv-select
  label="Choose location"
  hint="This can be different to where you went before"
  error-message="Select a location"
 >
  <gv-select-option value="eastmidlands">East Midlands</gv-select-option>
  <gv-select-option value="eastofengland">East of England</gv-select-option>
  <gv-select-option value="london">London</gv-select-option>
  <gv-select-option value="northeast">North East</gv-select-option>
  <gv-select-option value="northwest">North West</gv-select-option>
  <gv-select-option value="southeast">South East</gv-select-option>
  <gv-select-option value="southwest">South West</gv-select-option>
  <gv-select-option value="westmidlands">West Midlands</gv-select-option>
  <gv-select-option value="yorkshire">Yorkshire and the Humber</gv-select-option>
</gv-select>
```

::gvd-options{component="Select" :showName=true}
::

::gvd-options{component="SelectOption" :showName=true}
::