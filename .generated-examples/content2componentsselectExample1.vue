<script setup lang="ts">
import { ref } from 'vue'

const sortOptions = [
  { label: 'Price, high to low', property: 'price', direction: 'descending' },
  { label: 'Price, low to high', property: 'price', direction: 'ascending' },
]

const selectedSort = ref(null)

function handleChange() {
  alert('You changed the sort value')
}
</script>

<template>
  <gv-select 
    v-model="selectedSort"
    label="Sort by"
    @change="handleChange"
  >
    <gv-select-option 
      v-for="sortOption in sortOptions" 
      :key="sortOptions.label" 
      :value="sortOption"
    >
      {{ sortOption.label }}
    </gv-select-option>
  </gv-select>
  
  <gv-inset-text v-if="selectedSort" aria-live="polite">
    Sorting by {{ selectedSort.label.toLowerCase() }}
  </gv-inset-text>
</template>