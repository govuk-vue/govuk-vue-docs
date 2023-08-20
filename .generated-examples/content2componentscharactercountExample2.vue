<script setup lang="ts">
import { ref } from 'vue'

const text = ref(`This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 2 more times.

This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear. This paragraph will now repeat 1 more time.

This example of a textarea has a character limit of 1000 characters. The character count is hidden, but will appear when more than 850 characters are entered in this textarea. Type some more text into this textarea to see the character count appear.`)
</script>

<template>
  <gv-character-count
    v-model="text"
    label="Can you provide more detail?"
    :label-is-page-heading="true"
    label-class="govuk-label--l"
    :max-chars="1000"
    :threshold="85"
  />
</template>