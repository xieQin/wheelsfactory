function trampoline (fn) {
  // while (fn && fn instanceof Function) {
  //   fn = fn()
  // }
  // return fn
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator(...args) {
    accumulated.push(args);
    console.log(args, accumulated, active)
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = fn.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}

const sum = (x, y) => {
  if (y > 0) return sum(x + 1, y - 1)
  return sum(1, 10000)
}

const sum2 = trampoline((x, y) => {
  if (y > 0) return sum2(x + 1, y - 1)
  return x
})

console.log(sum2(1, 3))