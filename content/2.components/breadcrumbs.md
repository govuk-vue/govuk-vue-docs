---
layout: component
---

# Breadcrumbs

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

See the [GOV.UK Design System documentation on breadcrumbs](https://design-system.service.gov.uk/components/breadcrumbs/) for more information on when to use this component.

```vue
<gv-breadcrumbs>
  <gv-breadcrumb-item href="#">Home</gv-breadcrumb-item>
  <gv-breadcrumb-item href="#">Passports, travel and living abroad</gv-breadcrumb-item>
  <gv-breadcrumb-item href="#">Travel abroad</gv-breadcrumb-item>
</gv-breadcrumbs>
```

## Using `router-link` or `nuxt-link`

You can set up breadcrumb items to use `router-link` or `nuxt-link` if needed. See
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details.

```vue
<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-breadcrumbs>
    <gv-breadcrumb-item :component="NuxtLink" to="/example-page">Dashboard</gv-breadcrumb-item>
    <gv-breadcrumb-item :component="NuxtLink" to="/example-page">Reports</gv-breadcrumb-item>
    <gv-breadcrumb-item>Processing times</gv-breadcrumb-item>
  </gv-breadcrumbs>
</template>
```

## Using a click event handler

You can attach a click event handler instead of setting `href` on breadcrumb items. Use `@click.prevent` to stop the browser from jumping to the top of the page.

```vue
<script setup lang="ts">
function handleClick(destination: String) {
  alert(`You clicked the breadcrumb to ${destination}`)
}
</script>

<template>
  <gv-breadcrumbs>
    <gv-breadcrumb-item @click.prevent="handleClick('Dashboard')">Dashboard</gv-breadcrumb-item>
    <gv-breadcrumb-item @click.prevent="handleClick('Reports')">Reports</gv-breadcrumb-item>
    <gv-breadcrumb-item>Processing times</gv-breadcrumb-item>
  </gv-breadcrumbs>
</template>
```

## Collapsing breadcrumbs on mobile devices

If you have long breadcrumbs you can configure the component to only show the first and last items on mobile devices
by setting `:collapse-on-mobile="true"`.

```vue
<gv-breadcrumbs :collapse-on-mobile="true">
  <gv-breadcrumb-item href="#">Home</gv-breadcrumb-item>
  <gv-breadcrumb-item href="#">Environment</gv-breadcrumb-item>
  <gv-breadcrumb-item href="#">Rural and countryside</gv-breadcrumb-item>
  <gv-breadcrumb-item href="#">Rural development and land management</gv-breadcrumb-item>
  <gv-breadcrumb-item href="#">Economic growth in rural areas</gv-breadcrumb-item>
</gv-breadcrumbs>
```

::gvd-options{component="Breadcrumbs" :showName=true}
::

::gvd-options{component="BreadcrumbItem" :showName=true}
::