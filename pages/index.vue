<template>
  <gvd-page-wrapper>
    <template #content>
      <gvd-masthead/>
      <gvd-whats-new>
        <p class="govuk-body">10 October 2024: We've released GOV.UK Vue v1.0.1, which fixes the display of the Open Government Licence logo in the footer.</p>
        <p class="govuk-body">Read the <a href="https://github.com/govuk-vue/govuk-vue/releases/tag/v1.0.1" class="govuk-link">full release notes</a> to see what's changed.</p>
      </gvd-whats-new>
      <div class="gvd-width-container">
        <div class="govuk-main-wrapper govuk-main-wrapper--l">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
              <h2 class="govuk-heading-l govuk-!-font-weight-bold">Get started</h2>
              <p class="govuk-body">Learn how to install GOV.UK Vue and start using it in your app - whether it's a government service or not.</p>
              <p class="govuk-body govuk-!-margin-bottom-0"><nuxt-link to="/get-started" class="govuk-link govuk-!-font-weight-bold">Start using GOV.UK Vue</nuxt-link></p>
            </div>

            <div class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
              <h2 class="govuk-heading-l govuk-!-font-weight-bold">Components</h2>
              <p class="govuk-body">Use GOV.UK Design System components for forms, navigation, panels, tables and more.</p>
              <p class="govuk-body govuk-!-margin-bottom-0"><nuxt-link to="/components" class="govuk-link govuk-!-font-weight-bold">Browse components</nuxt-link></p>
            </div>

            <div class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
              <h2 class="govuk-heading-l govuk-!-font-weight-bold">Help and support</h2>
              <p class="govuk-body">Find out how to get help using GOV.UK Vue, report issues, give feedback or suggest new features.</p>
              <p class="govuk-body govuk-!-margin-bottom-0"><nuxt-link to="/support" class="govuk-link govuk-!-font-weight-bold">Get help with GOV.UK Vue</nuxt-link></p>
            </div>

            <div class="govuk-grid-column-full">
              <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
            </div>

            <div class="govuk-grid-column-two-thirds govuk-!-mb-r4">
              <h2 class="govuk-heading-l">Goals of this project</h2>
              <p class="govuk-body">
                GOV.UK Vue aims to provide a seamless development experience and full compatibility with GOV.UK Frontend.
              </p>
              <p class="govuk-body">
                It uses unmodified <a href="https://frontend.design-system.service.gov.uk/" class="govuk-link">GOV.UK Frontend</a> styles to provide consistency with other GOV.UK services,
                combined with flexible, robust Vue components.
              </p>

              <p class="govuk-body">
                All GOV.UK Frontend JavaScript is reimplemented as idiomatic Vue code, including full support for all accessibility features.
              </p>
            </div>

            <div class="govuk-grid-column-full">
              <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl">
            </div>

            <div class="govuk-grid-column-two-thirds govuk-!-mb-r4">
              <h2 class="govuk-heading-l">About GOV.UK Vue</h2>
              <p class="govuk-body">
                GOV.UK Vue is a community resource of the GOV.UK Design System. The Design System team is not
                responsible for it and cannot support you with using it.
                Contact <a href="https://github.com/matteason" class="govuk-link">Matt Eason</a> directly if you need help or you want to request a feature.
              </p>
              <p class="govuk-body">
                If you find this project useful, I'd really appreciate your support through
                <a href="https://ko-fi.com/matteason" class="govuk-link">Ko-fi</a> or
                <a href="https://github.com/sponsors/govuk-vue" class="govuk-link">GitHub Sponsors</a>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </template>
  </gvd-page-wrapper>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
definePageMeta({
  documentDriven: {
    page: false,
    surround: false
  }
})
</script>