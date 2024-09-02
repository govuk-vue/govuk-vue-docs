<template>
  <div class="gvd-masthead">
    <div class="gvd-width-container">
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-two-thirds-from-desktop">
          <h1 class="govuk-heading-xl gvd-masthead__title">
            Build Vue apps with GOV.UK&nbsp;Design System components
          </h1>
          <p class="gvd-masthead__description">
            GOV.UK Vue provides Vue implementations of every component in the GOV.UK Design System.
          </p>

          <gv-button
            :is-start-button="true"
            href="/get-started"
            class="gvd-button--inverted govuk-!-margin-top-6 govuk-!-margin-bottom-0">
            Get started
          </gv-button>
        </div>

        <div class="govuk-grid-column-one-third-from-desktop">
          <nuxt-link to="/get-started" aria-hidden="true" tabindex="-1">
            <img class="gvd-masthead__image" src="/assets/images/homepage-illustration.svg" alt="" role="presentation">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.gvd-masthead {
  @include govuk-responsive-padding(6, "top");
  @include govuk-responsive-padding(6, "bottom");
  border-bottom: 1px solid govuk-colour("blue");
  color: govuk-colour("white");
  background-color: govuk-colour("blue");
}

.gvd-masthead__title {
  color: govuk-colour("white");
  @include govuk-responsive-margin(6, "bottom");
}

.gvd-masthead__description {
  @include govuk-font(24);
  margin-bottom: 0;
}

.gvd-masthead__image {
  display: none;
  @include govuk-media-query($from: desktop) {
    display: block;
    width: 100%;
    margin-top: govuk-spacing(3);
  }
}

</style>