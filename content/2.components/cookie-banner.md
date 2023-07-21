---
layout: component
---

# Cookie banner

Allow users to accept or reject cookies which are not essential to making your service work.

See the [GOV.UK Design System documentation on the cookie banner](https://design-system.service.gov.uk/components/cookie-banner/) for more information on when to use this component.

```vue
<script setup lang="ts">
function acceptCookies() {
  alert("You've clicked the accept button")
}

function rejectCookies() {
  alert("You've clicked the reject button")
}
</script>

<template>
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
      <p class="govuk-body">We’d also like to use analytics cookies so we can understand how you use the service and make improvements.</p>
    </template>
    <template #accepted>
      <p class="govuk-body">
        You’ve accepted analytics cookies. You can <a href="#" class="govuk-link">change your cookie settings</a> at any time.
      </p>
    </template>
    <template #rejected>
      <p class="govuk-body">
        You’ve rejected analytics cookies. You can <a href="#" class="govuk-link">change your cookie settings</a> at any time.
      </p>
    </template>
  </gv-cookie-banner>
</template>
```
## Setting the messages in the banner

You'll need to set the message the user first sees in the cookie banner by using the `cookie-information` prop or slot.

You'll also need to set the text the user sees when they accept or reject cookies using the `accepted` and
`rejected` props or slots.

## Actions
You can either use the built-in accept, reject and view cookies actions, or provide your own.

### Using the accept, reject and view cookies actions

To use the built-in actions, set the `accept-button-text`, `reject-button-text` and `view-cookies-link-text` props.

The `acceptClicked` and `rejectClicked` events will fire when the accept or reject buttons are clicked. 
You will need to add event handlers to `@acceptClicked` to set your cookies and `@rejectClicked` to store the user's
preference.

For the 'View cookies' link, you can either set `view-cookies-link-href` to set the link destination or add an event 
handler to `@viewCookiesClicked` which takes the user to your cookies page. 

### Providing your own actions

The built-in actions should be used in most cases, but you can use the `actions` slot to provide your own if necessary.

::gvd-options{component="CookieBanner"}
::