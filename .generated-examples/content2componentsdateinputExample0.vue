<script setup lang="ts">
import { ref, computed } from 'vue'

const day = ref('')
const month = ref('')
const year = ref('')

const formattedDate = computed(() => {
  const parsedDate = Date.parse(`${year.value}-${month.value}-${day.value}`)

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