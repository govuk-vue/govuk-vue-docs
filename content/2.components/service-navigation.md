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

## Combining the header, service navigation and phase banner

If you use the service navigation and [phase banner](./phase-banner) together, place the phase banner under the service navigation.

```vue
<gv-header :rebrand="true"/>
<gv-service-navigation service-name="Service name">
  <gv-service-navigation-item href="/example-page">Navigation item 1</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page" :current="true">Navigation item 2</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page">Navigation item 3</gv-service-navigation-item>
</gv-service-navigation>
<gv-phase-banner tag="Alpha">
  This is a new service – your <a class="govuk-link" href="https://github.com/govuk-vue/govuk-vue/issues">feedback</a> will help us to improve it.
</gv-phase-banner>
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