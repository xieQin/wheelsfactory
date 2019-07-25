// 将多参数的函数转换成单参数的形式
function currying (fn, n) {
  return function(m) {
    return fn.call(this, m, n)
  }
}

function tialFactorial(n, total) {
  if (n <= 1) return total
  return tialFactorial(n - 1, n * total)
}

const factorial = currying(tialFactorial, 1)

console.log(factorial(5))
