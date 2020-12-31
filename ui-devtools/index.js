if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/main.js')
} else {
  module.exports = {
    Devtools: function(props) {
      return props.children
    }
  }
}
