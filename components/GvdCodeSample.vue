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
$govuk-is-ie8: false;

@import './node_modules/govuk-frontend/govuk/tools/ie8';
@import './node_modules/govuk-frontend/govuk/settings/media-queries';
@import './node_modules/govuk-frontend/govuk/helpers/media-queries';
@import './node_modules/govuk-frontend/govuk/settings/colours-applied';
@import './node_modules/govuk-frontend/govuk/settings/spacing';
@import './node_modules/govuk-frontend/govuk/helpers/spacing';
@import './node_modules/govuk-frontend/govuk/settings/typography-font';
@import './node_modules/govuk-frontend/govuk/settings/typography-font-families';
@import './node_modules/govuk-frontend/govuk/settings/typography-responsive';
@import './node_modules/govuk-frontend/govuk/helpers/font-faces';
@import './node_modules/govuk-frontend/govuk/helpers/typography';

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