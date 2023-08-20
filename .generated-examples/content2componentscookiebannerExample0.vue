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