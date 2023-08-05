---
layout: component
---

# Radios

Use the radios component when users can only select one option from a list.

See the [GOV.UK Design System documentation on radios](https://design-system.service.gov.uk/components/radios/) for 
more information on when to use this component.

```vue-html
<gv-radios legend="Where do you live?" :legend-is-page-heading="true" legend-class="govuk-fieldset__legend--l">
  <gv-radio value="england">England</gv-radio>
  <gv-radio value="scotland">Scotland</gv-radio>
  <gv-radio value="wales">Wales</gv-radio>
  <gv-radio value="northern-ireland">Northern Ireland</gv-radio>
</gv-radios>
```

## Using `v-model` and `value` with radios

The radios component supports the same `v-model` binding behaviour as `<input type="radio">`.

Each radio item needs a `value`. The value of `v-model` will be set to the `value` of the selected radio item.

`value`s can be simple types, like strings or numbers, or more complex objects.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const countries = [
  { name: 'England', phone: '020 7946 0234'},
  { name: 'Scotland', phone: '0141 496 0192'},
  { name: 'Wales', phone: '029 2018 0482'},
  { name: 'Northern Ireland', phone: '028 9649 6912'},
]

const selectedCountry = ref(null)
</script>

<template>
  <gv-radios 
    v-model="selectedCountry"
    legend="Where do you live?" 
    :legend-is-page-heading="true" 
    legend-class="govuk-fieldset__legend--l"
  >
    <gv-radio 
      v-for="country in countries" 
      :key="country.name" 
      :value="country"
    >
      {{ country.name }}
    </gv-radio>
  </gv-radios>
  
  <gv-inset-text v-if="selectedCountry" aria-live="polite">
    The helpline number for {{ selectedCountry.name }} is {{ selectedCountry.phone }}
  </gv-inset-text>
</template>
```

## Inline radios

Set the `direction` prop to `inline` to show checkboxes side-by-side on larger screens.

```vue-html
<gv-radios 
  legend="Have you changed your name?"
  :legend-is-page-heading="true"
  legend-class="govuk-fieldset__legend--l"
  hint="This includes changing your last name or spelling your name differently."
  direction="inline"
>
  <gv-radio :value="true">Yes</gv-radio>
  <gv-radio :value="false">No</gv-radio>
</gv-radios>
```

## Showing hints

You can add hints to both the checkbox group and individual checkboxes using the `hint` prop or slot.

```vue-html
<gv-radios legend="How do you want to sign in?" :legend-is-page-heading="true" legend-class="govuk-fieldset__legend--l">
  <template #hint>
    You’ll need an account to prove your identity and complete your Self Assessment.
  </template>
  <gv-radio value="gateway">
    Sign in with Government Gateway
    <template #hint>
      You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.
    </template>
  </gv-radio>
  <gv-radio value="verify">
    Sign in with GOV.UK Verify
    <template #hint>
      You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, 
      Experian, Post Office, Royal Mail or SecureIdentity.
    </template>
  </gv-radio>
</gv-radios>
```

## Radio items with a text divider

Set the `divider` prop to show a text divider above an option. The text is usually the word 'or'.

```vue-html
<gv-radios legend="Where do you live?" :legend-is-page-heading="true" legend-class="govuk-fieldset__legend--l">
  <gv-radio value="england">England</gv-radio>
  <gv-radio value="scotland">Scotland</gv-radio>
  <gv-radio value="wales">Wales</gv-radio>
  <gv-radio value="northern-ireland">Northern Ireland</gv-radio>
  <gv-radio divider="or" value="abroad">I am a British citizen living abroad</gv-radio>
</gv-radios>
```

## Conditionally revealing a related question

Use the `conditional` slot to show a related question when an option is selected.

```vue-html
<gv-radios
  :legend-is-page-heading="true"
  legend-class="govuk-fieldset__legend--l"
>
  <template #legend>
    How would you prefer to be contacted?
  </template>
  <template #hint>
    Select one option.
  </template>
  <gv-radio value="email"> 
    Email
    <template #conditional>
      <gv-input label="Email address" class="govuk-!-width-one-half" type="email" :spellcheck="false" autocomplete="email"/>
    </template>
  </gv-radio>
  <gv-radio value="phone">
    Phone
    <template #conditional>
      <gv-input label="Phone number" class="govuk-!-width-one-half" type="tel" autocomplete="tel"/>
    </template>
  </gv-radio>
  <gv-radio value="text">
    Text message
    <template #conditional>
      <gv-input label="Mobile phone number" class="govuk-!-width-one-half" type="tel" autocomplete="tel"/>
    </template>
  </gv-radio>
</gv-radios>
```

## Smaller radios

Set the `size` prop to `small` to use smaller radios.

```vue-html
<gv-radios size="small" legend="Filter" legend-class="govuk-fieldset__legend--m">
  <gv-radio value="monthly">Monthly</gv-radio>
  <gv-radio value="yearly">Yearly</gv-radio>
</gv-radios>
```

## Error messages

Set the `error-message` prop to display an error.

```vue-html
<gv-radios
  legend="Where do you live?" 
  :legend-is-page-heading="true" 
  legend-class="govuk-fieldset__legend--l"
  error-message="Select the country where you live"
>
  <gv-radio value="england">England</gv-radio>
  <gv-radio value="scotland">Scotland</gv-radio>
  <gv-radio value="wales">Wales</gv-radio>
  <gv-radio value="northern-ireland">Northern Ireland</gv-radio>
</gv-radios>
```

::gvd-options{component="Radios" :showName=true}
::

::gvd-options{component="Radio" :showName=true}
::