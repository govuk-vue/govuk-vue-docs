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