---
layout: component
---

# Text input

Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

See the [GOV.UK Design System documentation on text inputs](https://design-system.service.gov.uk/components/text-input/) for more information on when to use this component.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const eventName = ref('')
</script>

<template>
  <gv-input label="What is the name of the event?" v-model="eventName" :label-is-page-heading="true"/>
  <gv-inset-text v-if="eventName" aria-live="polite">
    '{{ eventName }}' will be printed on the poster for your event.
  </gv-inset-text>
</template>
```

## Binding with v-model and using events

Use `v-model` to bind data to the input, as you would with a native `<input>`.

You can also attach event listeners and they'll be bound to the underlying `<input>`.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const bindingExampleData = ref('')

function handleKeyDown() {
  alert('You pressed the down key')
}
</script>

<template>
  <gv-input label="Type or press the down arrow key in this input" v-model="bindingExampleData" @keydown.down="handleKeyDown"/>
  <gv-inset-text v-if="bindingExampleData" aria-live="polite">
    You typed {{bindingExampleData}}.
  </gv-inset-text>
</template>
```

## Setting the label as the page heading

If you’re asking just one question per page, you can set the contents of the `<label>` as the page heading. Set the
`label-is-page-heading` prop to `true` and pass a class in `label-class` to change the size, for example `govuk-label--l`.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const eventName = ref('')
</script>

<template>
  <gv-input v-model="eventName" :label-is-page-heading="true" label-class="govuk-label--l">
    <template #label>
      What is the name of the event?
    </template>
    <template #hint>
      This will be printed on the poster
    </template>
  </gv-input>
  <gv-inset-text v-if="eventName" aria-live="polite">
    '{{ eventName }}' will be printed on the poster for your event.
  </gv-inset-text>
</template>
```

## Changing the input size

You can pass any of the GOV.UK input size modifier classes via `class`.

```vue
<gv-input label="5 character width" class="govuk-input--width-5" />
<gv-input label="One-half width" class="govuk-!-width-one-half" />
```

## Numeric input

If you’re asking the user to enter a whole number, set the `inputmode` prop to `numeric` to use the numeric keypad on devices with on-screen keyboards.

```vue
<gv-input :label-is-page-heading="true" label-class="govuk-label--l" inputmode="numeric" :spellcheck="false" class="govuk-input--width-10">
  <template #label>
    What is your account number?
  </template>
  <template #hint>
    Must be between 6 and 8 digits long
  </template>
</gv-input>
```

If you've bound data with `v-model`, remember that the user may type a string rather than a number. You'll need to check whether the model value
is actually a number if that's important in your code, for example if you're doing calculations or you're passing the model value as a prop value to
a prop that's expecting a number.

The GOV.UK Design System recommends [avoding type="number"](https://design-system.service.gov.uk/components/text-input#avoid-using-inputs-with-a-type-of-number), so GOV.UK Vue doesn't support it.

It also recommends [avoiding inputmode="decimal"](https://design-system.service.gov.uk/components/text-input#asking-for-decimal-numbers). Use a normal `<gv-input>` without an `inputmode` for decimals.

## Prefixes and suffixes

You can add prefixes and suffixes with the `prefixText` and `suffixText` props, or the `prefix` and `suffix` slots:

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const itemPrice = ref(null)
const vatRate = 0.2

const priceWithVat = computed(() => {
  const parsedItemPrice = parseFloat(itemPrice.value);
  
  if(!isNaN(parsedItemPrice)) {
    const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
    return formatter.format(parsedItemPrice * (1 + vatRate))
  }
})
</script>
<template>
  <gv-input v-model="itemPrice" prefix="£" suffix="per item" :spellcheck="false" class="govuk-input--width-4">
    <template #label>
      What is the cost per item excluding VAT, in pounds?
    </template>
  </gv-input>
  <gv-inset-text v-if="priceWithVat" aria-live="polite">
    The total cost per item, including VAT, is {{ priceWithVat }}
  </gv-inset-text>
</template>
```

::gvd-options{component="Input"}