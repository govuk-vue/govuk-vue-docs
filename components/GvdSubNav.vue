<template>
  <nav class="gvd-subnav" aria-labelledby="gvd-subnav-heading">
    <h2 class="govuk-visually-hidden" id="gvd-subnav-heading">Pages in this section</h2>
    <slot/>
  </nav>
</template>

<style lang="scss">
@import '../node_modules/govuk-frontend/dist/govuk/settings/colours-applied';
@import '../node_modules/govuk-frontend/dist/govuk/settings/media-queries';
@import '../node_modules/govuk-frontend/dist/govuk/helpers/media-queries';
@import '../node_modules/govuk-frontend/dist/govuk/settings/typography-font';
@import '../node_modules/govuk-frontend/dist/govuk/settings/typography-responsive';
@import '../node_modules/govuk-frontend/dist/govuk/helpers/font-faces';
@import '../node_modules/govuk-frontend/dist/govuk/helpers/typography';
@import '../node_modules/govuk-frontend/dist/govuk/settings/links';
@import '../node_modules/govuk-frontend/dist/govuk/helpers/links';
@import '../node_modules/govuk-frontend/dist/govuk/settings/measurements';
@import '../node_modules/govuk-frontend/dist/govuk/helpers/focused';
@import '../node_modules/govuk-frontend/dist/govuk/settings/spacing';
@import '../node_modules/govuk-frontend/dist/govuk/helpers/spacing';

.gvd-subnav {
  // Since the back to top link is outside the flow of the document we need to create a space for it.
  // This number is magic and was determined by manually judging the visual spacing.
  margin-bottom: 100px;
  padding: 0 govuk-spacing(3) 0 0;
  @include govuk-font(16);
}

.gvd-subnav__section {
  margin: 0 0 govuk-spacing(4);
  padding: 0;
  list-style-type: none;
}

.gvd-subnav__link {
  padding: 2px 0;
}

.gvd-subnav__section-item {
  margin-bottom: govuk-spacing(1);
  padding-top: govuk-spacing(1);
  padding-bottom: govuk-spacing(1);
}

.gvd-subnav__section-item--current {
  $_current-indicator-width: 4px;
  margin-left: -(govuk-spacing(2) + $_current-indicator-width);
  padding-left: govuk-spacing(2);
  border-left: $_current-indicator-width solid govuk-colour("blue");
  background-color: govuk-colour("white");
}

.gvd-subnav__section-item--current .gvd-subnav__link {
  font-weight: bold;
}

.gvd-subnav__section--nested {
  margin-top: govuk-spacing(2);
  margin-bottom: 0;
  padding-left: govuk-spacing(4);
}

.gvd-subnav__section--nested .gvd-subnav__section-item:before {
  content: "—";
  margin-left: -(govuk-spacing(4));
  color: govuk-colour("dark-grey");
}

.gvd-subnav__section--nested .gvd-subnav__link {
  padding-left: 0;
  font-weight: normal;
}

.gvd-subnav__theme {
  margin: 0;
  padding: govuk-spacing(2) govuk-spacing(3) govuk-spacing(2) 0;
  color: govuk-colour("dark-grey");
  @include govuk-font(19);
}

</style>