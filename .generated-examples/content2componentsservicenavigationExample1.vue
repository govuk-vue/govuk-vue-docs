<template>
  <gv-header/>
<gv-service-navigation service-name="Service name">
  <gv-service-navigation-item href="/example-page">Navigation item 1</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page" :current="true">Navigation item 2</gv-service-navigation-item>
  <gv-service-navigation-item href="/example-page">Navigation item 3</gv-service-navigation-item>
</gv-service-navigation>
</template>