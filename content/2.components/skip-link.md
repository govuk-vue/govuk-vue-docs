---
layout: component
---

# Skip link

Use the skip link component to help keyboard-only users skip to the main content on a page.

See the [GOV.UK Design System documentation on the skip link](https://design-system.service.gov.uk/components/skip-link/)
for more information on when to use this component.

```vue
<p class="govuk-body">
  To view the skip link component tab to this example, or click inside this example and press tab.
</p>
<gv-skip-link />
```

## Setting the skip target

By default, the skip link will jump to an element with the ID `content`. 
Use the `href` prop to override this. The skip link will jump here when activated. 

This component does not support [custom link components](/get-started/using-router-link-or-nuxt-link), such as
`router-link` or `nuxt-link`, because the link should always jump to a section on the current page.

```vue
<p class="govuk-body">
  To view the skip link component tab to this example, or click inside this example and press tab.
</p>
<gv-skip-link href="#main"/>
<div id="main">
  <p class="govuk-body">
    The skip link will jump here.
   </p>
</div>
```

## Positioning the skip link

The skip link should be the first component on the page, except if you're using a [cookie banner](cookie-banner). If
you're using a cookie banner, the skip link should come straight after it.

```vue

<script setup lang="ts">
import GvdHeader from './GvdHeader.vue'

function acceptCookies() {
  alert("You've clicked the accept button")
}

function rejectCookies() {
  alert("You've clicked the reject button")
}
</script>

<template>
  <p class="govuk-body">
    To view the skip link component tab to this example, or click inside this example and press tab. The skip link will
    appear after you've tabbed through the cookie banner.
  </p>
  <gv-cookie-banner
    heading="Cookies on [name of service]"
    accept-button-text="Accept analytics cookies"
    reject-button-text="Reject analytics cookies"
    view-cookies-link-text="View cookies"
    view-cookies-link-href="#"
    @acceptClicked="acceptCookies"
    @rejectClicked="rejectCookies"
  >
    <template #cookie-information>
      <p class="govuk-body">We use some essential cookies to make this service work.</p>
      <p class="govuk-body">We’d also like to use analytics cookies so we can understand how you use the service and
        make improvements.</p>
    </template>
    <template #accepted>
      <p class="govuk-body">
        You’ve accepted analytics cookies. You can <a href="#" class="govuk-link">change your cookie settings</a> at any
        time.
      </p>
    </template>
    <template #rejected>
      <p class="govuk-body">
        You’ve rejected analytics cookies. You can <a href="#" class="govuk-link">change your cookie settings</a> at any
        time.
      </p>
    </template>
  </gv-cookie-banner>
  <gv-skip-link />
  <gv-header />
</template>
```

::gvd-options{component="SkipLink"}
::