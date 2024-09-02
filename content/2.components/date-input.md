---
layout: component
---

# Date input

Use the date input component to help users enter a memorable date or one they can easily look up.

See the [GOV.UK Design System documentation on date inputs](https://design-system.service.gov.uk/components/date-input/) for more information on when to use this component.

## Form binding with v-model

You can bind data to the individual day, month and year fields using `v-model:day`, `v-model:month` and `v-model:year`.

You should bind these as strings, not numbers. Users can type any characters in the inputs, so you'll need to validate whether the individual parts
are numbers and whether the whole thing is a valid date, for example by using
[Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const day = ref('')
const month = ref('')
const year = ref('')

const formattedDate = computed(() => {
  const parsedDate = Date.parse(`${year.value}-${month.value.padStart(2, '0')}-${day.value.padStart(2, '0')}`)

  if(!isNaN(parsedDate)) {
    const date = new Date(parsedDate)
    return date.toLocaleString('en-GB', { dateStyle: 'full' })
  }
})
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
  />
  
  <gv-inset-text aria-live="polite">
    <template v-if="formattedDate">
      Your passport was issued on {{ formattedDate }}
    </template>
    <template v-else>
      You haven't entered a full date yet
    </template>
  </gv-inset-text>
</template>
```

## Use the autocomplete prop for a date of birth

Set the `autocomplete` prop to `bday` if you're asking the user for their date of birth. This will automatically set
the `autocomplete` attribute to `bday-day`, `bday-month` and `bday-year` on the text inputs in this component.

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const day = ref('')
const month = ref('')
const year = ref('')

const formattedDate = computed(() => {
  const parsedDate = Date.parse(`${year.value}-${month.value.padStart(2, '0')}-${day.value.padStart(2, '0')}`)

  if(!isNaN(parsedDate)) {
    const date = new Date(parsedDate)
    return date.toLocaleString('en-GB', { weekday: 'long' })
  }
})
</script>

<template>
  <gv-date-input
    legend="What is your date of birth?"
    hint="For example, 31 3 1980"
    autocomplete="bday"
    v-model:day="day"
    v-model:month="month"
    v-model:year="year"
  />
  
  <gv-inset-text aria-live="polite">
    <template v-if="formattedDate">
      You were born on a {{ formattedDate }}
    </template>
    <template v-else>
      You haven't entered a full date yet
    </template>
  </gv-inset-text>
</template>
```

## Validation and error messages

Set `day-has-error`, `month-has-error` or `year-has-error` to `true` to highlight specific input fields, 
and `error-message` to set the error message for the whole component. 

See the [GOV.UK Design System guidance on error messages for date inputs](https://design-system.service.gov.uk/components/date-input/#error-messages)
for more details on how to validate dates. 

The example below shows a basic date validator which follows these guidelines.

```vue
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
  const parsedDate = Date.parse(`${year.value}-${month.value.padStart(2, '0')}-${day.value.padStart(2, '0')}`)
  
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
```

::gvd-options{component="DateInput"}
::
