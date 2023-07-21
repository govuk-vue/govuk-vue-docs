<template>
  <gvd-page-wrapper>
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-quarter">
        <GvdSubNav>
          <ContentNavigation v-slot="{ navigation }" :query="getStartedQuery">
            <GvdSubNavSection>
              <GvdSubNavItem v-for="link in navigation[0].children" :key="link._path" :to="link._path">
                {{ link.title }}
              </GvdSubNavItem>
            </GvdSubNavSection>
          </ContentNavigation>
        </GvdSubNav>
      </div>
      <div class="govuk-grid-column-three-quarters">
        <span class="govuk-caption-xl" v-if="page.title != 'Get started'">Get started</span>
        <ContentDoc/>
      </div>
    </div>
  </gvd-page-wrapper>
</template>

<script setup lang="ts">
const { page } = useContent()

const getStartedQuery = queryContent('get-started').where({ title: { $ne: 'Get started' } })
</script>