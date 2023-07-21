<script setup lang="ts">
const options = [
  { colour: 'grey', text: 'inactive' },
  { colour: 'green', text: 'new' },
  { colour: 'turquoise', text: 'active' },
  { colour: 'blue', text: 'pending' },
  { colour: 'purple', text: 'received' },
  { colour: 'pink', text: 'sent' },
  { colour: 'red', text: 'rejected' },
  { colour: 'orange', text: 'declined' },
  { colour: 'yellow', text: 'delayed' },
]
</script>

<template>
  <gv-table>
    <gv-table-head>
      <gv-table-row>
        <gv-table-header>Colour prop value</gv-table-header>
        <gv-table-header>Tag</gv-table-header>
      </gv-table-row>
    </gv-table-head>
    <gv-table-body>
      <gv-table-row v-for="option in options">
        <gv-table-cell>{{ option.colour }}</gv-table-cell>
        <gv-table-cell>
          <gv-tag :colour="option.colour" :text="option.text" />
        </gv-table-cell>
      </gv-table-row>
    </gv-table-body>
  </gv-table>
</template>