---
layout: component
---

# Fieldset

Use the fieldset component to group related form inputs.

See the [GOV.UK Design System documentation on fieldsets](https://design-system.service.gov.uk/components/fieldset/)
for more information on when to use this component.

```vue-html
<gv-fieldset 
  legend="What is your address?" 
  :legend-is-page-heading="true" 
  legend-class="govuk-fieldset__legend--l"
>
  <gv-input label="Address line 1" autocomplete="address-line1"/>
  <gv-input label="Address line 2 (optional)" autocomplete="address-line2"/>
  <gv-input label="Town" autocomplete="address-level2" class="govuk-!-width-two-thirds"/>
  <gv-input label="Postcode" autocomplete="postal-code" class="govuk-input--width-10"/>
</gv-fieldset>
```

If you’re using the components for [radios](/components/radios), [checkboxes](/components/checkboxes) or 
[date input](/components/date-input), the fieldset will already be included.

::gvd-options{component="Fieldset"}
::
