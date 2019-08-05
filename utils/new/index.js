function myNew(target, ...args) {
  let obj = Object.create(target.prototype)
  let res = target.apply(obj, args)
  return typeof res === 'object' ? res : obj
}

function foo (name) {
  this.name = name
}

let newObj = myNew(foo, 'hello')
let obj = new foo('hello')
console.log(newObj, obj)