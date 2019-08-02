const Minimize = require('minimize')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  var callback = this.async()
  if (this.cacheable) {
    this.cacheable()
  }
  const opts = loaderUtils.getOptions(this) || {}
  var minimize = new Minimize(opts)
  minimize.parse(source, callback)
}