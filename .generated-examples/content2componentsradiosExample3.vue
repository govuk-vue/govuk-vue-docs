<template>
  <gv-radios legend="How do you want to sign in?" :legend-is-page-heading="true" legend-class="govuk-fieldset__legend--l">
  <template #hint>
    You’ll need an account to prove your identity and complete your Self Assessment.
  </template>
  <gv-radio value="gateway">
    Sign in with Government Gateway
    <template #hint>
      You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.
    </template>
  </gv-radio>
  <gv-radio value="verify">
    Sign in with GOV.UK Verify
    <template #hint>
      You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, 
      Experian, Post Office, Royal Mail or SecureIdentity.
    </template>
  </gv-radio>
</gv-radios>
</template>