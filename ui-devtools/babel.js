const { declare } = require('@babel/helper-plugin-utils')
const { types: t } = require('@babel/core')

let fileCount = 0

module.exports = declare(api => {
  api.assertVersion(7)

  const visitor = {
    Program() {
      fileCount = fileCount + 1
    },
    JSXOpeningElement(path, state) {
      if (process.env.NODE_ENV !== 'development') return

      const location = path.container.openingElement.loc

      // the element was generated and doesn't have location information
      if (!location) return

      const attributes = path.container.openingElement.attributes

      const sourceData = JSON.stringify({
        filename: state.filename,
        start: location.start.line,
        end: location.end.line
      })

      attributes.push(
        t.jsxAttribute(
          t.jsxIdentifier('data-source_' + fileCount),
          t.stringLiteral(sourceData)
        )
      )
    }
  }

  return {
    name: 'transform-react-jsx-source-data-attributes',
    visitor
  }
})
