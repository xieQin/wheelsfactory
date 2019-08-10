const Dep = require('./Dep.js')

const Watcher = function (vm, fn) {
  const self = this
  this.vm = vm

  // 将Dep的target指向自身
  Dep.target = this

  // 向Dep方法添加当前的Watcher
  this.addDep = function () {
    Dep.addSub(self)
  }

  // 更新，触发Vue 组件的_render方法
  this.update = function () {
    console.log('Wactcher update')
    fn()
  }

  // 调用vm._render, 处罚数据的get方法，将当前的Watcher与Dep关联起来
  this.value = fn()
  // 清空Dep.target，防止notify触发时，不停的绑定Watcher与Dep
  Dep.target = null
}

module.exports = Watcher