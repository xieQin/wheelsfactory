### 深入理解Vue响应式原理
![Vue响应式原理](https://user-gold-cdn.xitu.io/2018/4/24/162f71d7977c8a3f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 文件结构
```
------
| Dep.js
| Observer.js
| Watcher.js
| Vue.js
| index.js
```

#### 具体示例
```js
const Vue = require('./Vue.js')

const vue = new Vue ({
  data () {
    return {
      text: 'hello world'
    }
  }
})

vue.mount()
vue._data.text = '111'
```


#### 调用关系及结构
##### Vue
- 将data转成this._data
- 定义this.mount用于生成组件对应的Watcher实例
- 定义this.render
- observe返回Observer实例
- 调用observe(this._data)进行数据劫持

##### Observer
- 接收数据对象data
- 循环遍历data对象的每一个属性，调用defineReactive
- defineReactive调用Object.defineProperty设置get，set，并为对象上的每个属性生成自己的Dep实例dep
- get调用dep.depend()，用于收集当前属性与Watcher的关系
- set调用dep.notify()，用于更新每个需要更新的Watcher

##### Watcher
- 接收vm对象及vm.render方法
- 首先将Dep.target设置为自身
- 然后调用vm.render方法触发数据对象的get方法，实现依赖收集
- 清空Dep.target
- 提供self.addDep()及self.update()方法
- self.addDep() 用于Dep中触发depend方法时被调用
- self.update() 用于Dep中触发notify方法时被调用

##### Dep
- 内部维护self.target, self.subs两个对象
- self.target存放当前Watcher实例
- self.subs存放所有依赖该data属性的Watcher实例
- 同时内部维护的方法有self.depend(), self.addSub(), self.notify()
- self.depend() 用于数据劫持触发get时调用，当self.target存在时，会进一步调用Watcher中的addDep方法
- self.addSub() 用于向self.subs中添加Watcher实例，会被Watcher中的addDep方法调用
- self.notify() 用于数据劫持时触发set时调用，循环触发self.subs中所有Watcher的update方法