---
layout: component
---

# Character count

Help users know how much text they can enter when there is a limit on the number of characters.

See the [GOV.UK Design System documentation on character counts](https://design-system.service.gov.uk/components/character-count/) for more information on when to use this component.

```vue-html
<gv-character-count 
  label="Can you provide more detail?" 
  :label-is-page-heading="true" 
  label-class="govuk-label--l"
  :max-chars="200"
>
  <template #hint>
    Do not include personal or financial information, like your National Insurance number or credit card details. 
  </template>
</gv-character-count>
```

## Counting words instead of characters

Use the `max-words` prop to count words instead of characters. A word is any group of consecutive non-whitespace characters.

```vue-html
<gv-character-count 
  label="Enter a job description" 
  :label-is-page-heading="true" 
  label-class="govuk-label--l"
  :max-words="150"
/>
```

## Hiding the message until the user is near the limit

You can choose to display a character count message when the length of text within the textarea passes a certain 
‘threshold’ of characters or words.

Use the `threshold` prop to set the threshold. The number you pass will be treated as a percentage - for example, `:threshold="75"` for 75% - and the count
message will only be shown when the user has entered a length of text that's above that percentage of the limit.

```vue
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
```

## Error messages

You should validate the length of the user's input when they submit the form. If it's over the limit, use the 
`error-message` prop or slot to show a message telling the user what the limit is. The character count message will
continue to tell them how far over the limit they are.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const text = ref('A frontend developer designs, builds and improves website software that meets user needs. You will design software which meets user needs and creates meaningful interactions and relationships with users. You will have an understanding of the three fundamental frontend technologies (HTML, CSS and JavaScript). You will create code that is open by default and easy for others to reuse.')
</script>

<template>
  <gv-character-count
    v-model="text"
    label="Enter a job description"
    :label-is-page-heading="true"
    label-class="govuk-label--l"
    :max-chars="350"
    error-message="Job description must be 350 characters or less"
  />
</template>
```

::gvd-options{component="CharacterCount"}
::
