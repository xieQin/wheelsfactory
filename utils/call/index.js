Function.prototype.newCall = function (ctx, ...args) {
  if (typeof ctx === 'object') {
    ctx = ctx || global
  } else {
    ctx = Object.create(null)
  }
  let fn = Symbol('fn')
  ctx[fn] = this
  ctx[fn](...args)
  delete ctx[fn]
}

function foo (text, text2) {
  console.log(text, text2)
}

foo.newCall(this, 'hello', 'world')