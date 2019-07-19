const throttle = (func, wait) => {
  let timer
  return function () {
    let last = timer, now = Date.now()
    if (now - last >= wait) {
      timer = now
      func.apply(this, arguments)
      return
    }
    if (last + delay > now) return
    timer = now
    func.apply(this, arguments)
  }
}

export default throttle