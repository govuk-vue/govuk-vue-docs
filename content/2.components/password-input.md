---
layout: component
---

# Password input

Help users to create and enter passwords.

See the [GOV.UK Design System documentation on password inputs](https://design-system.service.gov.uk/components/password-input/)
for more information on when to use this component.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
  
const length = computed(() => {
  return `${password.value.length} character${password.value.length > 1 ? 's' : ''}` 
})  
</script>

<template>
  <gv-password-input label="Password" v-model="password">
    <template #hint>
      Must be at least 10 characters
    </template>
  </gv-password-input>
  <gv-inset-text v-if="password" aria-live="polite">
    Your password is {{ length }} long
  </gv-inset-text>
</template>
```

## Changing the autocomplete type

By default, the input will have `autocomplete="current-password"`. For screens where the user is entering a new password, pass
`autocomplete="new-password"` to avoid the browser autocompleting the user's current password.

The GOV.UK Design System [recommends not including a 'confirm password' field](https://design-system.service.gov.uk/components/password-input/#avoid-adding-a-confirm-password-field).

```vue
<gv-password-input autocomplete="new-password" label="New password"/>
```

## Observing the password visibility

You can bind a boolean value with `v-model:password-visible` to keep track of the visibility of the password.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const passwordVisible = ref(null)
</script>

<template>
  <gv-password-input label="Password" v-model:password-visible="passwordVisible" />
  <gv-inset-text aria-live="polite">
    Your password is {{ passwordVisible ? '' : 'not ' }}visible
  </gv-inset-text>
</template>
```

::gvd-options{component="PasswordInput"}
::