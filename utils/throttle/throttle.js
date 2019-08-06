const throttle = (func, delay) => {
  let timer
  return function () {
    let last = timer, now = Date.now()
    if (now < last + delay) return
    timer = now
    func.apply(this, arguments)
  }
}

export default throttle
