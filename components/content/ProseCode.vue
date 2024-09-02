<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  }
})
</script>

<template>
  <div class="gvd-code">
    <slot />
  </div>
</template>

<style lang="scss">
@import './node_modules/govuk-frontend/dist/govuk/settings/media-queries';
@import './node_modules/govuk-frontend/dist/govuk/helpers/media-queries';
@import './node_modules/govuk-frontend/dist/govuk/settings/colours-applied';
@import './node_modules/govuk-frontend/dist/govuk/settings/spacing';
@import './node_modules/govuk-frontend/dist/govuk/helpers/spacing';
@import './node_modules/govuk-frontend/dist/govuk/settings/typography-font';
@import './node_modules/govuk-frontend/dist/govuk/settings/typography-responsive';
@import './node_modules/govuk-frontend/dist/govuk/helpers/font-faces';
@import './node_modules/govuk-frontend/dist/govuk/helpers/typography';

.gvd-code {
  color: white;
  font-family: monospace;
  @include govuk-typography-responsive(19);
  padding: govuk-spacing(6);
  background: govuk-colour("black");
  overflow-x: auto;
  margin-bottom: govuk-spacing(6);
}
</style>