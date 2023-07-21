<script setup lang="ts">
import { ref, computed } from 'vue'

const itemPrice = ref(null)
const vatRate = 0.2

const priceWithVat = computed(() => {
  const parsedItemPrice = parseFloat(itemPrice.value);
  
  if(!isNaN(parsedItemPrice)) {
    const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })
    return formatter.format(parsedItemPrice * (1 + vatRate))
  }
})
</script>
<template>
  <gv-input v-model="itemPrice" prefix="£" suffix="per item" :spellcheck="false" class="govuk-input--width-4">
    <template #label>
      What is the cost per item excluding VAT, in pounds?
    </template>
  </gv-input>
  <gv-inset-text v-if="priceWithVat" aria-live="polite">
    The total cost per item, including VAT, is {{ priceWithVat }}
  </gv-inset-text>
</template>