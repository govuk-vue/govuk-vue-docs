<script setup lang="ts">
  const data = [
    { date: 'First 6 weeks', amount: '£109.80 per week'},
    { date: 'Next 33 weeks', amount: '£109.80 per week'},
    { date: 'Total estimated pay', amount: '£4,282.20'},
  ]
</script>

<template>
  <gv-table caption="Dates and amounts">
    <gv-table-head>
      <gv-table-row>
        <gv-table-header>Date</gv-table-header>
        <gv-table-header>Amount</gv-table-header>
      </gv-table-row>
    </gv-table-head>
    <gv-table-body>
      <gv-table-row v-for="row in data" :key="row.date">
        <gv-table-header scope="row">{{ row.date }}</gv-table-header>
        <gv-table-cell>{{ row.amount }}</gv-table-cell>
      </gv-table-row>
    </gv-table-body>
  </gv-table>
</template>