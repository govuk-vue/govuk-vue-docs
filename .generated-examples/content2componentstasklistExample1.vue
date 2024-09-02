<template>
  <gv-task-list>
  <gv-task-list-item href="/example-page" status="Completed">
    Request details
  </gv-task-list-item>
  <gv-task-list-item href="/example-page">
    Team lead approval
    <template #status>
      <gv-tag colour="green">Approved</gv-tag>
    </template>
  </gv-task-list-item>
  <gv-task-list-item href="/example-page">
    Manager approval
    <template #status>
      <gv-tag colour="orange">Awaiting approval</gv-tag>
    </template>
  </gv-task-list-item>
  <gv-task-list-item status="Cannot start yet" :cannot-start-yet="true">
    Final sign-off
    <template #hint>
      Your team lead and manager need to approve before final sign-off
    </template>
  </gv-task-list-item>
</gv-task-list>
</template>