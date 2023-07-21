const path = require('path')

module.exports = {
  componentsRoot: 'node_modules/govuk-vue/dist/src/components/govuk-vue',
  components: '**/Gv*.{vue,ts}',
  outDir: '.docs',
  getDestFile: (file, config) => path.join(config.outDir, file.replace(/.+?[\/\\](?<componentname>.+?)\.(vue|ts)$/, '$<componentname>.json')),
  templates: {
    component: require('./docgen/templates/component-json').component,
    props: require('./docgen/templates/props-json').props,
    slots: require('./docgen/templates/slots-json').slots,
  },
}