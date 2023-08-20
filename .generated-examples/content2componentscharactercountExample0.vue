<template>
  <gv-character-count 
  label="Can you provide more detail?" 
  :label-is-page-heading="true" 
  label-class="govuk-label--l"
  :max-chars="200"
>
  <template #hint>
    Do not include personal or financial information, like your National Insurance number or credit card details. 
  </template>
</gv-character-count>
</template>