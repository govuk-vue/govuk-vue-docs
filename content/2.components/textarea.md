---
layout: component
---

# Textarea

Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.

See the [GOV.UK Design System documentation on textareas](https://design-system.service.gov.uk/components/textarea/) for
more information on when to use this component.

```vue
<gv-textarea label="Can you provide more detail?" :label-is-page-heading="true" label-class="govuk-label--l">
  <template #hint>
    Do not include personal or financial information, like your National Insurance number or credit card details. 
  </template>
</gv-textarea>
```

## Binding with v-model and using events

Use `v-model` to bind data to the textarea, as you would with a native `<textarea>`.

You can also attach other event listeners and they'll be bound to the underlying `<textarea>`.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const bindingExampleData = ref('')

function handleKeyDown() {
  alert('You pressed the down key')
}
</script>

<template>
  <gv-textarea 
    label="Type or press the down arrow key in this textarea" 
    v-model="bindingExampleData" 
    @keydown.down="handleKeyDown"/>
  <gv-inset-text v-if="bindingExampleData" aria-live="polite">
    You typed {{bindingExampleData}}.
  </gv-inset-text>
</template>
```

## Changing the textarea size

You can change the height of the textarea using the `rows` prop. This prop accepts a number, not a string, so should
be set with `v-bind` or `:`.

```vue
<gv-textarea 
  label="Can you provide more detail?" 
  :label-is-page-heading="true" 
  label-class="govuk-label--l"
  :rows="8"
>
  <template #hint>
    Do not include personal or financial information, like your National Insurance number or credit card details. 
  </template>
</gv-textarea>
```

## Error messages

Set the `error-message` prop to display an error.

```vue
<gv-textarea 
  label="Can you provide more detail?" 
  :label-is-page-heading="true" 
  label-class="govuk-label--l"
  error-message="Enter more detail"
>
  <template #hint>
    Do not include personal or financial information, like your National Insurance number or credit card details. 
  </template>
</gv-textarea>
```

::gvd-options{component="Textarea"}
::