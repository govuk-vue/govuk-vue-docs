---
layout: component
---

# Error summary

Use this component at the top of a page to summarise any errors a user has made.

When a user makes an error, you must show both an error summary and an [error message](error-message) next to each 
answer that contains an error.

See the [GOV.UK Design System documentation on error summaries](https://design-system.service.gov.uk/components/error-summary/)
for more information on when to use this component.

```vue-html
<gv-error-summary :disable-auto-focus="true">
  <gv-error-link target-id="name">
    Enter your full name
  </gv-error-link>
  <gv-error-link target-id="passport-date-day">
    The date your passport was issued must be in the past
  </gv-error-link>
</gv-error-summary>

<gv-input 
  id="name" 
  label="Full name" 
  error-message="Enter your full name" 
  autocomplete="name" 
  :spellcheck="false" 
/>

<gv-date-input
  id="passport-date"
  legend="When was your passport issued?"
  hint="For example, 27 3 2007"
  error-message="The date your passport was issued must be in the past"
  :day-has-error="true"
  :month-has-error="true"
  :year-has-error="true"
/>
```

## Linking to the error

### If the error is for a field on the page

Use the `target-id` prop to specify which field on the page has the error. The page will jump to that field when the error
link is clicked.

You must manually assign an ID to any field which is linked to from the error summary. Do not rely on IDs which GOV.UK Vue
automatically generates, because these may change.

For radios and checkboxes, use the ID of the first radio or checkbox in the list. 

For dates, pass an `id` to `gv-date`. The individual fields in the date will use this ID appended with 
`-day`, `-month` and -`year` - for example, for `<gv-date id="dob">` the inputs will have IDs of `dob-day`, `dob-month` 
and `dob-year`. In the error summary, set the `target-id` to the ID of the field that contains an error. If you don't know
which field has an error, use the ID of the day field.

### If the error is on another page

Use the `href` prop to link to the page with the error. 

You can also set up error links to use `router-link` or `nuxt-link` if needed. See
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details.

```vue
<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-error-summary 
    title="Some sections are missing information" 
    :disable-auto-focus="true"
  >
    <gv-error-link :component="NuxtLink" to="/example-page">
      Enter your contact details
    </gv-error-link>
  </gv-error-summary>
</template>
```

## Using validation libraries

There are several popular validation libraries for Vue, such as [Vuelidate](https://vuelidate-next.netlify.app) and 
[VeeValidate](https://vee-validate.logaretm.com). GOV.UK Vue doesn't directly integrate with these libraries, but you should
be able to use this component and the `error-message` prop on form components to integrate them yourself.

If you have any problems integrating with a validation library, [raise an issue on GitHub](https://github.com/govuk-vue/govuk-vue/issues/new). 


::gvd-options{component="ErrorSummary" :showName=true}
::

::gvd-options{component="ErrorLink" :showName=true}
::