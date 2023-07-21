<script setup lang="ts">
import { ref } from 'vue'

const day = ref('19')
const month = ref('3')
const year = ref('2100')

const dayHasError = ref(false)
const monthHasError = ref(false)
const yearHasError = ref(false)
const errorMessage = ref('')

function validateDate() {
  dayHasError.value = false;
  monthHasError.value = false;
  yearHasError.value = false;
  errorMessage.value = '';
  
  const hasDay = day.value.length > 0 && !isNaN(parseInt(day.value))
  const hasMonth = month.value.length > 0 && !isNaN(parseInt(month.value))
  const hasYear = year.value.length > 0 && !isNaN(parseInt(year.value))
  
  // Check if every field is empty
  if(!hasDay && !hasMonth && !hasYear) {
    errorMessage.value = 'Enter the date your passport was issued'
    dayHasError.value = true
    monthHasError.value = true
    yearHasError.value = true
    return
  }
  
  // Check if any individual fields are empty
  if(!hasDay || !hasMonth || !hasYear) {
    const missingFields = [];
    
    if(!hasDay) {
      missingFields.push('day')
      dayHasError.value = true;
    }
    
    if(!hasMonth) {
      missingFields.push('month')
      monthHasError.value = true;
    }
    
    if(!hasYear) {
      missingFields.push('year')
      yearHasError.value = true;
    }
    
    errorMessage.value = `The date your passport was issued must include a ${missingFields.join(' and ')}`
    return
  }
  
  // Check day, month or year are obviously invalid
  if(parseInt(day.value) < 1 || parseInt(day.value) > 31) {
    dayHasError.value = true
  }

  if(parseInt(month.value) < 1 || parseInt(month.value) > 12) {
    monthHasError.value = true
  }

  if(parseInt(year.value) < 1900 || parseInt(year.value) > 2100) {
    yearHasError.value = true
  }

  // Check if whole date is valid  (eg 31-2-2023 would pass previous checks but fail here)
  const parsedDate = Date.parse(`${year.value}-${month.value}-${day.value}`)
  
  if(isNaN(parsedDate)) {
    dayHasError.value = true
    monthHasError.value = true
    yearHasError.value = true
  }
  
  if(dayHasError.value || monthHasError.value || yearHasError.value) {
    errorMessage.value = `The date your passport was issued must be a real date`
    return;
  }
  
  // Check if date is in the past (today is OK)
  if(new Date(parsedDate) > new Date()) {
    dayHasError.value = true
    monthHasError.value = true
    yearHasError.value = true
    errorMessage.value = `The date your passport was issued must be today or in the past `
    return;
  }
  
  alert('The date is valid')
}
</script>

<template>
  <gv-date-input
    legend="When was your passport issued?"
    :legend-is-page-heading="true"
    legend-class="govuk-fieldset__legend--l"
    hint="For example, 27 3 2007"
    v-model:day="day"
    v-model:month="month"
    v-model:year="year"
    :day-has-error="dayHasError"
    :month-has-error="monthHasError"
    :year-has-error="yearHasError"
    :error-message="errorMessage"
  />
  
  <gv-button @click="validateDate">Validate date</gv-button>
</template>