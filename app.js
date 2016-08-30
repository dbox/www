const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const latest = require('babel-preset-latest')

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '**/*.sml',
    css: '**/*.sss'
  },
  ignore: ['**/layout.sml', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({ webpack: ctx, delimiters: ['<%', '%>'], retext: [] })
  },
  postcss: (ctx) => {
    return cssStandards({ webpack: ctx })
  },
  babel: { presets: [latest] }
}
