function instanceOf (obj, target) {
  let proto = obj._proto_, prototype = target.prototype
  while (true) {
    if(proto === null) return false
    if (proto === prototype) return true
    proto = proto._proto_
  }
}

// function instanceOf2 (obj, target) {
//   return target.prototype.isPrototypeOf(obj)
// }

let foo = [1, 2, 3]
console.log(instanceOf(foo, Object))
console.log(instanceOf(foo, Array))