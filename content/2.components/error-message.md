---
layout: component
---

# Error message

Follow the [validation pattern](https://design-system.service.gov.uk/patterns/validation/) and show an error message 
when there is a validation error. In the error message explain what went wrong and how to fix it.

See the [GOV.UK Design System documentation on error messages](https://design-system.service.gov.uk/components/error-message/) 
for more information on when to use this component.

```vue-html
<gv-error-message>Enter your date of birth</gv-error-message>
```

If you're using components provided by GOV.UK Vue, you won't need to use the error message component directly. Use
the `error-message` prop or slot on the relevant component instead.

You might find this component useful if you're building your own components and you need to show an error message. 
You'll need to add a `<div class="govuk-form-group  govuk-form-group--error">` around your component too to show the
red border on the left.

::gvd-options{component="ErrorMessage"}
::
