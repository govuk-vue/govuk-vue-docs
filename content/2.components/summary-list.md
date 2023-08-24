---
layout: component
---

# Summary list

Use a summary list to summarise information, for example, a user’s responses at the end of a form.

See the [GOV.UK Design System documentation on summary lists](https://design-system.service.gov.uk/components/summary-list/) for
more information on when to use this component.

```vue
<gv-summary-list>
  <gv-summary-list-row key-text="Name" value-text="Sarah Philips">
    <template #actions>
      <gv-summary-list-row-action href="#">Change</gv-summary-list-row-action>
    </template>
  </gv-summary-list-row>
  <gv-summary-list-row key-text="Date of birth" value-text="5 January 1978">
    <template #actions>
      <gv-summary-list-row-action href="#">Change</gv-summary-list-row-action>
    </template>
  </gv-summary-list-row>
  <gv-summary-list-row key-text="Address">
    <template #value>
      72 Guild Street<br/>
      London<br/>
      SE23 6FH
    </template>
    <template #actions>
      <gv-summary-list-row-action href="#">Change</gv-summary-list-row-action>
    </template>
  </gv-summary-list-row>
  <gv-summary-list-row key-text="Name">
    <template #value>
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </template>
    <template #actions>
      <gv-summary-list-row-action href="#">Change</gv-summary-list-row-action>
    </template>
  </gv-summary-list-row>
</gv-summary-list>
```

## Removing the borders

You can remove the borders from a summary list with `:show-borders="false"` and from individual rows with 
`:show-borders="false"`. You should only do this if the list doesn't have actions.

```vue
<gv-summary-list :show-borders="false">
  <gv-summary-list-row key-text="Name" value-text="Sarah Philips"/>
  <gv-summary-list-row key-text="Date of birth" value-text="5 January 1978"/>
  <gv-summary-list-row key-text="Address">
    <template #value>
      72 Guild Street<br/>
      London<br/>
      SE23 6FH
    </template>
  </gv-summary-list-row>
  <gv-summary-list-row key-text="Name">
    <template #value>
      <p class="govuk-body">07700 900457</p>
      <p class="govuk-body">sarah.phillips@example.com</p>
    </template>
  </gv-summary-list-row>
</gv-summary-list>
```

## Summary cards

A summary list will become a summary card if it has a card title, card actions or a card class.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const choices = [
  {
    university: 'University of Gloucestershire',
    course: {
      name: 'English (3DMD)',
      type: 'PGCE with QTS full time'
    },
    location: 'Road, City, SW1 1AA'
  },
  {
    university: 'University of Bristol',
    course: {
      name: 'English (Q3X1)',
      type: 'PGCE with QTS full time'
    },
    location: 'Road, City, SW2 1AA'
  }  
]

function deleteChoice(university: String) {
  alert(`You clicked delete on ${university}`)
}

function withdraw(university: String) {
  alert(`You clicked withdraw on ${university}`)
}
</script>

<template>
  <gv-summary-list 
    v-for="choice in choices" 
    :key="choice.university" 
    :card-title="choice.university">
    <template #card-actions>
      <gv-summary-card-action 
        @click.prevent="deleteChoice(choice.university)" 
        :visually-hidden-text="`of ${choice.university}`"
      >
        Delete choice
      </gv-summary-card-action>
      <gv-summary-card-action 
        @click.prevent="withdraw(choice.university)"
        :visually-hidden-text="`from ${choice.university}`"
      >
        Withdraw
      </gv-summary-card-action>      
    </template>
    <gv-summary-list-row key-text="Course">
      <template #value>
        {{ choice.course.name }}<br/>
        {{ choice.course.type }}
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row key-text="Location" :value-text="choice.location"/>
  </gv-summary-list>
</template>
```

## Using `router-link` or `nuxt-link` for actions

You can set up row actions and card actions to use `router-link` or `nuxt-link` if needed. See
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details.

```vue
<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-summary-list>
    <gv-summary-list-row key-text="Name" value-text="Sarah Philips">
      <template #actions>
        <gv-summary-list-row-action 
          :component="NuxtLink" 
          to="/example-page"
        >
          Change
        </gv-summary-list-row-action>
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row key-text="Date of birth" value-text="5 January 1978">
      <template #actions>
        <gv-summary-list-row-action
          :component="NuxtLink"
          to="/example-page"
        >
          Change
        </gv-summary-list-row-action>
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row key-text="Address">
      <template #value>
        72 Guild Street<br/>
        London<br/>
        SE23 6FH
      </template>
      <template #actions>
        <gv-summary-list-row-action
          :component="NuxtLink"
          to="/example-page"
        >
          Change
        </gv-summary-list-row-action>
      </template>
    </gv-summary-list-row>
    <gv-summary-list-row key-text="Name">
      <template #value>
        <p class="govuk-body">07700 900457</p>
        <p class="govuk-body">sarah.phillips@example.com</p>
      </template>
      <template #actions>
        <gv-summary-list-row-action
          :component="NuxtLink"
          to="/example-page"
        >
          Change
        </gv-summary-list-row-action>
      </template>
    </gv-summary-list-row>
  </gv-summary-list>
</template>
```

::gvd-options{component="SummaryList" :showName=true}
::

::gvd-options{component="SummaryListRow" :showName=true}
::

::gvd-options{component="SummaryListRowAction" :showName=true}
::

::gvd-options{component="SummaryCardAction" :showName=true}
::



