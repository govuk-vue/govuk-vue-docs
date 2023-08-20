<script setup lang="ts">
import { ref, computed } from 'vue'

const day = ref('')
const month = ref('')
const year = ref('')

const formattedDate = computed(() => {
  const parsedDate = Date.parse(`${year.value}-${month.value}-${day.value}`)

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