<template>
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
</template>