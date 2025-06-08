<template>
  <gv-header :rebrand="true">
    <template #logo>
      <div class="govuk-header__logo app-header__logo">
        <a href="/" class="govuk-header__link govuk-header__link--homepage">
          <svg
            focusable="false"
            role="img"
            class="govuk-header__logotype"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 30"
            height="30"
            width="47"
          >
            <polygon points="46.79769 7.68277 32.97322 11.4032 35.04362 14.9896 41.13804 13.34242 37.98907 25.09613 23.5 0 9.01093 25.09613 5.86196 13.34242 11.95638 14.9896 14.02678 11.4032 .20231 7.68277 6.18155 29.99698 6.1796 30 13.10712 30 23.5 12.00043 33.89288 30 40.8204 30 40.81845 29.99698 46.79769 7.68277" fill="currentColor"/>
          </svg>
          <span class="app-header__logotype-text"> GOV.UK Vue </span>
        </a>
      </div>
    </template>
  </gv-header>
</template>

<style lang="scss">
.app-header {
  &__logo {
    width: 100%;
  }
  
  &__logotype-text {
    font-weight: 700;
  }
}
</style>