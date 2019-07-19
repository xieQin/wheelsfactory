const debounce = (func, wait, immediate) => {
  let timer = null, result
  if (!immediate) {
    result = func.apply(context, args)
  }
  return function () {
    let ctx = this, args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      result = func.apply(ctx, args)
      return result
    }, wait)
  }
}

export default debounce
