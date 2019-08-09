// 将多参数的函数转换成单参数的形式
function currying(fn) {
  // let args = [...arguments].slice(1)
  // let length = fn.length
  // let _this = this
  // return function () {
  //   let newArgs = args.concat(arguments)
  //   if (newArgs.length < length) {
  //     return currying.call(_this, fn, ...newArgs)
  //   }
  //   return fn.apply(this, newArgs)
  // }
  var _this = this
  var len = fn.length;
  var args = args || [];

  return function () {
    var _args = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(args, _args);

    // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
    if (_args.length < len) {
      return currying.call(_this, fn, _args);
    }

    console.log(_args)

    // 参数收集完毕，则执行fn
    return fn.apply(this, _args);
  }
}

function tialFactorial(n, total) {
  if (n <= 1) return total
  return tialFactorial(n - 1, n * total)
}

// const factorial = currying(tialFactorial, 1)

// console.log(factorial(5))


function add(x, y, z) {
  return x + y + z
}

console.log(currying(add)(2)(3)(4))