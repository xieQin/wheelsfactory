## 实现简易版本co，自动执行generator

```js
function co (generator) {
  const iterator = generator();
  function autoRun (iteration) {
    if (iteration.done) return iteration.value // 结束
    const autoPromise = iteration.value
    autoPromise.then(x => autoRun(iterator.next(x))) // 递归
  }

  return autoRun(iterator.next())
}
```