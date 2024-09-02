<script setup lang="ts">
import { useIsDesktop } from '~/composables/useIsDesktop'

const props = defineProps({
  showMobileNav: Boolean
})

const currentPath = useRoute().path
const isDesktop = useIsDesktop()

const expandedSections = ref(new Array<string>)

function pathToSubnavId(path: string) {
  return `subnav-${path.replaceAll('/','')}`;
}

function toggleSection(path: string) {
  if(expandedSections.value.includes(path)) {
    expandedSections.value = expandedSections.value.filter(s => s !== path)
  } else {
    expandedSections.value.push(path)
  }
}
</script>

<template>
  <nav id="gvd-navigation" class="gvd-navigation govuk-clearfix" role="navigation" aria-labelledby="gvd-navigation-heading" :hidden="!showMobileNav && !isDesktop">
    <h1 class="govuk-visually-hidden" id="gvd-navigation-heading">Menu</h1>
    <ContentNavigation v-slot="{ navigation }">
      <ul class="gvd-navigation__list gvd-width-container">
        <li v-for="link of navigation.filter(n => n.title != 'Example page')" :key="link._path" class="gvd-navigation__list-item" :class="{'gvd-navigation__list-item--current': currentPath.startsWith(link._path)}">
          <NuxtLink v-if="isDesktop" :to="link._path" class="govuk-link govuk-link--no-visited-state govuk-link--no-underline app-navigation__link js-app-navigation__link">
            {{ link.title }}
          </NuxtLink>
          <button v-if="!isDesktop" class="gvd-navigation__button" :aria-expanded="expandedSections.includes(link._path)" :aria-controls="pathToSubnavId(link._path)" @click="toggleSection(link._path)">
            {{ link.title }}
          </button>
          <ul v-if="!isDesktop" class="gvd-navigation__subnav" :aria-label="link.title" :id="pathToSubnavId(link._path)" :hidden="!expandedSections.includes(link._path)">
            <li v-for="child of link.children" class="gvd-navigation__subnav-item">
              <NuxtLink :to="child._path" class="govuk-link govuk-link--no-visited-state govuk-link--no-underline">
                {{ child.title }} <template v-if="child._path === link._path">overview</template>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<style lang="scss" scoped>
@import '../node_modules/govuk-frontend/dist/govuk/settings/colours-applied';
@import '../node_modules/govuk-frontend/dist/govuk/settings/media-queries';
@import '../node_modules/govuk-frontend/dist/govuk/helpers/media-queries';
@import './node_modules/govuk-frontend/dist/govuk/settings/typography-font';
@import './node_modules/govuk-frontend/dist/govuk/settings/typography-responsive';
@import './node_modules/govuk-frontend/dist/govuk/helpers/font-faces';
@import './node_modules/govuk-frontend/dist/govuk/helpers/typography';
@import './node_modules/govuk-frontend/dist/govuk/settings/links';
@import './node_modules/govuk-frontend/dist/govuk/helpers/links';
@import './node_modules/govuk-frontend/dist/govuk/settings/measurements';
@import './node_modules/govuk-frontend/dist/govuk/helpers/focused';
@import './node_modules/govuk-frontend/dist/govuk/settings/spacing';
@import './node_modules/govuk-frontend/dist/govuk/helpers/spacing';

$app-light-grey: #f8f8f8;

.gvd-navigation {
  border-bottom: 1px solid $govuk-border-colour;
  background-color: $app-light-grey;

  &[hidden] {
    display: none;
  }
}

.gvd-navigation__list {
  padding: 0;
  list-style: none;

  @include govuk-media-query($from: tablet) {
    position: relative;
    left: govuk-spacing(-3);
  }
}

.gvd-navigation__list-item {
  position: relative;

  @include govuk-media-query($from: tablet) {
    $navigation-height: 50px;

    @include govuk-font(19, $weight: bold, $line-height: $navigation-height);
    box-sizing: border-box;
    height: $navigation-height;
    height: govuk-px-to-rem($navigation-height);
    padding: 0 govuk-spacing(3);
    float: left;
  }
}

.gvd-navigation__list-item--current {
  @include govuk-media-query($from: tablet) {
    border-bottom: 4px solid govuk-colour("blue");
  }
}

.gvd-navigation__link,
.gvd-navigation__button {
  margin: govuk-spacing(3) 0;
  padding: 0;
  @include govuk-typography-weight-bold; // Override .govuk-link weight
  font-size: 19px; // We do not have a font mixin that produces 19px on mobile
  font-size: govuk-px-to-rem(19px);

  // Expand the touch area of the link to the full menu width
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.gvd-navigation__link:not([hidden]) {
  display: inline-block;

  @include govuk-media-query($from: tablet) {
    display: inline;
  }
}

.gvd-navigation__button {
  @include govuk-link-common;
  @include govuk-link-style-no-underline;
  @include govuk-link-style-no-visited-state;
  border: 0;
  color: $govuk-link-colour;
  background-color: transparent;
}

.gvd-navigation__subnav {
  margin: 0 govuk-spacing(-3);
  padding: govuk-spacing(2) 0;
  background-color: govuk-colour("white");
  list-style: none;
}

.gvd-navigation__subnav--active {
  display: block;
}

.gvd-navigation__subnav,
.gvd-navigation__subnav--active {
  @include govuk-media-query($from: tablet) {
    display: none;
  }
}

.gvd-navigation__subnav-item {
  display: block;
  position: relative;
  padding: govuk-spacing(3);
}

.gvd-navigation__subnav-item--current {
  $_current-indicator-width: 4px;
  padding-left: govuk-spacing(4) - $_current-indicator-width;
  border-left: $_current-indicator-width solid govuk-colour("blue");
}

.gvd-navigation__theme {
  @include govuk-typography-common;
  position: relative; // this is to get around the artificial click area generated by the :after of the parent button
  margin: 0;
  padding: govuk-spacing(4) govuk-spacing(3) govuk-spacing(1);
  color: govuk-colour("dark-grey");
  // Font is defined as a hard 19px so
  // it does not re-size on mobile viewport
  font-size: 19px;
  font-size: govuk-px-to-rem(19px);
  font-weight: normal;
}

// overwrite govuk-header__menu-button's position and it displaying on tablet
.gvd-navigation__menu-button {
  top: auto;
  right: govuk-spacing(1);
  bottom: govuk-spacing(5);
}
</style>