import path from 'path'
import fs from 'fs'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      let gotMatch = false;
      let i = 0;
      let result = file.body;

      // Loop until there are no more examples in this document
      do {
        // Find the next code block
        const cbRegex = /(?<block>```vue(?<rawcode>[.\s\S]+?)```)/mi
        const codeBlock = result.match(cbRegex);

        if(codeBlock && codeBlock.length > 0) {
          gotMatch = true;
          // Pull out the raw code and wrap it in a <template> if it's not in SFC format, then save it
          let rawCode = codeBlock.groups.rawcode.trim();
          let sfc = rawCode;
          let isVueHtml = false;
          if(sfc.indexOf('<template>') === -1 && sfc.indexOf('<script') === -1) {
            sfc = `<template>\n  ${sfc}\n</template>`
            isVueHtml = true;
          }

          // Because the content folders are numbered (1., 2.) filenames end up an extraneous '.'. We have to remove it for the examples to work.
          const exampleFilename = file._id
            .replaceAll(':','')
            .replaceAll('-','')
            .replace('.md',`Example${i}.vue`)
            .replace('.vue','-vue')
            .replaceAll('.','')
            .replace('-vue','.vue');
          const exampleFolder = './.generated-examples/'
          const filepath = path.join(exampleFolder, exampleFilename);
          if(!fs.existsSync(exampleFolder)) {
            fs.mkdirSync(exampleFolder, {recursive: true})
          }
          fs.writeFileSync(filepath, sfc);

          // Convert this example to MDC format to put it in our code sample template
          // Call the example component SFC we've just saved to disk
          // Temporarily change ```vue to ```converted so the regex doesn't pick it up next time round
          const exampleComponentName = exampleFilename.replace('.vue','');

          result = result.replace(cbRegex, `\n\n
::gvd-code-sample
#rendered
<${exampleComponentName}/>

#code
$<block>
::
        `).replace('```vue', `\`\`\`converted${(isVueHtml) ? '-html' : ''}`) // If the code example was not in SFC syntax originally, we want to end up with ```vue-html rather than ```vue to get the correct syntax highlighting
          i++;
        } else {
          gotMatch = false;
        }

      } while(gotMatch)

      // Change back the fenced Vue code blocks
      file.body = result.replace(/```converted/g,'```vue');
    }
  })
})