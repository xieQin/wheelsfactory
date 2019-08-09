function myNew(target, ...args) {
  let obj = Object.create(target.prototype)
  let res = target.apply(obj, args)
  return res != null && (typeof res === 'object' || typeof res === 'function') ? res : obj
}

function foo (name) {
  this.name = name
}

let newObj = myNew(foo, 'hello')
let obj = new foo('hello')
console.log(newObj, obj)