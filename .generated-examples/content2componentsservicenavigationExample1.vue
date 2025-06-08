<template>
  <gv-header :rebrand="true"/>
<gv-service-navigation service-name="Service name">
  <gv-service-navigation-item href="/example-page">Navigation item 1</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page" :current="true">Navigation item 2</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page">Navigation item 3</gv-service-navigation-item>
</gv-service-navigation>
<gv-phase-banner tag="Alpha">
  This is a new service – your <a class="govuk-link" href="https://github.com/govuk-vue/govuk-vue/issues">feedback</a> will help us to improve it.
</gv-phase-banner>
</template>