---
layout: component
---

# Notification banner

Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content.

See the [GOV.UK Design System documentation on notification banners](https://design-system.service.gov.uk/components/notification-banner/)
for more information on when to use this component.

```vue-html
<gv-notification-banner>
  <p class="govuk-notification-banner__heading">
    You have 7 days left to send your application.
    <a class="govuk-notification-banner__link" href="#">View application</a>.
  </p>
</gv-notification-banner>
```

## Success banner

Use `type="success"` to show a green 'success' banner. Use this version to confirm that something the user is expecting
to happen has happened.

By default, the success banner will be auto-focussed when it's mounted. You can disable this by setting 
`:disable-auto-focus="true"`. You can also set `role="region"` - the default for success banners is `role="alert"`,
but the auto-focus will be disabled for any other role.

```vue-html
<gv-notification-banner type="success" :disable-auto-focus="true">
  <h3 class="govuk-notification-banner__heading">
    Training outcome recorded and trainee withdrawn
  </h3>
  <p class="govuk-body">Contact <a class="govuk-notification-banner__link" href="#">example@department.gov.uk</a> if you think there’s a problem.</p>
</gv-notification-banner>
```

## Providing the banner content

You can either use the `text` prop or the default slot to provide content to show in the banner.
If you use the prop, the content will automatically be wrapped in a `<p class="govuk-notification-banner__heading">`, which will apply the
correct paragraph styling. If you use the slot, you'll need to wrap your paragraphs manually.

```vue-html
<gv-notification-banner text="There may be a delay in processing your application because of the coronavirus outbreak." />
```

::gvd-options{component="NotificationBanner" }
::