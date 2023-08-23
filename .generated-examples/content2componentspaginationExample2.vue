<script setup lang="ts">
import { computed } from 'vue'
import type { Ref } from 'vue'
const pages = [
  { title: 'Content page A', content: 'This is content page A' },
  { title: 'Content page B', content: 'This is content page B' },
  { title: 'Content page C', content: 'This is content page C' },
]

const currentPageIndex = ref(0)
const contentElement: Ref<HTMLDivElement | null> = ref(null)

const currentPage = computed(() => {
  return pages[currentPageIndex.value]
})

const previousPage = computed(() => {
  if(currentPageIndex.value > 0) {
    return pages[currentPageIndex.value-1]
  }
  return null
})

const nextPage = computed(() => {
  if(currentPageIndex.value < pages.length-1) {
    return pages[currentPageIndex.value+1]
  }
  return null
})

function handlePreviousClicked() {
  if(currentPageIndex.value > 0) {
    currentPageIndex.value--
    focusContent()
  }
}

function handleNextClicked() {
  if(currentPageIndex.value < pages.length-1) {
    currentPageIndex.value++
    focusContent()
  }
}

/* When the user changes page, we focus on the main content for accessibility. 
   Screen reader users will hear the new page content being read, and the focus
   position will be in the right place for keyboard-only users to tab through the
   content.
 */
function focusContent() {
  if(contentElement.value) {
    contentElement.value.focus()
  }
}
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
    :previous-text="previousPage ? 'Previous' : ''"
    :previous-label="previousPage ? previousPage.title : null"
    :next-text="nextPage ? 'Next' : ''"
    :next-label="nextPage ? nextPage.title : null" 
    @previousClicked="handlePreviousClicked"
    @nextClicked="handleNextClicked"
  />
</template>