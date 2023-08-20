<template>
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
</template>