---
layout: component
---

# File upload

Help users select and upload a file.

See the [GOV.UK Design System documentation on file uploads](https://design-system.service.gov.uk/components/file-upload/)
for more information on when to use this component.

```vue-html
<gv-file-upload label="Upload a file"/>
```

## Using `v-model` with file upload

If you bind a ref with `v-model`, that ref will be updated to contain a 
[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) of the selected files whenever the user changes
their selection.

You can then use a [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) to read the file metadata
and contents - for example, if you want to upload the file immediately via 
[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) or show a preview of the file.

Note that you can't update the model to change the list of files selected. However, you can set the model to null to deselect all files.

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'

const files = ref(null)
const fileDataUrl = ref('')

watch(files, () => {
  if (files.value && files.value.length > 0) {
    const file = files.value[0]
    let reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      fileDataUrl.value = reader.result
    }
  } else {
    fileDataUrl.value = null;
  }
})

function resetFileInput() {
  files.value = null;
}
</script>
<template>
  <gv-file-upload
  label="Upload an image"
  hint="For example, a .jpg or .png file"
  v-model="files"
  accept="image/png, image/jpeg"
  />
  <gv-inset-text aria-live="polite">
    <template v-if="fileDataUrl">
      <p class="govuk-body">Your image:</p>
      <p class="govuk-body">
        <img :src="fileDataUrl" style="max-width: 100%" alt="The image you uploaded"/>
      </p>
      <gv-button @click="resetFileInput">Reset file input</gv-button>
    </template>
    <template v-else>
      Your selected image will appear here
    </template>
  </gv-inset-text>
</template>
```

::gvd-options{component="FileUpload"}
::