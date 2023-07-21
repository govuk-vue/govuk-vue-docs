<template>
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
</template>