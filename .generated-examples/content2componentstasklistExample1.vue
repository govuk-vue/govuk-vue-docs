<template>
  <gv-task-list>
  <gv-task-list-item href="/example-page">
    Manager approval
    <template #status>
      <gv-tag class="govuk-tag--orange">Awaiting approval</gv-tag>
    </template>
  </gv-task-list-item>
</gv-task-list>
</template>