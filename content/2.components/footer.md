---
layout: component
---

# Footer

The footer provides copyright, licensing and other information about your service.

See the [GOV.UK Design System documentation on the footer](https://design-system.service.gov.uk/components/footer/)
for more information on when to use this component.

```vue
<gv-footer />
```

## Meta links

To add meta links to the footer, use the `meta` slot and pass one or more `GvFooterMeta`s, each with one or more 
`GvFooterMetaItem`s. If you pass multiple `GvFooterMeta`s, they will be shown on top of each other.

Use meta links to add links to your:

- privacy notice
- accessibility statement
- cookies page
- terms and conditions
- other language options

You can [use router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for your meta links if needed.

```vue
<gv-footer>
  <template #meta>
    <gv-footer-meta>
      <gv-footer-meta-item href="#">Item 1</gv-footer-meta-item>
      <gv-footer-meta-item href="#">Item 2</gv-footer-meta-item>
      <gv-footer-meta-item href="#">Item 3</gv-footer-meta-item>
    </gv-footer-meta>
  </template>
</gv-footer>
```

## Secondary navigation

To add secondary navigation links footer, use the `navigation` slot and pass one or more `GvFooterNavigation`s, each 
with one or more `GvFooterNavigationItem`s.

Each group of navigation links can be split into multiple columns by passing a number to the `columns` prop, and
groups can be shown side-by-side on larger screens by using the `width` prop. You can pass any GOV.UK Design System 
grid width here, for example, `one-third`; `two-thirds`; `one-half`.

You can [use router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for your navigation links if needed.

```vue
<gv-footer>
  <template #navigation>
    <gv-footer-navigation 
      title="Two column list" 
      width="two-thirds" 
      :columns="2"
    >
      <gv-footer-navigation-item v-for="index in 6" :key="index" href="#">
        Navigation item {{ index }}
      </gv-footer-navigation-item>
    </gv-footer-navigation>
    <gv-footer-navigation 
      title="Single column list" 
      width="one-third"
    >
      <gv-footer-navigation-item v-for="index in 3" :key="index" href="#">
        Navigation item {{ index }}
      </gv-footer-navigation-item>
    </gv-footer-navigation>
  </template>
</gv-footer>
```

## Licence and copyright information.

By default, the footer will show that your content is Crown Copyright and licenced under the Open Government Licence.
If either of these do not apply to your service, you can override them with the `content-licence` and `copyright` slots 
and props. For example, your content may use the MIT licence but still be under Crown Copyright.

```vue
<gv-footer>
  <template #content-licence>
    Released under the <a href="https://opensource.org/license/mit/" class="govuk-footer__link">MIT License</a>.
  </template>
</gv-footer>
```

You can exclude the content licence or copyright by passing empty content to the slot.

```vue
<gv-footer>
  <template #content-licence />
  <template #copyright>
    Copyright © Organisation Name
  </template>
</gv-footer>
```

```vue
<gv-footer>
  <template #content-licence>
    All content freely available under <a href="https://creativecommons.org/publicdomain/zero/1.0/" class="govuk-footer__link">CC0</a>.
  </template>
  <template #copyright/>
</gv-footer>
```

::gvd-options{component="Footer" :showName=true}
::

::gvd-options{component="FooterMeta" :showName=true}
::

::gvd-options{component="FooterMetaItem" :showName=true}
::

::gvd-options{component="FooterNavigation" :showName=true}
::

::gvd-options{component="FooterNavigationItem" :showName=true}
::