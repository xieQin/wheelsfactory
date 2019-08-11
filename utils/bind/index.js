Function.prototype.newBind = function (ctx, ...params) {
  let that = this
  return function (...args) {
    let param = params.concat(args)
    return that.call(ctx, ...param)
  }
}

Function.prototype.newBind2 = function () {
  let fn = this
  let args = Array.prototype.slice.call(arguments)
  let ctx = args.shift()
  return function () {
    let newArgs = args.concat(Array.prototype.slice.call(arguments))
    return fn.apply(ctx, newArgs)
  }
}

let foo = {
  name: 'hello'
}

function sayHello (age, gender) {
  console.log(this.name, age, gender)
}

let personName = sayHello.newBind(foo, 25)
personName('male')