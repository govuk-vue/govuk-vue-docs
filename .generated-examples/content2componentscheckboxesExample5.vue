<template>
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
</template>