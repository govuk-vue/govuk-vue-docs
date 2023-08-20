---
layout: component
---

# Button

Use the button component to help users carry out an action like starting an application or saving their information.

See the [GOV.UK Design System documentation on buttons](https://design-system.service.gov.uk/components/button/) for more information on when to use this component.

```vue
<gv-button href="#">
  Save and continue
</gv-button>
```

## Using `router-link` or `nuxt-link`

You can set up buttons to use `router-link` or `nuxt-link` if needed. See
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details.

```vue
<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-button :component="NuxtLink" to="/example-page">
    Save and continue
  </gv-button>
</template>
```

## Using a click event handler

You can attach a click event handler instead of setting `href`.

```vue
<script setup lang="ts">
function handleClick() {
  alert('You clicked the button')
}
</script>

<template>
  <gv-button @click="handleClick">
    Save and continue
  </gv-button>
</template>
```

## Start buttons

Set `:is-start-button="true"` to show a start button.

```vue
<gv-button :is-start-button="true">
  Start now
</gv-button>
```

## Secondary and warning buttons

Use the `variant` prop to change between primary, secondary and warning buttons.

```vue
<gv-button variant="secondary">
  Find address
</gv-button>
```

```vue
<gv-button variant="warning">
  Delete account
</gv-button>
```

## Grouping buttons

Wrap buttons in a `gv-button-group` to display them side-by-side on larger screens or stacked on smaller screens.

```vue
<gv-button-group>
  <gv-button>
    Save and continue
  </gv-button>
  <gv-button variant="secondary">
    Save as draft
  </gv-button>
</gv-button-group>
```

::gvd-options{component="Button" :showName=true}
::

::gvd-options{component="ButtonGroup" :showName=true}
::