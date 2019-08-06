// 将多参数的函数转换成单参数的形式
function currying (fn, ...n) {
  return function(m) {
    let args = n.concat(m)
    return fn.call(this, ...args)
  }
}

function tialFactorial(n, total) {
  if (n <= 1) return total
  return tialFactorial(n - 1, n * total)
}

const factorial = currying(tialFactorial, 1)

console.log(factorial(5))


function a (x) {
  return function (y) {
    return x + y
  }
}

function c (fn) {
  let params = [...arguments].slice(1)
  return function(...args) {
    let arg = params.concat(args)
    return fn.apply(this, arg)
  }
}
function add (x, y) {
  return x + y
}

console.log(c(add)(2, 3))