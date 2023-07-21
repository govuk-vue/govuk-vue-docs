---
layout: component
---

# Phase banner

Use the phase banner component to show users your service is still being worked on.

See the [GOV.UK Design System documentation on the phase banner](https://design-system.service.gov.uk/components/phase-banner/)
for more information on when to use this component.

```vue
<gv-phase-banner tag="Alpha">      
  This is a new service – your <a class="govuk-link" href="https://github.com/govuk-vue/govuk-vue/issues">feedback</a> will help us to improve it.
</gv-phase-banner>
```

## Using the phase banner without a tag

You can omit the tag if it's not required for your service but you still want to provide a feedback link.

```vue
<gv-phase-banner>      
  You can <a class="govuk-link" href="https://github.com/govuk-vue/govuk-vue/issues">send us feedback</a> to help us improve this service.
</gv-phase-banner>
```

::gvd-options{component="PhaseBanner"}
::