const component = (
  renderedUsage,
) => {
  return JSON.stringify({
    props: renderedUsage.props,
    slots: renderedUsage.slots
  });
}

module.exports = {
  component,
  default: component
}