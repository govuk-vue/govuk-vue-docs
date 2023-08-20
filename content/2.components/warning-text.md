---
layout: component
---

# Warning text

Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.

See the [GOV.UK Design System documentation on warning text](https://design-system.service.gov.uk/components/warning-text/) for more information on when to use this component.

```vue
<gv-warning-text>
  You can be fined up to £5,000 if you do not register
</gv-warning-text>
```

## Icon fallback text

This component includes visually hidden text at the start to provide context to screen reader users who may not be able to see the icon.
The default is 'Warning', but you can change it with the `iconFallbackText` prop - for example, for localisation:

```vue
<gv-warning-text icon-fallback-text="Rhybudd">
  Gallwch gael dirwy o hyd at £5,000 os na fyddwch yn cofrestru.
</gv-warning-text>
```

::gvd-options{component="WarningText"}