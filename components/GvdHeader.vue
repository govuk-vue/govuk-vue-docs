<script setup lang="ts">
import { useIsDesktop } from '~/composables/useIsDesktop'

const isDesktop = useIsDesktop()
const showMobileNav = ref(false)

function toggleMobileNav() {
  showMobileNav.value = !showMobileNav.value
}

onBeforeRouteLeave((to, from, next) => {
  showMobileNav.value = false;
  next()
})
</script>

<template>
  <header class="govuk-header gvd-header" role="banner">
    <div class="govuk-header__container govuk-width-container gvd-header__container gvd-width-container">
      <div class="govuk-header__logo gvd-header__logo">
        <a href="/" class="govuk-header__link govuk-header__link--homepage">
          <span class="govuk-header__logotype">
            <svg
              aria-hidden="true"
              focusable="false"
              class="govuk-header__logotype-crown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47 30"
              height="30"
              width="47"
            >
<polygon points="46.79769 7.68277 32.97322 11.4032 35.04362 14.9896 41.13804 13.34242 37.98907 25.09613 23.5 0 9.01093 25.09613 5.86196 13.34242 11.95638 14.9896 14.02678 11.4032 .20231 7.68277 6.18155 29.99698 6.1796 30 13.10712 30 23.5 12.00043 33.89288 30 40.8204 30 40.81845 29.99698 46.79769 7.68277" fill="currentColor"/>
            </svg>
            <span class="govuk-header__logotype-text"> GOV.UK Vue </span>
          </span>
        </a>
      </div>
      <button v-if="!isDesktop" class="govuk-header__menu-button" :class="{ 'govuk-header__menu-button--open': showMobileNav }" aria-controls="gvd-navigation" :aria-expanded="showMobileNav" @click="toggleMobileNav">
        Menu
      </button>
    </div>
  </header>
  <gvd-navigation :show-mobile-nav="showMobileNav"/>
</template>

<style lang="scss" scoped>
// Move the blue border from the container to the header so that it spans
// the full width of the page
.gvd-header {
  border-bottom: 10px solid #42b883;
}

.gvd-header__container {
  margin-bottom: 0;
  border-bottom: 0;
}

// Override the default 33% width on the logo in GOV.UK Frontend (prevents
// unnecessary wrapping of "GOV.UK Design System" on smaller tablet / desktop
// viewports)
.gvd-header__logo {
  width: auto;
}

</style>