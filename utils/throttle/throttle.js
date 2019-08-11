const throttle = (func, delay) => {
  let timer = Date.now()
  return function () {
    let last = timer, now = Date.now()
    if (now < last + delay) return
    timer = now
    func.apply(this, arguments)
  }
}

export default throttle
