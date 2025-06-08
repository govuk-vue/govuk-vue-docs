---
layout: component
---

# Header

The GOV.UK header shows users that they are on GOV.UK and which service they are using.

See the [GOV.UK Design System documentation on the header](https://design-system.service.gov.uk/components/header/)
for more information on when to use this component.

```vue
<gv-header :rebrand="true" />
```

## Adding a service name

:gv-warning-text{text="Showing the service name in the header is deprecated in GOV.UK Frontend and will be removed in the next breaking release. Use the Service navigation component instead."}

Use the `service-name` prop or slot to include your service name in the header. 

```vue
<gv-header :rebrand="true" service-name="Service name" />
```

## Adding navigation links

:gv-warning-text{text="Navigation links in the header are deprecated in GOV.UK Frontend and will be removed in the next breaking release. Use the Service navigation component instead."}

Pass a list of `GvHeaderNavigationItem`s in the `navigation` slot to include navigation links. Set the `active` prop to 
`true` if the link is for the current page or one of its children.

```vue
<gv-header :rebrand="true" service-name="Service name">
  <template #navigation>
    <gv-header-navigation-item href="#" :active="true">
      Navigation item 1
    </gv-header-navigation-item>
    <gv-header-navigation-item href="#">
      Navigation item 2
    </gv-header-navigation-item>
    <gv-header-navigation-item href="#">
      Navigation item 3
    </gv-header-navigation-item>
    <gv-header-navigation-item href="#">
      Navigation item 4
    </gv-header-navigation-item>
  </template>
</gv-header>
```

### Using `router-link` or `nuxt-link` for navigation links

You can set up navigation links to use `router-link` or `nuxt-link` if needed. See
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details.

```vue
<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-header :rebrand="true" service-name="Service name">
    <template #navigation>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page" :active="true">
        Navigation item 1
      </gv-header-navigation-item>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page">
        Navigation item 2
      </gv-header-navigation-item>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page">
        Navigation item 3
      </gv-header-navigation-item>
      <gv-header-navigation-item :component="NuxtLink" to="/example-page">
        Navigation item 4
      </gv-header-navigation-item>
    </template>
  </gv-header>
</template>
```

## Customising the logo

Use the `logo` slot to override the default GOV.UK logo - for example, to use a departmental logo instead.

Using this slot overrides the `govuk-header__logo` `div` and everything inside it, so props such as `homepageUrl` 
and `productName` won't work. Include these elements in your slot content if you need them.

If your logo is white, use `fill="currentColor"` rather than `fill="#fff"` in the SVG. This will ensure the logo remains
visible when printed, as the logo will automatically be changed to black. It will also ensure the logo remains visible
if the user has set up custom colours in their browser or is using high contrast mode.
```vue
<template>
  <gv-header :rebrand="true">
    <template #logo>
      <div class="govuk-header__logo app-header__logo">
        <a href="/" class="govuk-header__link govuk-header__link--homepage">
          <svg
            focusable="false"
            role="img"
            class="govuk-header__logotype"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 30"
            height="30"
            width="47"
          >
            <polygon points="46.79769 7.68277 32.97322 11.4032 35.04362 14.9896 41.13804 13.34242 37.98907 25.09613 23.5 0 9.01093 25.09613 5.86196 13.34242 11.95638 14.9896 14.02678 11.4032 .20231 7.68277 6.18155 29.99698 6.1796 30 13.10712 30 23.5 12.00043 33.89288 30 40.8204 30 40.81845 29.99698 46.79769 7.68277" fill="currentColor"/>
          </svg>
          <span class="app-header__logotype-text"> GOV.UK Vue </span>
        </a>
      </div>
    </template>
  </gv-header>
</template>

<style lang="scss">
.app-header {
  &__logo {
    width: 100%;
  }
  
  &__logotype-text {
    font-weight: 700;
  }
}
</style>
```

## Customising the content

Use the `content` slot to override the default layout of the rest of the header. 

Using this slot overrides the `govuk-header__content` `div` and everything inside it, so props such as `serviceName`
and the `navigation` slot won't work. Include these elements in your slot content if you need them.

::gvd-options{component="Header" :showName=true}
::

::gvd-options{component="HeaderNavigationItem" :showName=true}
::