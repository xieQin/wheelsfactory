Function.prototype.newBind = function (ctx, ...params) {
  let that = this
  return function (...args) {
    let param = params.concat(args)
    return that.call(ctx, ...param)
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