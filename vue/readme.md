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