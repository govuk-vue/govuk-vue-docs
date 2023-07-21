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