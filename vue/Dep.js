const Dep = function () {
  const self = this

  // 收集依赖的目标
  this.target = null
  // 存储收集器中需要通知的Watcher
  this.subs = []
  
  // 有目标时，绑定Dep与Watcher的关系
  this.depend = function () {
    if (Dep.target) {
      // 等价于 self.addSub(Dep.target)
      // Dep.target.addDep(self)
      self.addSub(Dep.target)
    }
  }

  // 为当前收集器添加Watcher
  this.addSub = function (watcher) {
    self.subs.push(watcher)
  }

  // 通知收集器中的所有Watcher，并调用其update方法
  this.notify = function () {
    for (let i = 0; i < self.subs.length; i += 1) {
      self.subs[i].update()
    }
  }
}

module.exports = Dep