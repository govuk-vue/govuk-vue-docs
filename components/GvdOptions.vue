<script setup lang="ts">
const props = defineProps({
  component: String,
  showName: {
    type: Boolean,
    default: false
  },
  showProps: {
    type: Boolean,
    default: true
  },
  showSlots: {
    type: Boolean,
    default: true
  }
})

let componentDetails = await import(`../.docs/Gv${props.component}.json`)

const computedHeadingElement = computed(() => {
  if(props.showName) {
    return 'h3'
  } else {
    return 'h2'
  }
})

const computedHeadingClass = computed(() => {
  if(props.showName) {
    return 'govuk-heading-m'
  } else {
    return 'govuk-heading-l'
  }
})

function convertMarkdown(str: String) {
  if(!str) {
    return;
  }

  let output = str.replace(/`(?<code>.+?)`/g, '<code class="gvd-code-inline">$<code></code>')
  output = output.replace(/\[(?<linkText>.+)\]\((?<url>.+)\)/ig, '<a href="$<url>" class="govuk-link">$<linkText></a>')

  return output
}
</script>

<template>
  <h2 v-if="showName" class="govuk-heading-l">Gv{{component}}</h2>
  <slot/>
  <template v-if="componentDetails.props.length > 0 && showProps">
    <component :is="computedHeadingElement" :class="computedHeadingClass">Props</component>
    <gv-table>
      <gv-table-head>
        <gv-table-row>
          <gv-table-header>Name</gv-table-header>
          <gv-table-header>Type</gv-table-header>
          <gv-table-header>Description</gv-table-header>
        </gv-table-row>
      </gv-table-head>
      <gv-table-body>
        <gv-table-row v-for="prop in componentDetails.props" :key="prop.name">
          <gv-table-cell>
            {{prop.name}}
            <gv-tag colour="blue" v-if="prop.required">required</gv-tag>
          </gv-table-cell>
          <gv-table-cell>{{prop.type.name}}</gv-table-cell>
          <gv-table-cell>
            <div v-html="convertMarkdown(prop.description)"/>
            <template v-if="(prop.defaultValue && !prop.defaultValue.func && prop.defaultValue.value !== `''`) || prop.values">
              <template v-if="prop.description"><br/></template>
              <template v-if="prop.values">
                Allowed values:
                <template v-for="(value, i) in prop.values">
                  <code class="gvd-code-inline">{{value}}</code>
                  <template v-if="i < prop.values.length-1">, </template><template v-else>.</template>
                </template>
              </template>
              <template v-if="prop.defaultValue">
                Defaults to <code class="gvd-code-inline">{{prop.defaultValue.value}}</code>.
              </template>
            </template>
          </gv-table-cell>
        </gv-table-row>
      </gv-table-body>
    </gv-table>
  </template>

  <template v-if="componentDetails.slots.length > 0 && showSlots">
    <component :is="computedHeadingElement" :class="computedHeadingClass">Slots</component>
    <gv-table>
      <gv-table-head>
        <gv-table-row>
          <gv-table-header>Name</gv-table-header>
          <gv-table-header>Description</gv-table-header>
        </gv-table-row>
      </gv-table-head>
      <gv-table-body>
        <gv-table-row v-for="slot in componentDetails.slots" :key="slot.name">
          <gv-table-cell>{{slot.name}}</gv-table-cell>
          <gv-table-cell>
            <div v-html="convertMarkdown(slot.description)"/>
          </gv-table-cell>
        </gv-table-row>
      </gv-table-body>
    </gv-table>
  </template>
</template>