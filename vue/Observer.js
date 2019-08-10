const Dep = require('./Dep.js')

const Observer = function (data) {
  // 循环为每个属性添加get， set
  for (let key in data) {
    defineReactive(data, key)
  }
}

const defineReactive = function (data, key) {
  let val = data[key]
  // 为每个属性设置依赖，用于数据劫持时的调用
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get () {
      console.log('get')
      // 调用依赖收集中的addSub，用于收集当前属性与Watcher中的依赖关系
      dep.depend()
      return val
    },
    set (newVal) {
      console.log('set')
      if (newVal === val) return
      val = newVal
      // 当属性值发生变化时，通知依赖收集器，更新每个需要更新的Watcher
      dep.notify()
    }
  })
}

module.exports = Observer