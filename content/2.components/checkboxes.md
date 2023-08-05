---
layout: component
---

# Checkboxes

Let users select one or more options by using the checkboxes component.

See the [GOV.UK Design System documentation on checkboxes](https://design-system.service.gov.uk/components/checkboxes/) for more information on when to use this component.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const wasteTypes = ref([])
</script>

<template>
  <gv-checkboxes
    v-model="wasteTypes"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--l"
  >
    <template #legend>Which types of waste do you transport?</template>
    <template #hint>Select all that apply.</template>
    <gv-checkbox label="Waste from animal carcasses" value="animal"/>
    <gv-checkbox label="Waste from mines or quarries" value="mines"/>
    <gv-checkbox label="Farm or agricultural waste" value="farm"/>
  </gv-checkboxes>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{wasteTypes}} 
  </gv-inset-text>
</template>
```

## Using `v-model` with checkboxes
The checkboxes component supports the same `v-model` binding behaviour as `<input type="checkbox">`.

You can bind individual checkboxes to separate refs, or the whole checkbox group to an array—or both.

If the checkbox group is bound to an array, you must provide a `value` for each checkbox. The array will contain the 
values of every checked box.

If an individual checkbox is bound to a ref, by default the ref will be set to `true` if the box is checked and `false` 
if it's not. You can override this with the `true-value` and `false-value` props. `true-value` and `false-value` won't
work if the individual checkbox is bound to a ref and the checkbox group is bound to an array.


```vue
<script setup lang="ts">
import { ref } from 'vue'

const countries = ref([])
const englandVisited = ref(false)
</script>

<template>
  <gv-checkboxes
    v-model="countries"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--l"
  >
    <template #legend>Which countries have you visited?</template>
    <template #hint>Select all that apply.</template>
    <gv-checkbox value="england" v-model="englandVisited">England</gv-checkbox>
    <gv-checkbox value="scotland">Scotland</gv-checkbox>
    <gv-checkbox value="wales">Wales</gv-checkbox>
    <gv-checkbox value="northernireland">Northern Ireland</gv-checkbox>
  </gv-checkboxes>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{countries}}<br/>
    Has visited England: {{englandVisited}}
  </gv-inset-text>
</template>
```

## Standalone checkboxes

If you have a single, standalone checkbox which doesn't need a fieldset legend, you can use `gv-checkbox` on its own
without a `gv-checkboxes` wrapper.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const termsAccepted = ref('No')
</script>

<template>
  <gv-checkbox v-model="termsAccepted" true-value="Yes" false-value="No">I accept the terms and conditions</gv-checkbox>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{termsAccepted}}
  </gv-inset-text>
</template>
```

## Showing hints

You can add hints to both the checkbox group and individual checkboxes using the `hint` prop or slot.

```vue-html
<gv-checkboxes
  :legend-is-page-heading="true"
  legend-class="govuk-fieldset__legend--l"
>
  <template #legend>What is your nationality?</template>
  <template #hint>
    If you have dual nationality, select all options that are relevant to you.
  </template>
  <gv-checkbox value="british" hint="including English, Scottish, Welsh and Northern Irish">British</gv-checkbox>
  <gv-checkbox value="irish">Irish</gv-checkbox>
  <gv-checkbox value="other">Citizen of another country</gv-checkbox>
</gv-checkboxes>
```

## Adding an option for 'none'

If you need to give the user a 'none of the above' option, set the `exclusive` prop to `true` on the last checkbox in 
the group. You should also set `divider` (usually to 'or') to set the text show above this option.

If the user checks an exclusive checkbox, any other checkboxes will be unchecked. If the user then checks another box, 
the exclusive checkbox will be unchecked.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const countries = ref([])
</script>

<template>
  <gv-checkboxes
    v-model="countries"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--l"
  >
    <template #legend>Will you be travelling to any of these countries?</template>
    <template #hint>Select all that apply.</template>
    <gv-checkbox value="france">France</gv-checkbox>
    <gv-checkbox value="portugal">Portugal</gv-checkbox>
    <gv-checkbox value="spain">Spain</gv-checkbox>
    <gv-checkbox value="none" :exclusive="true" divider="or">
      No, I will not be travelling to any of these countries
    </gv-checkbox>
  </gv-checkboxes>
  
  <gv-inset-text aria-live="polite">
    Value of v-model: {{countries}}
  </gv-inset-text>
</template>
```

## Conditionally revealing a related question

You can show conditional content that's only shown when a checkbox is checked using the `conditional` slot.

```vue-html
<gv-checkboxes
  :legend-is-page-heading="true"
  legend-class="govuk-fieldset__legend--l"
>
  <template #legend>
    How would you like to be contacted?
  </template>
  <template #hint>
    Select all options that are relevant to you.
  </template>
  <gv-checkbox value="email"> 
    Email
    <template #conditional>
      <gv-input label="Email address" class="govuk-!-width-one-half" type="email" :spellcheck="false" autocomplete="email"/>
    </template>
  </gv-checkbox>
  <gv-checkbox value="phone">
    Phone
    <template #conditional>
      <gv-input label="Phone number" class="govuk-!-width-one-half" type="tel" autocomplete="tel"/>
    </template>
  </gv-checkbox>
  <gv-checkbox value="text">
    Text message
    <template #conditional>
      <gv-input label="Mobile phone number" class="govuk-!-width-one-half" type="tel" autocomplete="tel"/>
    </template>
  </gv-checkbox>
</gv-checkboxes>
```

## Smaller checkboxes

Set the `size` prop to `small` to use smaller checkboxes.

```vue-html
<gv-checkboxes
  :legend-is-page-heading="true"
  legend-class="govuk-fieldset__legend--m"
  legend="Organisation"
  size="small"
>
  <gv-checkbox>HM Revenue and Customs (HMRC)</gv-checkbox>
  <gv-checkbox>Employment Tribunal</gv-checkbox>
  <gv-checkbox>Ministry of Defence</gv-checkbox>
  <gv-checkbox>Department for Transport</gv-checkbox>
</gv-checkboxes>
```

## Error messages

Set the `error-message` prop to display an error.

```vue-html
<gv-checkboxes
  :legend-is-page-heading="true"
  legend-class="govuk-fieldset__legend--l"
  error-message="Select if you are British, Irish or a citizen of a different country"
>
  <template #legend>What is your nationality?</template>
  <template #hint>
    If you have dual nationality, select all options that are relevant to you.
  </template>
  <gv-checkbox value="british" hint="including English, Scottish, Welsh and Northern Irish">British</gv-checkbox>
  <gv-checkbox value="irish">Irish</gv-checkbox>
  <gv-checkbox value="other">Citizen of another country</gv-checkbox>
</gv-checkboxes>
```

::gvd-options{component="Checkboxes" :showName=true}
::

::gvd-options{component="Checkbox" :showName=true}
::