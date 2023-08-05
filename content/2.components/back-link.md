---
layout: component
---

# Back link

Use the back link component to help users go back to the previous page in a multi-page transaction.

See the [GOV.UK Design System documentation on back links](https://design-system.service.gov.uk/components/back-link/) for more information on when to use this component.

```vue-html
<gv-back-link href="https://example.com">Back</gv-back-link>
```

## Using `router-link` or `nuxt-link`

You can set up this component to use `router-link` or `nuxt-link` if needed. See 
[Using router-link or nuxt-link](/get-started/using-router-link-or-nuxt-link) for more details.

```vue
<script setup lang="ts">
import { NuxtLink } from '#components';
</script>

<template>
  <gv-back-link :component="NuxtLink" to="/example-page" />
</template>
```

## Using a click event handler

You can attach a click event handler instead of setting `href`. Use `@click.prevent` to stop the browser from jumping to the top of the page. 

```vue
<script setup lang="ts">
function handleClick() {
  alert('You clicked the back link')
}
</script>

<template>
  <gv-back-link @click.prevent="handleClick">Back</gv-back-link>
</template>
```

## Setting the link text

You can set the link text via the default slot or using the `:text` prop.

```vue
<script setup lang="ts">
import { ref } from 'vue'

let previousPageName = ref('dashboard')

function goBack() {
  previousPageName.value = (previousPageName.value === 'dashboard') ? 'case' : 'dashboard'
}
</script>

<template>
  <gv-back-link @click.prevent="goBack" :text="`Go back to ${previousPageName}`" />
</template>
```

::gvd-options{component="BackLink"}


