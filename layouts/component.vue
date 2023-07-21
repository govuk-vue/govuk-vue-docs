<template>
  <gvd-page-wrapper>
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-quarter">
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
      </div>
    </div>

  </gvd-page-wrapper>
</template>

<script setup lang="ts">
const { page } = useContent()

const componentsQuery = queryContent('components').where({ title: { $ne: 'Components' } })
</script>