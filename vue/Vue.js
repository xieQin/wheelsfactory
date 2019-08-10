const Observer = require('./Observer.js')
const Watcher = require('./Watcher.js')

const observe = function (data) {
  return new Observer(data)
}

const Vue = function (options) {
  const self = this

  // 将data选项赋值给this._data
  if (options && typeof options.data === 'function') {
    this._data = options.data.apply(this)
  }

  // 挂载函数为组件添加Watcher实例
  this.mount = function () {
    new Watcher(self, self.render)
  }

  // 渲染函数
  this.render = function () {
    with(self) {
      _data.text
    }
  }

  // 监听组件的数据依赖，进行数据劫持this._data
  observe(this._data) 
}

module.exports = Vue