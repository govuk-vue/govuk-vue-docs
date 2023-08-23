---
layout: component
---

# Pagination

Help users navigate forwards and backwards through a series of pages - for example, search results.

See the [GOV.UK Design System documentation on pagination](https://design-system.service.gov.uk/components/pagination/) for
more information on when to use this component.

```vue
<gv-pagination :total-pages="3"/>
```

## Setting and monitoring the current page number

Your page will probably need to know the number of the current page so that it can render its content. You can bind a
ref with `v-model:current-page` to set the current page when the pagination component is mounted and monitor when the user
selects a different page.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
</script>

<template>
  <gv-inset-text aria-live="polite">
    You are on page {{ currentPage }}
  </gv-inset-text>
  <gv-pagination v-model:currentPage="currentPage" :total-pages="3"/>
</template>
```

## For navigating between content pages

Use the ‘block’ style of pagination to let users navigate through related content that has been split across multiple pages.

You can use link labels to give context on what the neighbouring pages are about. Use the `previous-label` and `next-label` props.

You can use block-style pagination with or without passing `total-pages`.

### Without `total-pages`
Block-style pagination will be used by default if you don't pass the `total-pages` prop. Listen to the `previousClicked`
and `nextClicked` events to know when to change pages. Pass an empty string to `previous-text` and `next-text` to hide
the Previous/Next links as appropriate.

```vue
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
```

### With `total-pages`
If you pass a value for `total-pages`, the pagination will show as a list of page numbers by default. You can override 
this by passing `variant="block"`.

```vue
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
```

## Adding URLs to the links

We strongly recommend that you pass a URL to `page-href` (and `previous-href`/`next-href` if using block style) so that the 
pagination links can function as normal links. This will allow users to:

* open pagination links in new tabs
* use the browser back button
* share links to specific pages

Include the `${pageNumber}` placeholder in the URL you pass. The placeholder will be replaced with the appropriate number
for each page, starting from `1`. It's up to you how you use the page number in the URL - it could be in the query string,
the hash or as part of the path. 

Before the component is rendered, you should parse the page number from the URL and pass it to the pagination component 
with `v-model:current-page` (not shown in this example).

```vue
<gv-pagination
  :total-pages="3"
  page-href="#page-${pageNumber}"
/>
```

If you're using block mode without passing `total-pages` you can also pass `previous-href` and `next-href`.

You can [use router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for your navigation links if needed using the `link-component` prop.

::gvd-options{component="Pagination"}
