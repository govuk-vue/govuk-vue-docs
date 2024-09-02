---
layout: component
---

# Tag

Use the tag component to show users the status of something.

See the [GOV.UK Design System documentation on tags](https://design-system.service.gov.uk/components/tag/) for more information on when to use this component.

```vue
<gv-tag>Completed</gv-tag>
```

## Colours

You can set the tag colour using the following values for the `colour` prop.

```vue
<script setup lang="ts">
const options = [
  { colour: 'grey', text: 'Inactive' },
  { colour: 'green', text: 'New' },
  { colour: 'turquoise', text: 'Active' },
  { colour: 'blue', text: 'Pending' },
  { colour: 'light-blue', text: 'In progress' },
  { colour: 'purple', text: 'Received' },
  { colour: 'pink', text: 'Sent' },
  { colour: 'red', text: 'Rejected' },
  { colour: 'orange', text: 'Declined' },
  { colour: 'yellow', text: 'Delayed' },
]
</script>

<template>
  <gv-table>
    <gv-table-head>
      <gv-table-row>
        <gv-table-header>Colour prop value</gv-table-header>
        <gv-table-header>Tag</gv-table-header>
      </gv-table-row>
    </gv-table-head>
    <gv-table-body>
      <gv-table-row v-for="option in options">
        <gv-table-cell>{{ option.colour }}</gv-table-cell>
        <gv-table-cell>
          <gv-tag :colour="option.colour" :text="option.text" />
        </gv-table-cell>
      </gv-table-row>
    </gv-table-body>
  </gv-table>
</template>
```

::gvd-options{component="Tag"}