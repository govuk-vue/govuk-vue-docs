<template>
  <div class="gvd-whats-new">
    <div class="gvd-width-container">
      <div class="govuk-main-wrapper govuk-main-wrapper--l">
        <div class="govuk-grid-row">
          <div class="govuk-grid-column-two-thirds-from-desktop">
            <h2 id="whats-new" class="govuk-heading-l">What’s new</h2>
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../node_modules/govuk-frontend/dist/govuk/settings/colours-applied';

$app-light-grey: #f8f8f8;

.gvd-whats-new {
  border-bottom: 1px solid $govuk-border-colour;
  background-color: $app-light-grey;
}
</style>