---
layout: component
---

# Service navigation

Service navigation helps users understand that they’re using your service and lets them navigate around your service.

See the [GOV.UK Design System documentation on service navigation](https://design-system.service.gov.uk/components/service-navigation/)
for more information on when to use this component.

```vue
<gv-service-navigation service-name="Service name" service-url="/example-page">
  <gv-service-navigation-item href="/example-page">Navigation item 1</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page" :current="true">Navigation item 2</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page">Navigation item 3</gv-service-navigation-item>
</gv-service-navigation>
```

## Showing service navigation under the GOV.UK header

If you're including service navigation under the [Header](/components/header), pass `class="govuk-header--full-width-border"`
to the header to make the blue bar the full width of the page.

```vue
<gv-header class="govuk-header--full-width-border"/>
<gv-service-navigation service-name="Service name">
  <gv-service-navigation-item href="/example-page">Navigation item 1</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page" :current="true">Navigation item 2</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page">Navigation item 3</gv-service-navigation-item>
</gv-service-navigation>
```

## Marking the current page

You can mark a `gv-service-navigation-item` as `current` or `active`. Use `current` if the user is currently on that page, or `active` if
on a page beneath that navigation item. 

For example, if you have a 'Staff directory' link in your service navigation, use `current`
when the user is on `/staff-directory` and `active` if the user is on `/staff-directory/profile/123`.

You can pass both `:current="true"` and `:active="true"` for the page the user is currently on; you do not need to ensure only one of them is `true`.

## Using `router-link` or `nuxt-link` for navigation links

You can set up navigation links to use `router-link` or `nuxt-link` if needed. See
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details.

```vue
<script setup lang="ts">
  import { NuxtLink } from '#components';
</script>

<template>
  <gv-service-navigation service-name="Service name" :service-name-link-component="NuxtLink" service-url="/example-page">
    <gv-service-navigation-item :component="NuxtLink" to="/example-page">Navigation item 1</gv-service-navigation-item>
    <gv-service-navigation-item :component="NuxtLink" to="/example-page" :current="true">Navigation item 2</gv-service-navigation-item>
    <gv-service-navigation-item :component="NuxtLink" to="/example-page">Navigation item 3</gv-service-navigation-item>
  </gv-service-navigation>
</template>
```


::gvd-options{component="ServiceNavigation" :showName=true}
::

::gvd-options{component="ServiceNavigationItem" :showName=true}
::