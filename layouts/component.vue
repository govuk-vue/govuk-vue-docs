<template>
  <gvd-page-wrapper>
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-quarter" v-if="isDesktop">
        <GvdSubNav>
          <ContentNavigation v-slot="{ navigation }" :query="componentsQuery">
            <GvdSubNavSection>
              <GvdSubNavItem v-for="link in navigation[0].children" :key="link._path" :to="link._path">
                {{ link.title }}
              </GvdSubNavItem>
            </GvdSubNavSection>
          </ContentNavigation>
        </GvdSubNav>
      </div>
      <div class="govuk-grid-column-three-quarters">
        <span class="govuk-caption-xl" v-if="page.title != 'Components'">Components</span>
        <ContentDoc/>

        <ContentNavigation v-slot="{ navigation }" :query="componentsQuery" v-if="page.title === 'Components'">
          <nav>
            <ul class="govuk-list">
              <li class="govuk-!-margin-bottom-2" v-for="link in navigation[0].children" :key="link._path">
                <NuxtLink :to="link._path" class="govuk-link">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </ContentNavigation>
      </div>
    </div>

  </gvd-page-wrapper>
</template>

<script setup lang="ts">
const { page } = useContent()
import { useIsDesktop } from '~/composables/useIsDesktop'

const isDesktop = useIsDesktop()
const componentsQuery = queryContent('components').where({ title: { $ne: 'Components' } })
</script>