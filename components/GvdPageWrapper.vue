<template>
    <gvd-header/>
    <div class="gvd-phase-banner-wrapper">
      <gv-phase-banner tag="alpha" tag-colour="red" class="gvd-phase-banner">GOV.UK Vue is in alpha, and some documentation is not complete - your <nuxt-link to="/support" class="govuk-link">feedback</nuxt-link> will help to improve it.</gv-phase-banner>
    </div>
    <slot name="content">
      <div class="govuk-width-container gvd-width-container">
        <main class="govuk-main-wrapper" id="main-content" role="main">
          <slot/>
        </main>
      </div>
    </slot>
    <gv-footer copyright="Copyright © Matt Eason" copyright-href="http://github.com/matteason" :include-coat-of-arms="false" container-class="gvd-width-container">
      <template #meta>
        <gv-footer-meta>
          <template #items>
            <gv-footer-meta-item text="GOV.UK Vue on GitHub" href="https://github.com/govuk-vue/govuk-vue"/>
          </template>
        </gv-footer-meta>
      </template>
      <template #licence-logo/>
      <template #content-licence>
        Released under the <a href="https://opensource.org/license/mit/" class="govuk-footer__link">MIT License</a>.
      </template>
    </gv-footer>
</template>

<script setup>
const page = useContent().page.value;
const contentTitle = page ? page.title : ''

useHead({
  titleTemplate: ()=> { return `${contentTitle}${contentTitle ? ' – ' : ''}GOV.UK Vue` }
})
</script>

<style lang="scss">
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-feature-settings: 'cv10' 1; // Enable 'G' with spur in Inter font
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* inter-regular - latin */
@font-face {
  font-display: fallback;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/fonts/inter/Inter-Regular.woff2?v=3.19') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* inter-700 - latin */
@font-face {
  font-display: fallback;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url('/assets/fonts/inter/Inter-Bold.woff2?v=3.19') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

$govuk-font-family: 'Inter', arial, sans-serif;

@import '../node_modules/govuk-frontend/govuk/all';
@import '../node_modules/govuk-frontend/govuk/settings/colours-palette';

.gvd-width-container {
  @include govuk-width-container(1100px);
}

.gvd-phase-banner-wrapper {
  border-bottom: 1px solid $govuk-border-colour;
}

.gvd-phase-banner {
  @include govuk-width-container(1100px);
  border-bottom: none;
}

.gvd-code-inline {
  background: govuk-colour("light-grey");
  color: govuk-colour("red");
  padding: 0 govuk-spacing(1);
  font-family: monospace;
}

$button-shadow-size: $govuk-border-width-form-element;
$gvd-button-inverted-background-colour: govuk-colour("white");
$gvd-button-inverted-foreground-colour: govuk-colour("blue");
$gvd-button-inverted-shadow-colour: govuk-shade($gvd-button-inverted-foreground-colour, 30%);
$gvd-button-inverted-hover-background-colour: govuk-tint($gvd-button-inverted-foreground-colour, 90%);

.gvd-button--inverted,
.gvd-button--inverted:link,
.gvd-button--inverted:visited {
  color: $gvd-button-inverted-foreground-colour;
  background-color: $gvd-button-inverted-background-colour;
  box-shadow: 0 $button-shadow-size 0 $gvd-button-inverted-shadow-colour;
}

.gvd-button--inverted:hover {
  color: $gvd-button-inverted-foreground-colour;
  background-color: $gvd-button-inverted-hover-background-colour;
}

.gvd-button--inverted:focus:not(:hover) {
  color: $govuk-focus-text-colour;
  background-color: $govuk-focus-colour;
}

.gvd-button--inverted:active,
.gvd-button--inverted:focus {
  border-color: $govuk-focus-colour;
  color: $gvd-button-inverted-foreground-colour;
  background-color: $gvd-button-inverted-hover-background-colour;
  box-shadow: inset 0 0 0 2px $govuk-focus-colour;
}

// The header and footer containers only has margin on small screens by default - we have to add some
// otherwise headers and footers in code samples don't have any spacing before the logo
.gvd-code-sample--rendered  {
  .govuk-header__container.govuk-width-container,
  .govuk-cookie-banner__message.govuk-width-container,
  .govuk-footer .govuk-width-container {
    margin-left: 30px;
    margin-right: 30px;
  }
}

</style>