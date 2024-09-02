<template>
  <gv-task-list>
  <gv-task-list-item href="/example-page" status="Completed">
    Company Directors
  </gv-task-list-item>
  <gv-task-list-item href="/example-page">
    Registered company details
    <template #status>
      <gv-tag colour="light-blue">In progress</gv-tag>
    </template>
  </gv-task-list-item>
  <gv-task-list-item href="/example-page">
    Application details
    <template #status>
      <gv-tag>Not yet started</gv-tag>
    </template>
  </gv-task-list-item>
  <gv-task-list-item status="Cannot start yet" :cannot-start-yet="true">
    Funds applied to
    <template #hint>
      The funds will be announced in January
    </template>
  </gv-task-list-item>
</gv-task-list>
</template>