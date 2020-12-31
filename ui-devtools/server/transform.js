// npx jscodeshift -t ./transform.js src/App.js

/**
 * Input:
 * filename, lineNumber, className
 *
 */

const { relative } = require('path')

const transformer = (file, api, options) => {
  const j = api.jscodeshift

  const propName = 'className'
  const { lineNumber, className } = options

  const source = j(file.source)

  source.find(j.JSXOpeningElement).forEach(path => {
    const startLine = path.value.loc.start.line

    const prettyPath = relative(process.cwd(), file.path) + ':' + lineNumber

    if (startLine === lineNumber) {
      const jsxAttribute = path.value.attributes.find(attr => {
        if (attr.name && attr.name.name === propName) return true
      })

      if (!jsxAttribute) {
        const value = j.stringLiteral(className)

        if (value) {
          path.value.attributes.push(
            j.jsxAttribute(j.jsxIdentifier(propName), value)
          )
        }
      } else if (className === '') {
        path.value.attributes = path.value.attributes.filter(
          attr => attr.name.name !== propName
        )
      } else if (jsxAttribute.value.type === 'Literal') {
        jsxAttribute.value.value = className
      } else if (jsxAttribute.value.type === 'JSXExpressionContainer') {
        console.log(
          `${prettyPath} Cannot predictibly change JSX expression, skipping`
        )
      } else {
        console.log(
          `${prettyPath} Attempting to change non-string value: ${jsxAttribute.value.type}, this might not work`
        )
        jsxAttribute.value.value = className
      }
    }
  })

  return source.toSource()
}

module.exports = transformer
