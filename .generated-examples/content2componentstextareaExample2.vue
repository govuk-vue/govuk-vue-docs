<template>
  <gv-textarea 
  label="Can you provide more detail?" 
  :label-is-page-heading="true" 
  label-class="govuk-label--l"
  :rows="8"
>
  <template #hint>
    Do not include personal or financial information, like your National Insurance number or credit card details. 
  </template>
</gv-textarea>
</template>