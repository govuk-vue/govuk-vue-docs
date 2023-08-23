<script setup lang="ts">
import { computed, watch } from 'vue'
import type { Ref } from 'vue'
const pages = [
  { title: 'Content page A', content: 'This is content page A' },
  { title: 'Content page B', content: 'This is content page B' },
  { title: 'Content page C', content: 'This is content page C' },
]

// The current-page prop is 1-indexed - we will need to account for that when accessing the pages[] array
const currentPageNumber = ref(1)
const contentElement: Ref<HTMLDivElement | null> = ref(null)

const currentPage = computed(() => {
  return pages[currentPageNumber.value - 1]
})

const previousPage = computed(() => {
  if(currentPageNumber.value > 1) {
    return pages[currentPageNumber.value-2]
  }
  return null
})

const nextPage = computed(() => {
  if(currentPageNumber.value < pages.length) {
    return pages[currentPageNumber.value]
  }
  return null
})

/* When the user changes page, we focus on the main content for accessibility. 
   Screen reader users will hear the new page content being read, and the focus
   position will be in the right place for keyboard-only users to tab through the
   content.
 */
watch(currentPageNumber, () => {
  if(contentElement.value) {
    contentElement.value.focus()
  }
})
</script>

<template>
  <div ref="contentElement" tabindex="-1">
    <h1 class="govuk-heading-l">
      {{ currentPage.title }}
    </h1>
    <p class="govuk-body">
      {{ currentPage.content }}
    </p>
  </div>
  <gv-pagination
    variant="block"
    v-model:current-page="currentPageNumber"
    :total-pages="3"
    :previous-label="previousPage ? previousPage.title : null"
    :next-label="nextPage ? nextPage.title : null"
  />
</template>