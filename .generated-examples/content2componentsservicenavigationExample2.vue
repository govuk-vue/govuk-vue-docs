<script setup lang="ts">
  import { NuxtLink } from '#components';
</script>

<gv-service-navigation service-name="Service name" se service-url="/example-page">
  <gv-service-navigation-item :component="NuxtLink" to="/example-page">Navigation item 1</gv-service-navigation-item>
  <gv-service-navigation-item :component="NuxtLink" to="/example-page" :current="true">Navigation item 2</gv-service-navigation-item>
  <gv-service-navigation-item :component="NuxtLink" to="/example-page">Navigation item 3</gv-service-navigation-item>
</gv-service-navigation>