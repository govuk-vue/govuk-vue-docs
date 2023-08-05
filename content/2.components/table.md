---
layout: component
---

# Table

Use the table component to make information easier to compare and scan for users.

See the [GOV.UK Design System documentation on tables](https://design-system.service.gov.uk/components/table/)
for more information on when to use this component.

```vue-html
<gv-table caption="Dates and amounts">
  <gv-table-head>
    <gv-table-row>
      <gv-table-header>Date</gv-table-header>
      <gv-table-header>Amount</gv-table-header>
    </gv-table-row>
  </gv-table-head>
  <gv-table-body>
    <gv-table-row>
      <gv-table-header scope="row">First 6 weeks</gv-table-header>
      <gv-table-cell>£109.80 per week</gv-table-cell>
    </gv-table-row>
    <gv-table-row>
      <gv-table-header scope="row">Next 33 weeks</gv-table-header>
      <gv-table-cell>£109.80 per week</gv-table-cell>
    </gv-table-row>
    <gv-table-row>
      <gv-table-header scope="row">Total estimated pay</gv-table-header>
      <gv-table-cell>£4,282.20</gv-table-cell>
    </gv-table-row>
  </gv-table-body>
</gv-table>
```

## Shorthand aliases

Shorthand aliases are available to make your code closer to HTML and more succinct.

```vue-html
<gv-table caption="GOV.UK Vue table components">
  <gv-thead>
    <gv-tr>
      <gv-th>HTML element</gv-th>
      <gv-th>GOV.UK Vue component</gv-th>
      <gv-th>Shorthand alias</gv-th>
    </gv-tr>
  </gv-thead>
  <gv-tbody>
    <gv-tr>
      <gv-td>table</gv-td>
      <gv-td>gv-table</gv-td>
      <gv-td>None</gv-td>
    </gv-tr>
    <gv-tr>
      <gv-td>thead</gv-td>
      <gv-td>gv-table-head</gv-td>
      <gv-td>gv-thead</gv-td>
    </gv-tr>
    <gv-tr>
      <gv-td>tbody</gv-td>
      <gv-td>gv-table-body</gv-td>
      <gv-td>gv-tbody</gv-td>
    </gv-tr>    
    <gv-tr>
      <gv-td>tr</gv-td>
      <gv-td>gv-table-row</gv-td>
      <gv-td>gv-tr</gv-td>
    </gv-tr>
    <gv-tr>
      <gv-td>th</gv-td>
      <gv-td>gv-table-header</gv-td>
      <gv-td>gv-th</gv-td>
    </gv-tr>
    <gv-tr>
      <gv-td>td</gv-td>
      <gv-td>gv-table-cell</gv-td>
      <gv-td>gv-td</gv-td>
    </gv-tr>
  </gv-tbody>
</gv-table>
```

::gvd-options{component="Table" :showName=true}
::

::gvd-options{component="TableHead" :showName=true}
You can use either `gv-table-head` or `gv-thead` to call this component.
::

::gvd-options{component="TableBody" :showName=true}
You can use either `gv-table-body` or `gv-tbody` to call this component.
::

::gvd-options{component="TableRow" :showName=true}
You can use either `gv-table-row` or `gv-tr` to call this component.
::

::gvd-options{component="TableHeader" :showName=true}
You can use either `gv-table-header` or `gv-th` to call this component.
::

::gvd-options{component="TableCell" :showName=true}
You can use either `gv-table-cell` or `gv-td` to call this component.
::