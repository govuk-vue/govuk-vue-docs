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