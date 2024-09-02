---
layout: component
---

# Task list

The task list component displays all the tasks a user needs to do, and allows users to easily identify which ones are done and which they still need to do.

See the [GOV.UK Design System documentation on task lists](https://design-system.service.gov.uk/components/task-list/)
for more information on when to use this component.

```vue
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
```

## Setting the task name and link

Pass the name of the task using the `text` prop or in the default slot.

If you pass an `href`, the task name will be a link.

You can set up navigation links to use `router-link` or `nuxt-link` if needed. See
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details. You'll need to pass the path in `href` rather than `to`.

## Setting the status

For text-only statuses, such as 'Completed' or 'Cannot start yet', pass the status in the `status` prop.

For tag statuses, pass a `gv-tag` in the `status` slot.

If the task cannot be started yet, you should also pass `:cannot-start-yet="true"` to make the status grey.

```vue
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
```

::gvd-options{component="TaskList" :showName=true}
::

::gvd-options{component="TaskListItem" :showName=true}
::