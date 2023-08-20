<template>
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
</template>