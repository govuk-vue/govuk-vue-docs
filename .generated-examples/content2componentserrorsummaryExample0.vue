<template>
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
</template>