<template>
  <gv-fieldset 
  legend="What is your address?" 
  :legend-is-page-heading="true" 
  legend-class="govuk-fieldset__legend--l"
>
  <gv-input label="Address line 1" autocomplete="address-line1"/>
  <gv-input label="Address line 2 (optional)" autocomplete="address-line2"/>
  <gv-input label="Town" autocomplete="address-level2" class="govuk-!-width-two-thirds"/>
  <gv-input label="Postcode" autocomplete="postal-code" class="govuk-input--width-10"/>
</gv-fieldset>
</template>