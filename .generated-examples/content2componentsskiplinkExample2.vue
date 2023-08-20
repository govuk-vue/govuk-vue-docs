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