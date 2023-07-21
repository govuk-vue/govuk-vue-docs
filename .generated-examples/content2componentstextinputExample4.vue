<template>
  <gv-input :label-is-page-heading="true" label-class="govuk-label--l" inputmode="numeric" :spellcheck="false" class="govuk-input--width-10">
  <template #label>
    What is your account number?
  </template>
  <template #hint>
    Must be between 6 and 8 digits long
  </template>
</gv-input>
</template>