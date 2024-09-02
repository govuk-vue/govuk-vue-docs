<template>
  <div class="gvd-code-sample">
    <div class="gvd-code-sample--rendered">
      <slot name="rendered">abcd</slot>
    </div>
    <div class="gvd-code-sample--code">
      <slot name="code"></slot>
    </div>
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

.gvd-code-sample {
  border: 1px solid $govuk-border-colour;
  margin-bottom: govuk-spacing(9);

  &--rendered {
    padding: govuk-spacing(6);
  }

  .gvd-code {
    margin-bottom: 0;
  }
}
</style>