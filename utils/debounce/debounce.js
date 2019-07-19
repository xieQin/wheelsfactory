const debounce = (func, wait, immediate) => {
  let _debounceId = null, result
  if (!immediate) {
    result = func.apply(context, args)
  }
  return function () {
    let ctx = this, args = arguments
    if (_debounceId) {
      clearTimeout(_debounceId)
    }
    _debounceId = setTimeout(() => {
      result = func.apply(ctx, args)
      return result
    }, wait)
  }
}

export default debounce
